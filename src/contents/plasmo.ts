import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://tweetdeck.twitter.com/"],
};

const read = () => {
  const tweetTextList = document.querySelectorAll(".tweet-text");
  console.log("tweetTextList: ", tweetTextList);
  const tweetText = tweetTextList[0];
  if (tweetText) {
    if ("speechSynthesis" in window) {
      const { textContent } = tweetText;
      console.log(textContent);
      const uttr = new SpeechSynthesisUtterance();
      uttr.text = textContent;

      // 言語を設定
      uttr.lang = "ja-JP";

      // 速度を設定
      uttr.rate = 1;

      // 高さを設定
      uttr.pitch = 1;

      // 音量を設定
      uttr.volume = 1;

      window.speechSynthesis.speak(uttr);
    } else {
      alert("大変申し訳ありません。このブラウザは音声合成に対応していません。");
    }
  }
};

const button = document.createElement("button");
button.textContent = "押してね";
button.style.position = "fixed";
button.style.bottom = "0px";
button.style.right = "0px";
button.onclick = read;

document.body.appendChild(button);
