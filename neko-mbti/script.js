const questions = [
  // E / I
  { text: "人と話すと元気になる？", type: "E" },
  { text: "一人の時間が必要？", type: "I" },
  { text: "大勢の中で行動するのが好き？", type: "E" },

  // S / N
  { text: "現実的で実用的な方？", type: "S" },
  { text: "未来や可能性を考えるのが好き？", type: "N" },
  { text: "細かいことより全体像を重視する？", type: "N" },

  // T / F
  { text: "論理的に物事を判断する方？", type: "T" },
  { text: "人の気持ちを優先することが多い？", type: "F" },
  { text: "感情で決めることが多い？", type: "F" },

  // J / P
  { text: "計画を立てて行動するのが好き？", type: "J" },
  { text: "その場の状況に合わせて動くのが得意？", type: "P" },
  { text: "締め切りは守る方？", type: "J" }
];

let current = 0;
let resultScore = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

function answer(choice) {
  const q = questions[current];
  if (choice === 'yes') {
    resultScore[q.type]++;
  }
  current++;

  const questionEl = document.getElementById("question");
  const resultEl = document.getElementById("result");

  if (current < questions.length) {
    questionEl.textContent = `🐾「${questions[current].text}」`;
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").style.display = "none";
  document.querySelector(".button-area").style.display = "none";

  const resultEl = document.getElementById("result");

  // MBTI判定
  const type =
    (resultScore.E >= resultScore.I ? "E" : "I") +
    (resultScore.S >= resultScore.N ? "S" : "N") +
    (resultScore.T >= resultScore.F ? "T" : "F") +
    (resultScore.J >= resultScore.P ? "J" : "P");

  const messages = {
    INTJ: "未来を見据える戦略家ねこ。静かに考えて世界を動かすにゃ！",
    INTP: "アイデアあふれる論理派ねこ。深い思索が大好きにゃ！",
    ENTJ: "リーダー肌のボスねこ。目標達成に燃えるにゃ！",
    ENTP: "ひらめきマスターねこ。アイデアで世界を変えるにゃ！",
    INFJ: "やさしい導き手ねこ。思いやりにあふれてるにゃ！",
    INFP: "夢見がちな詩人ねこ。感受性が豊かで愛されキャラにゃ！",
    ENFJ: "みんなの応援団ねこ。励ましと情熱で人気者にゃ！",
    ENFP: "自由な冒険者ねこ。毎日が新しい発見にゃ！",
    ISTJ: "しっかり者の守り手ねこ。信頼の厚さNo.1にゃ！",
    ISFJ: "お世話上手なねこ。みんなの平和を守るにゃ！",
    ESTJ: "頼れる隊長ねこ。しっかり者で行動力抜群にゃ！",
    ESFJ: "面倒見のよいねこ。仲間想いでムードメーカーにゃ！",
    ISTP: "無口な達人ねこ。ひとり黙々と極める職人肌にゃ！",
    ISFP: "マイペースな癒し系ねこ。自然と仲良しにゃ！",
    ESTP: "ノリで生きる冒険ねこ。スピード感で勝負にゃ！",
    ESFP: "パーティー大好きねこ。にぎやかな人気者にゃ！"
  };

  const message = messages[type] || "不思議なタイプにゃ！";

  resultEl.textContent = `🐱「あなたは ${type} タイプ！ ${message}」`;
}
