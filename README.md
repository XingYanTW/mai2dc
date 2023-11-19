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

2. Open `config.yaml` and update the values with your Discord webhook URL and other configurations.

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