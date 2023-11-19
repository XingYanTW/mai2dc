// src/utils/imageDownloader.mjs
import fs from 'fs/promises';
import axios from 'axios';
import chalk from 'chalk';
import postImageToDiscord from "./discordPoster.mjs";
import moment from "moment";

const downloadImages = async (data, config) => {
    try {
        const imageFolder = 'images';
        await fs.mkdir(imageFolder, { recursive: true });

        for (const item of data) {
            // Extract year, month, and day from the string
            const myDate = moment(item.date, 'YYYY年 MM月 DD日').toDate();
            const date = moment(myDate).format('YYYY-MM-DD');
            const imageUrl = item.thumbnail;
            const imageFileName = `${imageFolder}/${date}_pop.jpg`;

            console.log(chalk.cyan(`Downloading image from: ${imageUrl}`));

            const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            await fs.writeFile(imageFileName, imageResponse.data, 'binary');
            console.log(chalk.green(`Downloaded and saved image: ${imageFileName}`));

            await postImageToDiscord(imageUrl, data, config);
        }
    } catch (error) {
        console.error(chalk.red('Error downloading images:'), error.message);
        throw error;
    }
};

export default downloadImages;
