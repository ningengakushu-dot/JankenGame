// 第一弾 勝ち負けなし、結果のミ表示
// プッシュ（グーチョキパーのいずれか）をクリックする
// ランダムで文字列のぐー・チョキ・パーが決定し、変数ナニカに代入される
// ドキュメントoutputを書き換える

let output = document.getElementById('output')
let coment = document.getElementById('coment')
let kati = 0
let make = 0
let wake = 0

function goo() {
    output.innerHTML = ""
    coment.innerHTML = ""
    let janNumber = Math.floor(Math.random() * 3);
    console.log(janNumber)
    if(janNumber === 0){
        output.innerHTML = "グー"
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 1){
        output.innerHTML = "チョキ"
        kati += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 2){
        output.innerHTML = "パー"
        make += 1
        coment.innerHTML = `敗北...<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
}

function choki() {
    output.innerHTML = ""
    coment.innerHTML = ""
    let janNumber = Math.floor(Math.random() * 3);
    console.log(janNumber)
    if(janNumber === 0){
        output.innerHTML = "グー"
        make += 1
        coment.innerHTML = `敗北...<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 1){
        output.innerHTML = "チョキ"
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 2){
        output.innerHTML = "パー"
        kati += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
}


function par() {
    output.innerHTML = ""
    coment.innerHTML = ""
    let janNumber = Math.floor(Math.random() * 3);
    console.log(janNumber)
    if(janNumber === 0){
        output.innerHTML = "グー"
        kati += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 1){
        output.innerHTML = "チョキ"
        make += 1
        coment.innerHTML = `敗北...<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 2){
        output.innerHTML = "パー"
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
}


// output.textContent = "bbb";
// let output = 'しもじょ';
// const btn = document.querySelectorAll(".btn");