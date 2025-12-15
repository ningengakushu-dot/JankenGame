// 23:43 mojos 3回連続で勝ったら修了するじゃんけんアプリ
// ただし、あいこはリセットされずに継続
// 23:45 mojos 勝った数と負けた数を最後に出力
// 23:53 mojos aikoの場合は、あいこ　価値なら価値　という文字を出力

// 第１弾 勝ち負けなし、結果のミ表示
// プッシュ（グーチョキパーのいずれか）をクリックする
// ランダムで文字列のぐー・チョキ・パーが決定し、変数ナニカに代入される
// ドキュメントoutputを書き換える

// 第２弾 3回連続で勝ったら終了
// 勝つとArrに+1、負けるとArrが0になる、3回勝つ（Arr=2）になるまで繰り返し、

let output = document.getElementById('output')
let coment = document.getElementById('coment')
let jan = document.getElementById('jan')
let kati = 0
let make = 0
let wake = 0
let katiArr = 0

if(katiArr === 2){
    jan.innerHTML = `YOU　★　完全勝利　★　おつかれさま！`
}

function goo() {
    output.innerHTML = ""
    coment.innerHTML = ""
    let janNumber = Math.floor(Math.random() * 3);
    console.log(janNumber)
    console.log(katiArr)
    
    if(janNumber === 0){
        output.innerHTML = "グー"
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 1){
        output.innerHTML = "チョキ"
        kati += 1
        katiArr += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 2){
        output.innerHTML = "パー"
        make += 1
        katiArr = 0
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