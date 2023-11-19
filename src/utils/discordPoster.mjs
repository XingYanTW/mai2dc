// src/utils/discordPoster.mjs
import axios from 'axios';
import chalk from 'chalk';
import moment from "moment";

const postImageToDiscord = async (imageUrl, previousJsonData, config) => {
    try {
        const { webhookUrl, avatarUrl } = config;


        const myDate = moment(previousJsonData[0].date, 'YYYY年 MM月 DD日');
        myDate.add(1, 'days');
        const updateDate = moment(myDate).format('YYYY-MM-DD');

        const embedMessage = {
            embeds: [
                {
                    title: '新しいアップデートがあります',
                    description: `更新日: ${updateDate}`,
                    color: 4571344,
                    image: { url: imageUrl },
                    author: { name: 'maimai でらっくす', icon_url: avatarUrl },
                    footer: { text: `Generated at ${moment().format('YYYY-MM-DD')}` },
                    thumbnail: { url: 'https://maimai.sega.jp/assets/maiHeader/logo.png' },
                },
            ],
            username: 'maimai でらっくす',
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
