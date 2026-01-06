const gooBtn = document.getElementById('goo')
const chokiBtn = document.getElementById('choki')
const parBtn = document.getElementById('par')
const resetBtn = document.getElementById('reset')
const bgm = document.getElementById('bgm');
const bgmCtrl = document.getElementById('bgm-ctrl');
const heartBtn = document.getElementById('heart-btn');

const output = document.getElementById('output')
const coment = document.getElementById('coment')
const jan = document.getElementById('jan')
const charImg = document.getElementById('charImg');
const message = document.getElementById('message')

const comentCSS = document.querySelector('#coment')
const janCSS = document.querySelector('#jan')
const messageCSS = document.querySelector('#message')
const chatWindow = document.getElementById('chatWindow');
const sendBtn = document.getElementById('sendBtn');

let playing = false; // 連打防止用（true = じゃんけん中）
let win = 0
let lose = 0
let draw = 0
let winArr = 0
let loseArr = 0


const charPose = {
    gameWin: 'images/gamewin.png',
    gameLose: 'images/gamelose.png',
    wait: 'images/wait.gif',
    win: 'images/win.png',
    lose: 'images/lose.png',
    draw: 'images/draw.gif',
    0: 'images/goo.png',
    1: 'images/cyoki.png',
    2: 'images/par.png',
};

// メッセージを定期的に更新（じゃんけん中以外）
setInterval(() => {
    if (playing === false && win === 0 && lose === 0 && draw === 0 && janCSS.style.display !== "none") {
        const outMessage = [
            'パパ、あそぼ～！',
            'はやく～！',
            'なにをしてるの？'
        ]
        output.textContent = outMessage[Math.floor(Math.random() * outMessage.length)]
    }
}, 6000);

const playGame = (userHand) => {

    if (playing === true) {
        return; // じゃんけん中は処理スキップ
    }

    playing = true; // じゃんけん中に変更
    output.innerHTML = ""
    coment.innerHTML = ""
    comentCSS.style.display = "inherit"

    // 相手の手 ランダム（0:グー 1:チョキ 2:パー）
    let enemyHand = Math.floor(Math.random() * 3)
    charImg.src = charPose[enemyHand];

    // 相手の手を出力
    if (enemyHand === 0) {
        output.textContent = "グー！"
    } else if (enemyHand === 1) {
        output.textContent = "チョキ！"
    } else if (enemyHand === 2) {
        output.textContent = "パー！"
    }

    // 自分の手を出力
    if (userHand === 0) {
        coment.textContent = "（あなたの手：グー）"
        coment.innerHTML += `<br>勝：${win}　負：${lose}　引き分け：${draw}`
    } else if (userHand === 1) {
        coment.textContent = "（あなたの手：チョキ）"
        coment.innerHTML += `<br>勝：${win}　負：${lose}　引き分け：${draw}`
    } else if (userHand === 2) {
        coment.textContent = "（あなたの手：パー）"
        coment.innerHTML += `<br>勝：${win}　負：${lose}　引き分け：${draw}`
    }

    setTimeout(() => {
        // 勝敗判定を出力
        if (userHand === enemyHand) {
            draw += 1
            coment.textContent = "引き分け"
            output.textContent = "あいこだね！"
            charImg.src = charPose.draw;
        }
        else if (userHand === 0 && enemyHand === 1 ||
            userHand === 1 && enemyHand === 2 ||
            userHand === 2 && enemyHand === 0) {
            win += 1
            winArr += 1
            loseArr = 0
            coment.textContent = "勝ち"
            output.textContent = "まけちゃった…"
            charImg.src = charPose.lose;
        }
        else if (userHand === 0 && enemyHand === 2 ||
            userHand === 1 && enemyHand === 0 ||
            userHand === 2 && enemyHand === 1) {
            lose += 1
            loseArr += 1
            winArr = 0
            coment.textContent = "敗北"
            output.textContent = "やったぁ！"
            charImg.src = charPose.win;
        }


        coment.innerHTML += `<br>勝：${win}　負：${lose}　引き分け：${draw}`

        //　２連続で勝ち or ２連負けでゲーム終了
        if (winArr === 2) {
            output.textContent = "えーん、えーん！"
            coment.textContent = `勝：${win}　負：${lose}　引き分け：${draw}`
            janCSS.style.display = "none"
            message.innerHTML = `あなたの勝ちですが…<br>みのりちゃんが泣いてしまいました。`
            messageCSS.style.display = "flex"
            charImg.src = charPose.gameWin;
        } else if (loseArr === 2
        ) {
            output.textContent = "わーい！みのりのかち！"
            coment.textContent = `勝：${win}　負：${lose}　引き分け：${draw}`
            janCSS.style.display = "none"
            message.innerHTML = 'あなたの負け!!<br>みのりちゃんに 完 全 敗 北 しました。'
            messageCSS.style.display = "flex"
            charImg.src = charPose.gameLose;
        }

        playing = false; // 解除
    }, 1500); // 1.5秒待機
}

const reset = () => {
    win = 0
    lose = 0
    draw = 0
    winArr = 0
    loseArr = 0
    const outMessage = ['2回勝ったらおわりだよ', 'パパ、あそぼ～！', 'まけないよ～', 'はやくあそんでよ～！', 'なにしてるの？']
    output.textContent = outMessage[Math.floor(Math.random() * outMessage.length)]
    charImg.src = charPose.wait;
    coment.textContent = `勝：${win}　負：${lose}　引き分け：${draw}`
    janCSS.style.display = "flex"
    messageCSS.style.display = "none"
    message.textContent = ""
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


bgmCtrl.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play();
        bgmCtrl.classList.remove('paused');
    } else {
        bgm.pause();
        bgmCtrl.classList.add('paused');
    }
});

// 1秒後にBGM再生
setTimeout(() => {
    bgm.play();
    bgm.volume = 0.3;
}, 1000);


heartBtn.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('span');

        particle.className = 'heart-particle';
        particle.textContent = '❤';

        // どこに飛ぶかの数値を計算
        const tx = (Math.random() - 0.5) * 400;
        const ty = (Math.random() - 0.5) * 400;
        const tr = (Math.random() - 0.5) * 500;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.setProperty('--tr', `${tr}deg`);

        const rect = charImg.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100;
        const startY = rect.top + rect.height / 2 + (Math.random() - 0.5) * 100;
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
});

async function sendChat() {
    const text = chatWindow.value
    if (!text || text.trim() === "") {
        return;
    }
    chatWindow.value = "";
    const originalText = output.textContent; // 元のテキスト保持（エラー復帰用）
    output.textContent = "考え中...";

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        // HTTPステータスコードが成功(200-299)か確認
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        output.textContent = data.reply;

    } catch (error) {
        console.error("通信エラー:", error);
        output.textContent = "エラーだ！！";
    }
}

sendBtn.addEventListener('click', sendChat);
chatWindow.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.isComposing) {
        sendChat();
    }
});