// 関数の定義
function sayHello() {
    console.log("こんにちは、世界");
}

// 関数の呼び出し
sayHello();

// パラメータ付きの関数の定義
function greet(name) {
    console.log("こんにちは、" + name);
}

// 関数の呼び出し
greet("田中");


// 戻り値のある関数の定義
function add(a, b) {
    return a + b;
}

// 関数の呼び出しと戻り値の利用
var sum = add(5, 7);
console.log(sum);  // 12と表示されます
