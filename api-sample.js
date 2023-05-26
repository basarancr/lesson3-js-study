// 必要なモジュールを読み込む
const express = require('express');

// Expressアプリケーションを作成
const app = express();

// JSONのミドルウェアを使う
app.use(express.json());

// GETリクエストを'/message'に対して定義
app.get('/message', (req, res) => {
    res.json({ message: 'こんにちは、はじめてのAPI' });
});

// サーバーを起動
const port = 3000;
app.listen(port, () => {
    console.log(`サーバーが起動しました、http://localhost:${port}`);
});


// npm install express
// node app.js
// http://localhost:3000/message
