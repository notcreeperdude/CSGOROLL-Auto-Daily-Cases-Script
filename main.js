// ==UserScript==
// @name         CSGOROLL Daily Case Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @homepage     https://github.com/notcreeperdude/CSGOROLL-Daily-Script
// @description  An automated script that opens your daily cases every 24 hours
// @author       notcreeperdude & LukeA
// @match        https://www.csgoroll.com/*/boxes/world/daily-free
// @icon         https://pbs.twimg.com/profile_images/1610084878720049154/n0j4nld9_400x400.png
// @grant        none
// @updateURL    https://github.com/notcreeperdude/CSGOROLL-Daily-Script/blob/main/main.js
// @downloadURL  https://github.com/notcreeperdude/CSGOROLL-Daily-Script/blob/main/main.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

window.onload = function () {
    "use strict";
    console.clear();
    console.log(
    "\x1b[31m%s\x1b[0m",
    `

      @@@@     @@@@    @@@@    @@@@@@@@     @@@@@@@@    @@     @@   %@@@@@@@
     @@@@@@    @@@@@  @@*@@  @@@      @@  /@@      @    @@     @@   @@
    @@@  @@@   @@@(@@ @@ @@  @@       @@@ @@@   @@@@@(  @@     @@     @@@@@@
   @@@@@@@@@@  @@@ @@@@  @@  @@@     ,@@   @@      @@(  @@     @@  @@@     @@
  @@@      @@@ @@@  @@@  @@    @@@@@@@(     #@@@@@@@(    @@@@@@@     @@@@@@@

#(((((((((((((((((((((((((((((((((((((((((%&@@@@@%(((((#&@@@@@&%((((((((((((((((
((((((((((((((((((((#%%##((#&@@@@@@@@@@@@(...... ............  .*&@@&(((((((((((
((((((((((((((#&@@&*. ,&@@(.. ...&@&* ...............................%@@#(((((((
((((((((((#@@@/  ..%@%. ......@@/............................... .......#@@(((((
((((((((@@%......%@..,@@(,.(@(........................................... ,@@#((
(((((#@@..........&@(,.,.&&*................................................*@@(
((((@@............. .,(##....................................,..,,,,,,,.......@@
(((&@,.................................................,,,,,,,,,,,,,,,,,,,,,,..&
(((%@,.............................................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
(((#@&#&&(.............. ........................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
@@@/.  ,.&@,..................................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/ ..,/@@@, .........,.....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
&@@&#(%@(.......,,,,....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
((((((((@@/,,,,,,,,,,.................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
((((((((((@@/.,,,,,,,,.............,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
(((((((((((#@@*,,,,,,,,,,.....,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
(((((((((((((#@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.@
(((((((((((((((#@&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@
(((((((((((((((((@@%,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(@#
((((((#&@@@@@@@&&&&@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@&&%
@@@&&&&&&&&&&&&&&&&&@@%.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,./#@@@#,,,,,,,*@@@@@@@
&&&&&&&&&&@@@@@@@@@&&#@@.,,,,,,,,,,,,,,,,,,,,,,,,,,,,(@@@@@#.,,,,,,,,,(@@****//*
@@@@@@@@&%%%%%%%%%%%%%%@@,,,,,,,,,,,,,,,,..,*#&@@@@@@@@@@@@/,,,,,,,,&@&/////((((
%%%%%&&%(,     &&%%%%%%%@%,,,,,,,,,,,,,%@@@@@@@@%(/*,****(@,,.,*#&@@########((((
%%&%          ,&&%%%%%%%&@(.,,,,,,,,,,*@%,,*///////((((#(%@@@%%#((((((((((((//**
%%%&&&&&&&%%%%%%%%&@@@@@@@@*,,,,,,,,,,@&((((############((((((((((((((((((//*///
%%%%%%%&@@@@@@@%(/*****/**@@,,,,.*(&@@&((#####((((((((((((((((((((((((/////(((((
@@@@%(/*****///////((((((((@@@@@%#((((((((((((((((((((((((((((((#(((((((((((((((
////////((((((((((((((((((((((((((((((((((((/((((((((((#(#((((((((((((((//**/*,*
                `
  );
    console.log(
      "*********\n\nCSGOROLL Daily Script\nCoded By: MESICAN#8142 \nModified By: notcreeperdude and LukeA\n\n*********"
    );

    function open() {
      setTimeout(function () {
        // open the case menu
        const OpenBtn = Array.from(document.querySelectorAll(".open-btn"));
        const DisableClass = "mat-button-disabled";
        let timeout = setInterval(()=>{
            if(OpenBtn.length<1){
                clearInterval(timeout);
            }
            let btn = OpenBtn.pop();
            if (btn) {
                if (btn.classList.contains(DisableClass)) {
                    console.log("Script: You can't open this daily case right now");
                } else {
                    btn.click();
                    console.log("Script: 1, Menu is open");
                    // open the case
                    const OpenCaseBtn = $(".open-btn").eq(11);
                    if (OpenCaseBtn) {
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
                    } else {
                        console.log("Can't find OpenCaseBtn");
                    }
                }
            } else {
                console.log("Can't find OpenBtn");
            }
        },300000);
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
