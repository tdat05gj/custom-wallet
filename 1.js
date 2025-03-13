const { ethers } = require("ethers");
const fs = require("fs");


async function createWallet() {
    console.log("Wallet creation is in progress, if successful it will display the message 'DONE'");

    let found = false;

    while (!found) {
       
        const wallet = ethers.Wallet.createRandom();

       
        const address = wallet.address;

        // if you want the wallet to end in 666666, leave it as is below. if you want different ending, change it below
        if (address.endsWith("666666")) {
            found = true;

          
            const privateKey = wallet.privateKey;
            const mnemonic = wallet.mnemonic.phrase;

          
            const info = `Address: ${address}\nPrivate Key: ${privateKey}\nSeed Phrase: ${mnemonic}\n`;
            fs.writeFileSync("gj.txt", info);

            
            console.log("DONE. Check gj.txt");
            console.log(info);
        }
    }
}


createWallet();
