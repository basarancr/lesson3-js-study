// HTTPモジュールを読み込む
const http = require('http');

// Webサーバーを作成
const server = http.createServer((req, res) => {
    res.statusCode = 200;  // ステータスコードを200（成功）に設定
    res.setHeader('Content-Type', 'text/plain');  // ヘッダーを設定
    res.end('Hello, World!\n');  // レスポンスの本体を設定
});

// サーバーを起動
server.listen(3000, '127.0.0.1', () => {
    console.log('サーバーが起動しました。アクセスは http://127.0.0.1:3000 から可能です！');
});