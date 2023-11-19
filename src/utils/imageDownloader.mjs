// src/utils/imageDownloader.mjs
import fs from 'fs/promises';
import axios from 'axios';
import chalk from 'chalk';
import postImageToDiscord from "./discordPoster.mjs";

const downloadImages = async (data, config) => {
    try {
        const imageFolder = 'images';
        await fs.mkdir(imageFolder, { recursive: true });

        for (const item of data) {
            const date = item.date.join('-');
            const imageUrl = `https://maimai.sega.com/assets/img/download/pop/download/${date}/pop.jpg`;
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
