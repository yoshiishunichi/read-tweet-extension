import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://tweetdeck.twitter.com/"],
};

const mutatinObserverConfig: MutationObserverInit = {
  childList: true,
};

const callback = (mutations: MutationRecord[]) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList" && mutation.removedNodes.length === 0) {
      console.log("ツイート追加されたぞ");
    }
  }
};
const observer = new MutationObserver(callback);

const readStart = () => {
  button.onclick = readEnd;
  button.textContent = "読み上げ終了";

  // タイムライン監視の処理を書く
  const tweetContainerList = document.querySelectorAll(".js-chirp-container");
  const tweetContainer = tweetContainerList[0];

  if (tweetContainer) {
    observer.observe(tweetContainer, mutatinObserverConfig);
  }
};

const readEnd = () => {
  button.onclick = readStart;
  button.textContent = "読み上げ開始";

  // タイムライン監視の終了の処理を書く};
  observer.disconnect();
};

const button = document.createElement("button");
button.textContent = "読み上げ開始";
button.style.position = "fixed";
button.style.zIndex = "10000";
button.style.bottom = "10px";
button.style.right = "10px";
button.onclick = readStart;

document.body.appendChild(button);
