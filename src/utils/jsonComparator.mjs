// src/utils/jsonComparator.mjs
import fs from 'fs/promises';
import chalk from 'chalk';
import saveNewObjects from "./newObjectSaver.mjs";

const compareJSONFiles = async (oldFileName, newFileName) => {
    try {
        const oldData = JSON.parse(await fs.readFile(oldFileName, 'utf-8')) || [];
        const newData = JSON.parse(await fs.readFile(newFileName, 'utf-8')) || [];

        const newObjects = newData.filter((newObj) => {
            return !oldData.some((oldObj) => {
                return JSON.stringify(oldObj.date) === JSON.stringify(newObj.date);
            });
        });

        if (newObjects.length > 0) {
            console.log(chalk.green('[INFO] New Objects:'), newObjects);
            // Save new objects to a new file and rename the downloaded file to 'old.json'
            await saveNewObjects(newObjects, 'src/newObjects.json');
        }else{
            console.log(chalk.green('[INFO] Same file, Skipping!'))
        }



        return newObjects;
    } catch (error) {
        console.error(chalk.red('[ERROR] Error comparing JSON files:'), error.message);
        throw error;
    }
};

export default compareJSONFiles;
