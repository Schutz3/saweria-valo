const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = 8080,
    keyAction = require("robotjs"),
    sayText = require('say'),

//Set Your Keybind Here

    jumpKey = 'space',
    moveForwardKey = 'w',
    mainWeaponKey = '1',
    secondaryWeaponKey = '2',
    knifeKey = '3',
    dropWeaponKey = 'g',
    ultimateKey = 'x';

app.use(bodyParser.json());

app.post("/", (request, respond) => {

    // amount_raw == amount of donations
    // donator_name == name of donator
    // donator_email == email of donator
    // message == massage of donator
                                       
    var timer = Date.now();
    //Check if its webhook test or not
    if(request.body.amount_raw == 69420 && request.body.donator_name == 'Someguy' && request.body.message == 'THIS IS A FAKE MESSAGE! HAVE A GOOD ONE'){
        sayText.speak('THIS IS A TEST DONATION, Donation  ' + request.body.amount_raw + 'Rupiah , From ' + request.body.donator_name+'. Said '+request.body.message);
        console.log('TEST SUCCESS !!');
          
    } else {
        
        console.log('Donation From: ' + request.body.donator_name);
        console.log('Amount of Donation: ' + request.body.amount_raw);

        //pres 1,2,3 or Changing Weapon Sequence
        if (request.body.amount_raw >= 10000 && request.body.amount_raw <= 15000) {
            sayText.speak('Hi, ' + request.body.donator_name+'. Thanks For Donating Me ! ');
            //10000ms = 10 sec
            while ((Date.now() - timer) < 10000) {
                keyAction.keyTap(mainWeaponKey);
                keyAction.keyTap(secondaryWeaponKey);
                keyAction.keyTap(knifeKey);
        
        
        
            }
            
        //Press G or Drop Weapon     
        } else if (request.body.amount_raw > 15000 && request.body.amount_raw <= 25000) {
            sayText.speak('Hi, ' + request.body.donator_name+'. Thanks For Donating Me ! ');
            
            //10000ms = 10 sec
            while ((Date.now() - timer) < 10000) {
                keyAction.keyTap(dropWeaponKey);
            }
    


        //Press X and move the crussor to center of the screen if its 1080p resolution and do mouse left click. or simply 'Use Ult'
        } else if (request.body.amount_raw > 25000 && request.body.amount_raw <= 35000) {
            sayText.speak('Hi, ' + request.body.donator_name+'. Thanks For Donating Me ! ');
    
            keyAction.keyTap(ultimateKey);
            keyAction.moveMouseSmooth(960, 540);
            keyAction.mouseClick(button = "left");
    



        //Press W or Run Forward
        } else if (request.body.amount_raw > 35000 && request.body.amount_raw <= 50000) {
            sayText.speak('Hi, ' + request.body.donator_name+'. Thanks For Donating Me ! ');

            //10000ms = 10 sec
            while ((Date.now() - timer) < 10000) {
                keyAction.keyToggle(moveForwardKey, 'down');
            }
            keyAction.keyToggle(moveForwardKey, 'up');
    


        //Press Space   or JUMP
        } else if (request.body.amount_raw > 50000 && request.body.amount_raw <= 70000) {
            sayText.speak('Hi, ' + request.body.donator_name+'. Thanks For Donating Me ! ');
            
            //10000ms = 10 sec
            while ((Date.now() - timer) < 1000) {
                keyAction.keyTap(jumpKey);
            }
           
    

        //Lock Windows
        } else if (request.body.amount_raw < 200000 && request.body.amount_raw >= 90000) {        
        sayText.speak('Warning!!, '+request.body.donator_name+' Has Launched Missile, EJECT, EJECT, Impact In');
        const { exec } = require('child_process');  
        setTimeout(() => {
            sayText.speak('5'); 
        }, 6000);   
        setTimeout(() => {
            sayText.speak('4'); 
        }, 7000);   
        setTimeout(() => {
            sayText.speak('3'); 
        }, 8000);   
        setTimeout(() => {
            sayText.speak('2'); 
        }, 9000);   
        setTimeout(() => {
            sayText.speak('1'); 
        }, 10000);   
        setTimeout(() => {
            exec('Rundll32.exe user32.dll,LockWorkStation');
        }, 11500);  
        }

        //ALT F4 Then Lock Windows
        else if (request.body.amount_raw >= 200000) {

        sayText.speak('Warning!!, DEFCON 1, DEFCON 1, '+request.body.donator_name+' Has Launched Nuclear, Impact In');
        const { exec } = require('child_process');  
        setTimeout(() => {
            sayText.speak('5'); 
        }, 6000);   
        setTimeout(() => {
            sayText.speak('4'); 
        }, 7000);   
        setTimeout(() => {
            sayText.speak('3'); 
        }, 8000);   
        setTimeout(() => {
            sayText.speak('2'); 
        }, 9000);   
        setTimeout(() => {
            sayText.speak('1'); 
        }, 10000);   
        setTimeout(() => {
            keyAction.keyTap("f4", ["alt"]);
            exec('Rundll32.exe user32.dll,LockWorkStation');
        }, 11500);  
        }
    
    }

    
    respond.status(200);
})

app.listen(PORT, () => console.log(`Deez Programs Runs On Port: ${PORT}`));
