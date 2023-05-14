
# CSGORoll Automated daily cases

This script automatically opens your CSGORoll.com daily cases everday so that you don't have to worry about it!
## Installation

1. To run this script you will need to install the TamperMonkey browser extension:
It is suggested that you install this script on the opposite browser to the one you would usually use as the browser window must be left alone and must be the main open tab.
For example: If you usually use chrome, install this on firefox instead.

[Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

[Opera](https://addons.opera.com/en-gb/extensions/details/tampermonkey-beta/)

Warning: Tampermonkey is only in beta on the Opera browser

Currently known issue, the popup does not appear on opera or firefox and so the script does not start.

[Tampermonkey Official Page](https://www.tampermonkey.net/)

2. After installing TamperMonkey you need to open its options menu and select "Create new script"

![TamperMonkey Screenshot](https://i.imgur.com/FoMNpYl.png)

3. Copy the entirety of the script below and paste it into the tampermonkey window, replacing all existing code in the script window:

[Click Here For Script](https://github.com/notcreeperdude/CSGOROLL-Daily-Script/blob/main/main.js)

![TamperMonkey pasted script](https://imgur.com/e39Ta2C.png)

4. Save and name the script as you wish

5. Go to your [CSGORoll daily case page](https://www.csgoroll.com/en/boxes/world/daily-free) and press "OK on the popup to start the script.
If the popup does not appear, refresh the page.

![CSGORoll Popup](https://imgur.com/Udsd3oG.png)

6. Leave this browser window alone in its own separate grouping. Do not open a new tab otherwise you will need to restart the script by refreshing the page.

7. If you wish to monitor the script, open up the browsers dev console by pressing f12.

8. The script will take a while to start!
It takes some time for it to reach your daily case as it starts by attempting to open the level 100 case and works backwards until it finds one it can open. 
It takes 30 seconds per case so if you are a lower level it will take multiple minutes to reach your case, please be patient!




    
## FAQ

#### Can this script access my other pages?

No! 
Line 8 of the script shows exactly what URL must be present for the script to run. If the tab is not that URL, the script will not run.

#### Why should i use a different browser to my normal browser?

For the script to run, it needs to be the tab thats in focus. While you do not HAVE to use a separate browser for this script, it is easier to do so as you will not accidentally disable the script by unfocusing the tab.

