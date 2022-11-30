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
7) open (saweria admin panel)[https://saweria.co/admin/integrations]



## Action From Notification | Aksi Dari Notifikasi


```
- Donation | Donasi Rp. 10.000  - Rp.15.000
    EN: Changing Weapon For 10 Second
    ID: Mengganti Senjata Selama 10 Detik

- Donation | Donasi Rp. 15.001  - Rp.25.000
    EN: Dropped Weapon And Spike For 10 Second
    ID: Menjatuhkan Senjata Dan Spike Selama 10 Detik

- Donation | Donasi Rp. 25.001  - Rp.35.000
    EN: Use Ultimate Abilites
    ID: Menggunakan Ulti

- Donation | Donasi Rp. 35.001  - Rp.50.000
    EN: Forward For 10 Second
    ID: Jalan Maju Selama 10 Detik

- Donation | Donasi Rp. 50.001  - Rp.70.000
    EN: Jump For 10 Second
    ID: Lompat Selama 10 Detik

- Donation | Donasi Rp. 90.000++
    EN: Quit Valorant (ALT + F4)
    ID: Keluar Dari Valorant (ALT + F4)

```