let output = document.getElementById('output')
let coment = document.getElementById('coment')
let jan = document.getElementById('jan')
let kati = 0
let make = 0
let wake = 0
let katiArr = 0


function playGame(userHand) {
    // 画面表示をリセット
    output.innerHTML = ""
    coment.innerHTML = ""

    // 相手の手 ランダム（0:グー, 1:チョキ, 2:パー）
    let enemyHand = Math.floor(Math.random() * 3);

    // 画面に自分の手を表示
    if (userHand === 0) {
        output.innerHTML = "グー"
    } else if (userHand === 1) {
        output.innerHTML = "チョキ"
    } else if (userHand === 2) {
        output.innerHTML = "パー"
    }
    console.log(`自分の手: ${userHand}, 相手の手: ${enemyHand}`);

    // あいこ
    if (userHand === enemyHand) {
        wake += 1
        coment.innerHTML = `あいこ！もう一回！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    // 勝ち
    else if (userHand === 0 && enemyHand === 1 ||
        userHand === 1 && enemyHand === 2 ||
        userHand === 2 && enemyHand === 0) {
        kati += 1
        katiArr += 1
        coment.innerHTML = `勝ち！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }
    // まけ
    else if (userHand === 0 && enemyHand === 2 ||
        userHand === 1 && enemyHand === 0 ||
        userHand === 2 && enemyHand === 1) {
        make += 1
        katiArr = 0
        coment.innerHTML = `敗北！<br>勝：${kati}　負：${make}　引き分け：${wake}`
    }

    if (katiArr === 3) {
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
        `<div id="goo" class="hand" onclick="playGame(0)">グー</div>
    <div id="choki" class="hand" onclick="playGame(1)">チョキ</div>
    <div id="par" class="hand" onclick="playGame(2)">パー</div>`
}