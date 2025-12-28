// 23:43 mojos 3回連続で勝ったら修了するじゃんけんアプリ、ただし、あいこはリセットされずに継続
// 23:45 mojos 勝った数と負けた数を最後に出力
// 23:53 mojos aikoの場合は、あいこ　価値なら価値　という文字を出力
/*
-- 第１弾 -- 勝ち負けなし、結果のみ表示
プッシュ（グーチョキパーのいずれか）をクリックする
ランダムで文字列のぐー・チョキ・パーが決定し、変数ナニカに代入される
ドキュメントoutputを書き換える

-- 第２弾 -- 3回連続で勝ったら終了
勝つとArrに+1、負けるとArrが0に戻る、3連続勝利（katiArr=3）になるまで繰り返し

-- 第３弾 -- リセットボタン（YES or NO）を追加
*/

let output = document.getElementById('output')
let coment = document.getElementById('coment')
let jan = document.getElementById('jan')
let kati = 0
let make = 0
let wake = 0
let katiArr = 0

function goo() {
    output.innerHTML = ""
    coment.innerHTML = ""
    let janNumber = Math.floor(Math.random() * 3);
    console.log(`連続勝利：${katiArr}`)
    
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

    if(katiArr === 3){
        jan.innerHTML = `★ YOU WIN !! ★ おつかれさま！`
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
        katiArr = 0
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
        katiArr += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }

    if(katiArr === 3){
        jan.innerHTML = `★ YOU WIN !! ★ おつかれさま！`
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
        katiArr += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 1){
        output.innerHTML = "チョキ"
        make += 1
        katiArr = 0
        coment.innerHTML = `敗北...<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    if(janNumber === 2){
        output.innerHTML = "パー"
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }

    if(katiArr === 3){
        jan.innerHTML = `★ YOU WIN !! ★ おつかれさま！`
    }
}

function reset() {
    kati = 0
    make = 0
    wake = 0
    katiArr = 0
    output.innerHTML = ""
    coment.innerHTML = `<div id="coment">いざ、勝負！</div>`
    jan.innerHTML = 
    `<div id="goo" class="hand" onclick="goo()">グー</div>
    <div id="choki" class="hand" onclick="choki()">チョキ</div>
    <div id="par" class="hand" onclick="par()">パー</div>`
}