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

const funcCheckWebsite = (domain) => new Promise((resolve, reject) => {
    const urlAPI = `https://api.downfor.cloud/httpcheck/${domain}`;

    fetch(urlAPI, { method: "GET" })
    .then(res => res.json())
    .then(result => resolve(result))
    .catch(err => reject(err))
});

(async () => {
    try {
        var domain = readline.question('[-] Enter domain (site.com) :  ')
        var doCheckWebsite = await funcCheckWebsite(domain)
        var resChecking = doCheckWebsite.isDown;

        if(resChecking === 'true') {
            console.log('MsgRes => Website Down for Everyone!')
        } else {
            console.log('MsgRes => Website Up!')
        }

    }catch(e) {
        console.log(e);
    }
})();
