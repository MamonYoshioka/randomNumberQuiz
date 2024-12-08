/* 
仕様
何か数値をユーザに入力してもらう。
その数値を元にランダムな数値が取得される。
そのランダムな数値をあたれば、『数値が一致しました！』と表示する。
また、そのランダムな数値が当たるまでの回数も表示する。

詳細設計
・promptでの入力
・数値に変換するためにparseIntを使用
・数値以外のものが入ったら、再度promptで入力するように促す
・ランダムな数字が入るようにする
・推測した数値をユーザに入力してもらう
・推測した数値と計算されたランダムな数値が一致すれば終了
*/

let userInputNumber = parseInt(prompt(`何か数値を入力してください。`));

while(!userInputNumber){
    userInputNumber = parseInt(prompt(`エラーです。再度、数値を入力してください。`));
}
// ランダムな数値の計算
const targetNumber = Math.floor(Math.random() * userInputNumber) + 1;

// 推測数値の入力
let guess = prompt(`ランダムな数値が決まりました。その数値を当ててください。`);
// 正解までのカウント初期値
let count = 1;

while(parseInt(guess) !== targetNumber){
    if(guess === `q`)break;
    count++;
    if(guess > targetNumber){
        guess = prompt(`数値が大きいです。再度、入力してください。`);
    }else{
        guess = prompt(`数値が小さいです。再度、トライしてください。`);
    }
}
if(guess === `q`){
    console.log(`強制終了しました。`);
}else{
    console.log(`数値が一致しました！正解までの回数は${count}回です。`);
}
