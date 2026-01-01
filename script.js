const gooBtn = document.getElementById('goo')
const chokiBtn = document.getElementById('choki')
const parBtn = document.getElementById('par')
const resetBtn = document.getElementById('reset')

const output = document.getElementById('output')
const coment = document.getElementById('coment')
const comentCSS = document.querySelector('#coment')
const jan = document.getElementById('jan')
const janCSS = document.querySelector('#jan');

const hands = {
    0: "images/gu.png",
    1: "images/choki.png",
    2: "images/pa.png",
}

let kati = 0
let make = 0
let wake = 0
let katiArr = 0

const playGame = (userHand) => {
    // 画面表示をリセット
    output.innerHTML = ""
    coment.innerHTML = ""
    comentCSS.style.display = "inherit"

    // 相手の手 ランダム（0:グー, 1:チョキ, 2:パー）
    let enemyHand = Math.floor(Math.random() * 3)
    console.log(`自分の手: ${userHand}, 相手の手: ${enemyHand}`);

    // 画面に敵の手を表示
    if (enemyHand === 0) {
        output.textContent = "グー"
    } else if (enemyHand === 1) {
        output.textContent = "チョキ"
    } else if (enemyHand === 2) {
        output.textContent = "パー"
    }

    if (userHand === enemyHand) {
        wake += 1
        coment.textContent = "あいこ！もう一回！"
    }
    else if (userHand === 0 && enemyHand === 1 ||
        userHand === 1 && enemyHand === 2 ||
        userHand === 2 && enemyHand === 0) {
        kati += 1
        katiArr += 1
        coment.textContent = "勝ち！"
    }
    else if (userHand === 0 && enemyHand === 2 ||
        userHand === 1 && enemyHand === 0 ||
        userHand === 2 && enemyHand === 1) {
        make += 1
        katiArr = 0
        coment.textContent = "敗北！"
    }

    if (userHand === 0) {
        coment.textContent += "（あなたの手：グー）"
    } else if (userHand === 1) {
        coment.textContent += "（あなたの手：チョキ）"
    } else if (userHand === 2) {
        coment.textContent += "（あなたの手：パー）"
    }
    coment.innerHTML += `<br>勝：${kati}　負：${make}　引き分け：${wake}`

    if (katiArr === 3) {
        output.textContent = `パパのかち！`
        coment.textContent = `勝：${kati}　負：${make}　引き分け：${wake}`
        janCSS.style.display = "none"
    }
}

const reset = () => {
    kati = 0
    make = 0
    wake = 0
    katiArr = 0
    output.textContent = "もっかい、あそぼ～！"
    coment.textContent = "▼ えらんでね ▼"
    coment.innerHTML += `<br>勝：${kati}　負：${make}　引き分け：${wake}`
    janCSS.style.display = "flex"
}

gooBtn.addEventListener('click', () => {
    playGame(0);
})
chokiBtn.addEventListener('click', () => {
    playGame(1);
})
parBtn.addEventListener('click', () => {
    playGame(2);
})
resetBtn.addEventListener('click', () => {
    reset();
}
)