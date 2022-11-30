## About The Project
Webhook To Get Saweria Donation Notification .

### Prerequisites
Required before using the program code.

* Node JS | https://nodejs.org/en/download/
* Ngrok | https://ngrok.com/download
* Saweria Account | https://saweria.co/admin/integrations

### Installation
Required before using the program code.

1) Download and install Node JS
2) Register, Download and install Ngrok
3) open cmd in path where you cloned or downloaded this repo. then run ```npm install```
4) ```npm start```
5) Open Ngrok, add auth token if this your first time running ngrok
6) type ```ngrok http 8080``` (depend on port that u set in index.js)
7) open [https://saweria.co/admin/integrations](saweria-admin-panel), then
8) open Webhook section
9) copy and paste forwarding url in ngrok app. eg: ```https://xxx-xxx-xxx-xxx-xxx.ap.ngrok.io```
10) Save and Test



## Action From Notification 


```
Ps. U can modify in index.js

- Donation Rp. 10.000  - Rp.15.000
    Changing Weapon For 10 Second (press 1,2,3 in sequence)

- Donation Rp. 15.001  - Rp.25.000
    Dropped Weapon And Spike For 10 Second (press g)

- Donation Rp. 25.001  - Rp.35.000
    Use Ultimate Abilites (press x then move crussor to center of the screen then left click)

- Donation Rp. 35.001  - Rp.50.000
    Move Forward For 10 Second (press w)

- Donation Rp. 50.001  - Rp.90.000
    Jump For 10 Second (press Space)

- Donation Rp. 90.001 - 200.000
    Lock Windows (win+l)

- Donation Rp. > 200.000
    Alt + F4 (close app) then
    Lock Windows (win+l)
```