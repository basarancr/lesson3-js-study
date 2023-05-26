var test = 'あったかいんだから〜' 
test = 'あったかいわけではない'
console.log(test)

const test2 = 'あったかいんだから〜' 
// test2 = 'あったかいわけではない'
console.log(test2)


function myFunction() {
    var x = 10;  // これは関数スコープの変数です
    console.log(x);  // 10と出力されます
}

myFunction();
console.log(x);