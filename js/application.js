// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

  var storage = new LocalStorageManager();、
  var noticeClose = document.querySelector(".notice-close-button");
  var notice = document.querySelector(".app-notice")
  
  if (storage.getNoticeClosed()) {
    notice.parentNode.removeChild(notice);
  } else {
    noticeClose.addEventListener("click", function() {
      notice.parentNode.removeChild(notice);
      storage.setNoticeClosed(true);
      if (typeof gtag !== undefined) {
        gtag("event", "closed", {
          event_category: "notice",
        });
      }
    });
  }
