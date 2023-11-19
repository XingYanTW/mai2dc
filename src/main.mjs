// src/main.js
import chalk from 'chalk';
import schedule from 'node-schedule';
import fs from 'fs/promises';

import loadConfig from './utils/configLoader.mjs';
import downloadFile from './utils/downloader.mjs';
import downloadImages from './utils/imageDownloader.mjs';
import compareJSONFiles from './utils/jsonComparator.mjs';
import saveNewObjects from './utils/newObjectSaver.mjs';
import moment from "moment-timezone";

// Function to log the next scheduled run time
const logNextScheduledRunTime = (job) => {
    const nextRunTimestamp = schedule.scheduledJobs[job.name].nextInvocation();
    const nextRunTime = moment(nextRunTimestamp).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.yellow(`[INFO] Next scheduled run at: ${nextRunTime}`));
};

// Main function
const main = async () => {
    try {
        const configPath = 'src/config.yml';
        const config = await loadConfig(configPath);

        if (!config) {
            console.log(chalk.red('[ERROR] Configuration not loaded. Exiting.'));
            return;
        }

        const { timezone } = config;

        // Set the desired time zone from the configuration
        const timeZone = timezone || 'Asia/Taipei';


        // Schedule the main function for every day at 12:00 PM in the specified time zone
        const job = schedule.scheduleJob({ hour: 12, minute: 0, tz: timeZone }, async () => {
            try {

            await main();
            } catch (error) {
                console.error(chalk.red('[ERROR] An unexpected error occurred:'), error.message);
            }
        });

        // Download the new JSON file
        const newFileName = 'src/new.json';
        const url = 'https://info-maimai.sega.jp/wp-json/thistheme/v1/articlesRest';

        // Download the new JSON file
        const newData = await downloadFile(url, newFileName);

        // Compare the two JSON files
        const oldFileName = 'src/old.json'; // Adjust the path as needed
        //const oldData = JSON.parse(await fs.readFile(oldFileName, 'utf-8')) || [];

        const newObjects = await compareJSONFiles(oldFileName, newFileName);


        // Download and save images for new objects
        await downloadImages(newObjects, config);

        // Rename the downloaded JSON file to 'old.json'
        await fs.rename(newFileName, oldFileName);

        // Log the next scheduled run time for tomorrow at 12:00 PM
        const nextRunTimestamp = schedule.scheduledJobs[job.name].nextInvocation();
        const nextRunTimeTomorrow = moment(nextRunTimestamp)
            .add(1, 'days')
            .set({ hour: 12, minute: 0, second: 0 })
            .format('YYYY-MM-DD HH:mm:ss');

        console.log(chalk.yellow(`[INFO] Next scheduled run at 12:00 PM: ${nextRunTimeTomorrow}`));
    } catch (error) {
        console.error(chalk.red('[ERROR] An unexpected error occurred:'), error.message);
    }
};

// Run the main function to start the scheduling
main();
