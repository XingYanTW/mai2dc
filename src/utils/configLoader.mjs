// src/utils/configLoader.mjs
import fs from 'fs/promises';
import yaml from 'js-yaml';

const loadConfig = async (configPath) => {
    try {
        const configContent = await fs.readFile(configPath, 'utf-8');
        return yaml.load(configContent) || {}; // Default to an empty object if configContent is falsy
    } catch (error) {
        console.error('[ERROR] Error loading configuration:', error.message);
        return {};
    }
};

export default loadConfig;
