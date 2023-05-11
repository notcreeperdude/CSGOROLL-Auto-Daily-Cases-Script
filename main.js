// ==UserScript==
// @name         CSGOROLL Daily Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A script that opens boxes every 24h for csgoroll.com to save time (recommended to put it in RDP)
// @author       MESICAN
// @match        https://www.csgoroll.com/*/boxes/world/daily-free
// @icon         https://pbs.twimg.com/profile_images/1610084878720049154/n0j4nld9_400x400.png
// @grant        none
// @updateURL    https://github.com/MosesAndTheRock/CSGOROLL-Daily-Script/blob/main/main.js
// @downloadURL  https://github.com/MosesAndTheRock/CSGOROLL-Daily-Script/blob/main/main.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
1
window.onload = function () {
  "use strict";
  console.clear();
  console.log(
    "\x1b[31m%s\x1b[0m",
    `
              ⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀
⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀
⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀
⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏
                `
  );
  console.log(
    "*********\n\nCSGOROLL Daily Script\nCoded By: MESICAN#8142 \nID: 691789154207399987\n\n*********"
  );

  function open() {
    setTimeout(function () {
      // open the case menu
      const OpenBtn = $(".open-btn").eq(0);
      const DisableClass = "mat-button-disabled";
      if (OpenBtn) {
        if (OpenBtn.hasClass(DisableClass)) {
          console.log("Script: You can't open the daily case right now");
        } else {
          OpenBtn.click();
          console.log("Script: 1, Menu is open");
          // open the case
          const OpenCaseBtn = $(".open-btn").eq(11);
          if (OpenCaseBtn) {
            setTimeout(function () {
              OpenCaseBtn.click();
              console.log("Script: 2, Case is open");
              // close the open case menu
              const CloseCaseBtn = $(".close").eq(1);
              if (CloseCaseBtn) {
                setTimeout(function () {
                  CloseCaseBtn.click();
                  console.log("Script: 3, Menu is close");
                }, 10000);
              } else {
                console.log("Can't find CloseCaseBtn");
              }
            }, 3000);
          } else {
            console.log("Can't find OpenCaseBtn");
          }
        }
      } else {
        console.log("Can't find OpenBtn");
      }
    }, 1000);
    setTimeout(open, 1000000);
  }

  setTimeout(() => {
    let execute = confirm("Do you want to start the Auto open daily case?");
    if (execute) {
      console.log("Started!");
      open();
    }
  }, 2000);
};
