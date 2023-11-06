const currentURL = window.location.href;
const urlParts = currentURL.split(".");
let query = "";
const provider = urlParts[1];
if (provider === "netflix") {
  query = 'button[data-uia="player-skip-intro"]';
} else if (provider === "hotstar") {
  query =
    'button[class="_1CSTLo7uotP5mTlp3jKun7 _2HYkSYMlyfm2mRvVj37UvB _1hvr__NMJbQHNb3s6iYa1w BODY2_MEDIUM TEXT_COLOR_L0"]';
} else if (provider === "primevideo") {
  query = ".atvwebplayersdk-skipelement-button";
}

function clickSkipIntro(entries, introButtonClassTag) {
  entries.forEach((entry) => {
    entry.addedNodes.forEach((node) => {
      const skipIntroButton = document.querySelector(query);
      if (skipIntroButton) {
        try {
          skipIntroButton.click();
        } catch (error) {
          window.console.warn("error");
        }
      }
    });
  });
}
console.log(urlParts[1]);
const observer = new MutationObserver(clickSkipIntro);
const observerOptions = {
  subtree: true,
  childList: true,
};

observer.observe(document.body, observerOptions);
