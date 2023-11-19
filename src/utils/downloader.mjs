// src/utils/downloader.mjs
import axios from 'axios';
import chalk from "chalk";
import fs from "fs/promises";

// Function to download a file from a URL
const downloadFile = async (url, fileName) => {
    try {
        const response = await axios.get(url);
        await fs.writeFile(fileName, JSON.stringify(response.data, null, 2));
        console.log(chalk.green(`Downloaded and saved ${fileName}`));
    } catch (error) {
        console.error(chalk.red('Error downloading the file:'), error.message);
    }
};

export default downloadFile;
