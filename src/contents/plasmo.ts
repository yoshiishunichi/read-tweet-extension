import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://tweetdeck.twitter.com/"],
};

const readStart = () => {
  button.onclick = readEnd;
  button.textContent = "読み上げ終了";

  // タイムライン監視の処理を書く
};

const readEnd = () => {
  button.onclick = readStart;
  button.textContent = "読み上げ開始";

  // タイムライン監視の終了の処理を書く};
};

const button = document.createElement("button");
button.textContent = "読み上げ開始";
button.style.position = "fixed";
button.style.zIndex = "10000";
button.style.bottom = "10px";
button.style.right = "10px";
button.onclick = readStart;

document.body.appendChild(button);
