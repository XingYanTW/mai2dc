// src/utils/newObjectSaver.mjs
import fs from 'fs/promises';
import chalk from 'chalk';

const saveNewObjects = async (newObjects, fileName) => {
    try {
        await fs.writeFile(fileName, JSON.stringify(newObjects, null, 2), 'utf-8');
        console.log(chalk.green(`[INFO] New objects saved to: ${fileName}`));
    } catch (error) {
        console.error(chalk.red('[ERROR] Error saving new objects:'), error.message);
        throw error;
    }
};

export default saveNewObjects;
