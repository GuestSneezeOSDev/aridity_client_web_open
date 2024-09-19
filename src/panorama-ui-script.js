const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const body = document.body;

popup.style.display = 'none';

// msgbox buttons
const btn1El = document.querySelector('#msgBoxBtn1');
const btn2El = document.querySelector('#msgBoxBtn2');
const btn3El = document.querySelector('#msgBoxBtn3');
const btn4El = document.querySelector('#msgBoxBtn4');

function showMsgBox(
    title, text, btn1Text, btn2Text, btn3Text, btn4Text, 
    btn1Func, btn2Func, btn3Func, btn4Func
  ) {
  const titleEl = document.querySelector('#msgBoxTitle');
  const textEl = document.querySelector('#msgBoxText');

  titleEl.textContent = title;
  textEl.textContent = text;

  btn1El.style.display = 'none';
  btn2El.style.display = 'none';
  btn3El.style.display = 'none';
  btn4El.style.display = 'none';

  var hoverAudio = new Audio('/assets/sound/ui/sidemenu_rollover_02.wav');
  var clickAudio = new Audio('/assets/sound/ui/sidemenu_click_01.wav');

  if(typeof btn1Text == 'string') {
    if(btn1Text) {
      btn1El.style.display = 'block';
      btn1El.textContent = btn1Text;
      
      if(typeof btn1Func == 'function') {
        if(btn1Func) {
          btn1El.addEventListener('mouseover', () => {
            hoverAudio.play();
          });

          btn1El.addEventListener('click', () => {
            clickAudio.play();

            btn1Func();

            // dumb fix
            btn1Func = null;
          });
        }
      }
    }
  }
  if(typeof btn2Text == 'string') {
    if(btn2Text) {
      btn2El.style.display = 'block';
      btn2El.textContent = btn2Text;
      if(typeof btn2Func == 'function') {
        if(btn2Func) {
          btn2El.addEventListener('mouseover', () => {
            hoverAudio.play();
          });
          btn2El.addEventListener('click', () => {
            clickAudio.play();
            btn2Func();

            // dumb fix
            btn2Func = null;
          });
        }
      }
    }
  }
  if(typeof btn3Text == 'string') {
    if(btn3Text) {
      btn3El.style.display = 'block';
      btn3El.textContent = btn3Text;
      if(typeof btn3Func == 'function') {
        if(btn3Func) {
          btn3El.addEventListener('mouseover', () => {
            hoverAudio.play();
          });
          btn3El.addEventListener('click', () => {
            clickAudio.play();
            btn3Func();

            // dumb fix
            btn3Func = null;
          });
        }
      }
    }
  }
  if(typeof btn4Text == 'string') {
    if(btn4Text) {
      btn4El.style.display = 'block';
      btn4El.textContent = btn4Text;
      if(typeof btn4Func == 'function') {
        if(btn4Func) {
          btn4El.addEventListener('mouseover', () => {
            hoverAudio.play();
          });
          btn4El.addEventListener('click', () => {
            clickAudio.play();
            btn4Func();

            // dumb fix
            btn4Func = null;
          });
        }
      }
    }
  }

  popup.style.display = 'block';
  body.classList.add('darkened');

  var slideInAudio = new Audio('/assets/sound/ui/popup_reveal_01.wav');
  slideInAudio.play();
}

function showMainMenuNotification(text, color) {
  closeExistingMainMenuNotification();

  const menuNotification = document.querySelector('#notification');
  const menuNotificationContent = document.querySelector('#notificationContent');
  const menuNotificationText = document.querySelector('#notificationText');

  if(text) {
    if(typeof text == 'string') {
      menuNotificationText.textContent = text;
    }
  } else {
    console.error("Cannot show notification: A text parameter is required");
  }

  if(color) {
    if(typeof color == 'string') {
      if(color == 'red') {
        menuNotificationContent.classList.add('NotificationRed');
      } else if (color == 'yellow') {
        menuNotificationContent.classList.add('NotificationYellow');
      } else if (color == 'green') {
        menuNotificationContent.classList.add('NotificationGreen');
      } else if (color == 'blue') {
        menuNotificationContent.classList.add('NotificationBlue');
      } else {
        console.error("Unknown color.");
      }
    }
  } else {
    console.error("Cannot show notification: A color parameter is required");
  }

  menuNotification.style.display = 'block';
}

function closeExistingMainMenuNotification() {
  const menuNotification = document.querySelector('#notification');
  const menuNotificationContent = document.querySelector('#notificationContent');
  const menuNotificationText = document.querySelector('#notificationText');

  menuNotificationContent.classList.remove('NotificationRed');
  menuNotificationContent.classList.remove('NotificationYellow');
  menuNotificationContent.classList.remove('NotificationGreen');
  menuNotificationContent.classList.remove('NotificationBlue');

  menuNotificationText.textContent = null;

  menuNotification.classList.add('hidden');
  // menuNotification.style.display = 'none';
}

