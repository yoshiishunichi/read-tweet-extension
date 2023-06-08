export const speechText = (text: string) => {
  if ("speechSynthesis" in window) {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = text;

    uttr.lang = "ja-JP";

    uttr.rate = 1;

    uttr.pitch = 1;

    uttr.volume = 1;

    window.speechSynthesis.speak(uttr);
  } else {
    alert("大変申し訳ありません。このブラウザは音声合成に対応していません。");
  }
};
