# Mai2DC Update Checker

Mai2DC is a Node.js program that downloads JSON data, compares two JSON files, and posts new updates to Discord.
(International ver. Only)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/XingyanTW/mai2dc.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mai2dc
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a configuration file:

   ```bash
   cp config.example.yaml config.yaml
   ```

2. Create a `.env` file:

   ```bash
   cp .env.example .env
   ```
   
3. Edit the configuration file and `.env` file:

## Usage

Run the program:

```bash
npm start
```

The program will download JSON data, compare it with the previous data, and post new updates to Discord. If there are no new updates, the program won't log or save an empty array.

## Schedule

By default, the program runs daily at 12:00 PM (noon) in the 'Asia/Taipei' timezone. You can adjust the schedule in the `main.mjs` file.

## Configuration Options

- `webhookUrl`: Your Discord webhook URL.
- `avatarUrl`: The avatar URL for the Discord webhook.

## Environment Variables
- 'WEBHOOKURL': Your Discord webhook URL.

## Webhook

1. Go to channel's settings page
2. Click Integrations

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/webhook-1.png?raw=true)

3. Click Webhooks

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/webhook-2.png?raw=true)

4. Click ![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-3.png?raw=true)


5. Click that you created webhook

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-4.png?raw=true)

6. Click ![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-5.png?raw=true)


7. Replace it at .env with `https://discord.com/api/webhooks/your-webhook-id/your-webhook-token`

⚠ Don't Share Your Webhook Url With Others!!! ⚠