function closeExistingMsgBox() {
  if(popup && popup.style.display == 'block') {
    popup.classList.add('closing');
  
    var slideOutAudio = new Audio('/assets/sound/ui/sidemenu_slideout_01.wav');
    slideOutAudio.play();
  }
}

async function showExistingPanel(panelEl) {
  await closeAllPanels();

  if(panelEl) {
    const existingPanelEl = document.querySelector("#" + panelEl);
    existingPanelEl.classList.remove('closeAnim');

    existingPanelEl.classList.add('openAnim');
    existingPanelEl.style.display = 'block';
  }
}
function closeExistingPanel(panelEl) { 
  if(panelEl) {
    const existingPanelEl = document.querySelector("#" + panelEl)
    existingPanelEl.classList.add('closeAnim');
    existingPanelEl.style.display = 'none';
  }
}

popup.addEventListener('animationend', () => {
   if (popup.classList.contains('closing')) {
     popup.style.display = 'none';
     popup.classList.remove('closing');
     body.classList.remove('darkened'); // Remove darkened class after animation
   }
});

// mainmenu stuff
// functions
async function closeAllPanels() {
  closeExistingPanel('storePanel');
  closeExistingPanel('settingsPanel');
  closeExistingPanel('teamPanel');
  closeExistingPanel('loginPanel');
  closeExistingPanel('createAccPanel');
  closeExistingPanel('resetPasswordPanel');
}

function showSettingsPanel() {
  closeAllPanels();
  
  settingsPanel.classList.remove('closeAnim');

  console.log("user chose to use panorama settings");
  if(settingsPanel.style.display == 'none') {
    // settings tabs
    const settingsGeneralTab = document.querySelector('#generalTab');
    const settingsAccountTab = document.querySelector('#accountTab');
    const settingsDeveloperTab = document.querySelector('#developerTab');

    settingsGeneralTab.style.display = 'block';
    settingsAccountTab.style.display = 'none';
    settingsDeveloperTab.style.display = 'none';

    settingsPanel.classList.add('openAnim');
    settingsPanel.style.display = 'block';
  }

  closeExistingMsgBox(false);
}
function setSettingsTabIndex(index) {
  // settings tabs
  const settingsGeneralTab = document.querySelector('#generalTab');
  const settingsAccountTab = document.querySelector('#accountTab');
  const settingsDeveloperTab = document.querySelector('#developerTab');

  if(typeof index == 'number') {
    if(index) {
      if (index == 1) {
        settingsGeneralTab.style.display = 'block';
        settingsAccountTab.style.display = 'none';
        settingsDeveloperTab.style.display = 'none';
      }
      if (index == 2) {
        settingsGeneralTab.style.display = 'none';
        settingsAccountTab.style.display = 'block';
        settingsDeveloperTab.style.display = 'none';
      }
      if (index == 3) {
        settingsGeneralTab.style.display = 'none';
        settingsAccountTab.style.display = 'none';
        settingsDeveloperTab.style.display = 'block';
      }
    }
  }
}
function showTestMsgBox() {
  const playGroundMsgBoxInput1El = document.querySelector("#pUIPGMsgBoxTitleInput");
  const playGroundMsgBoxInput2El = document.querySelector("#pUIPGMsgBoxTextInput");
  const playGroundMsgBoxInput3El = document.querySelector("#pUIPGMsgBoxBtn1Input");
  const playGroundMsgBoxInput4El = document.querySelector("#pUIPGMsgBoxBtn2Input");

  if(playGroundMsgBoxInput1El.value && playGroundMsgBoxInput2El.value && playGroundMsgBoxInput3El.value && playGroundMsgBoxInput4El.value) {
    showMsgBox(playGroundMsgBoxInput1El.value, playGroundMsgBoxInput2El.value, 
      playGroundMsgBoxInput3El.value, playGroundMsgBoxInput4El.value, null, null,
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); }
    );
  } else {
    showMsgBox("Cannot show the MessageBox with the following configuration", "Please type in the following details to test the MessageBox", 
      "OK", null, null, null,
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); },
      () => { closeExistingMsgBox(); }
    );
  }
}

// buttons
const settingsBtn = document.querySelector('#settingsBtn');
const quitBtn = document.querySelector('#quitBtn');

// panels
const settingsPanel = document.querySelector('#settingsPanel');

settingsPanel.style.display = 'none';

const settingsCloseIconBtnEl = document.querySelector('#settingsCloseIcon');
settingsCloseIconBtnEl.addEventListener('click', () => {
  closeExistingPanel('settingsPanel');
});

settingsBtn.addEventListener('click', () => {
  if(settingsPanel.style.display == 'none') {
    showMsgBox("Warning", "The new Settings panel is unstable and some features may not work. Continue?", "YES", "NO", null, null, 
      () => {
        showSettingsPanel();
      }, 
      () => {
        closeExistingMsgBox();
      }, null, null
    );
  } else {
    settingsPanel.style.display = 'none';
  }
});

