// 配列の作成
let fruits = ["りんご", "バナナ", "いちご"];

// 配列の要素にアクセス
console.log(fruits[2]);  // "りんご"

// 配列の長さを取得
console.log(fruits.length);  // 3

const members = {1: "鈴木", 2: "田中", 3: "佐藤"}
console.log(members['1'])


// 配列の作成
let numbers2 = [1, 2, 3, 4, 5];

// 配列の各要素を2倍にする関数
function doubleArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}

// 関数のテスト
console.log(doubleArray(numbers2));  // [2, 4, 6, 8, 10]
