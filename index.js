'use strict'

/**
 *
 * Check Website Down or Not
 * Create date : 23 Agustus 2019
 * Author : Cahyo Dwi Putro
 *
 */

const fetch = require('node-fetch');
const readline = require('readline-sync');
const delay = require('delay');
const moment = require('moment');

const funcCheckWebsite = (domain) => new Promise((resolve, reject) => {
    const urlAPI = `https://api.downfor.cloud/httpcheck/${domain}`;

    fetch(urlAPI, { method: "GET" })
    .then(res => res.json())
    .then(result => resolve(result))
    .catch(err => reject(err))
});

(async () => {
    try {
        var domain = readline.question('[-] Enter domain (site.com) : ')
        var jumlahLooping = 99999;

        for(var i = 1; i <= jumlahLooping; i++){
            await delay(500)
            var doCheckWebsite = await funcCheckWebsite(domain)
            var resChecking = doCheckWebsite.isDown;
            let now = moment().format('YYYY-MM-DD HH:mm:ss');

            if(resChecking === true) {
                console.log(`[${now}] MsgRes => Website Down for Everyone!`)
            } else {
                console.log(`[${now}] MsgRes => Website Up!`)
            }
        }

    }catch(e) {
        console.log(e);
    }
})();
