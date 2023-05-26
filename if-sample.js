let age = 20;

if (age >= 20) {
    console.log("成人です");
}

let age2 = 18;

if (age2 >= 20) {
    console.log("成人です");
} else {
    console.log("未成年です");
}


let score = 85;

if (score >= 90) {
    console.log("優");
} else if (score >= 80) {
    console.log("良");
} else if (score >= 70) {
    console.log("可");
} else {
    console.log("不可");
}

let day = 3;

switch(day) {
    case 0:
        console.log("日曜日");
        break;
    case 1:
        console.log("月曜日");
        break;
    case 2:
        console.log("火曜日");
        break;
    case 3:
        console.log("水曜日");
        break;
    case 4:
        console.log("木曜日");
        break;
    case 5:
        console.log("金曜日");
        break;
    case 6:
        console.log("土曜日");
        break;
    default:
        console.log("無効な値");
}