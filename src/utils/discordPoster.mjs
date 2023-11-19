// src/utils/discordPoster.mjs
import axios from 'axios';
import chalk from 'chalk';
import moment from "moment";

const postImageToDiscord = async (imageUrl, previousJsonData, config) => {
    try {
        const { webhookUrl, avatarUrl } = config;

        const updateDate = moment(previousJsonData[0].date).format('YYYY-MM-DD');

        const embedMessage = {
            embeds: [
                {
                    title: 'New Update Found',
                    description: `Update date: ${updateDate}`,
                    color: 4571344,
                    image: { url: imageUrl },
                    author: { name: 'maimai DX International ver.', icon_url: avatarUrl },
                    footer: { text: `Generated at ${moment().format('YYYY-MM-DD')}` },
                    thumbnail: { url: 'https://maimai.sega.com/assets/img/festival/top/kv_logo.png' },
                },
            ],
            username: 'maimai DX International ver.',
            avatar_url: avatarUrl,
        };

        await axios.post(webhookUrl, embedMessage);

        console.log(chalk.green('[INFO] Image posted to Discord successfully.'));
    } catch (error) {
        console.error(chalk.red('[ERROR] Error posting message to Discord:'), error.message);
        throw error;
    }
};

export default postImageToDiscord;
