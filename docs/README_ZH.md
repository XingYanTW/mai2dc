# Mai2DC Update Checker

Mai2DC 是一個 Node.js 程式，用於下載 JSON 數據，比對兩個 JSON 文件，並將新的更新發送到 Discord 上。
（僅限國際版）

## 先決條件

在開始之前，確保已滿足以下要求：

- 已安裝 Node.js
- 已安裝 npm（Node Package Manager）

## 安裝

1. 複製存儲庫：

   ```bash
   git clone https://github.com/XingyanTW/mai2dc.git
   ```

2. 切換到專案目錄：

   ```bash
   cd mai2dc
   ```

3. 安裝依賴項：

   ```bash
   npm install
   ```

## 配置

1. 創建配置文件：

   ```bash
   cp config.example.yaml config.yaml
   ```

2. 打開 `config.yaml` 並使用你的 Discord webhook URL 和其他配置更新值。

[示例配置的鏈接](https://github.com/XingYanTW/mai2dc/blob/main/src/config.example.yml)

## 使用

運行程序：

```bash
npm start
```

該程序將下載 JSON 數據，與先前的數據進行比較，並將新的更新發送到 Discord。如果沒有新的更新，程序將不會記錄或保存空數組。

## 定時任務

默認情況下，該程序每天在亞洲/台北時區的中午 12:00 運行。你可以在 `main.mjs` 文件中調整計劃。

## 配置選項

- `webhookUrl`：你的 Discord webhook URL。
- `avatarUrl`：Discord webhook 的頭像 URL。

## Webhook
(中文圖片懶得拍)
1. 轉到頻道設置頁面
2. 點擊整合

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/webhook-1.png?raw=true)

3. 點擊 Webhooks

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/webhook-2.png?raw=true)

4. 點擊 ![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-3.png?raw=true)


5. 點擊你創建的 Webhook

![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-4.png?raw=true)

6. 點擊 ![](https://github.com/XingYanTW/mai2dc/blob/main/docs/Webhook-5.png?raw=true)


7. 將其替換為 `config.yml` 中的 `https://discord.com/api/webhooks/your-webhook-id/your-webhook-token`

⚠ 不要與他人分享你的 Webhook URL！⚠
