import type { PlasmoCSConfig } from "plasmo";

import { speechText } from "~libs/speech";

export const config: PlasmoCSConfig = {
  matches: ["https://tweetdeck.twitter.com/"],
};

const mutatinObserverConfig: MutationObserverInit = {
  childList: true,
};

const callback = (mutations: MutationRecord[]) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList" && mutation.removedNodes.length === 0) {
      const tweetTextList = document.querySelectorAll(".tweet-text");
      const tweetText = tweetTextList[0];
      if (tweetText) {
        const { textContent } = tweetText;
        speechText(textContent);
      }
    }
  }
};
const observer = new MutationObserver(callback);

const readStart = () => {
  button.onclick = readEnd;
  button.textContent = "読み上げ終了";

  const tweetContainerList = document.querySelectorAll(".js-chirp-container");
  const tweetContainer = tweetContainerList[0];

  if (tweetContainer) {
    observer.observe(tweetContainer, mutatinObserverConfig);
  }
};

const readEnd = () => {
  button.onclick = readStart;
  button.textContent = "読み上げ開始";

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
