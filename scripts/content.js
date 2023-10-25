function clickSkipIntro(entries) {
  entries.forEach((entry) => {
    entry.addedNodes.forEach((node) => {
      const skipIntroButton = document.querySelector(
        'button[data-uia="player-skip-intro"]'
      );

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

const observer = new MutationObserver(clickSkipIntro);
const observerOptions = {
  subtree: true,
  childList: true,
};

observer.observe(document.body, observerOptions);
