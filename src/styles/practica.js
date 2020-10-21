
function fizzBuzz(numeros) {
    // Your code here


    for (let i = 1; i <= 1000; i++) {

        if (15 % 5 == 0 || 15 % 3 == 0) {
            console.log(i);
        }
       

    }
}


fizzBuzz();

for (i = 0; i <= 100; i++) {
    if (15 % 3 == 0) {

    }
    else if (15 % 5 == 0) {

    }

    console.log(i)
}




const clients = [
    { id: 1, taxNumber: '86620855', name: 'Bob Dylan' },
    { id: 2, taxNumber: '7317855K', name: 'John Meyer' },
    { id: 3, taxNumber: '73826497', name: 'Andrea Skileto' },
    { id: 4, taxNumber: '88587715', name: 'Maria Perez' },
    { id: 5, taxNumber: '94020190', name: 'Shania Twonk' },
    { id: 6, taxNumber: '99804238', name: 'Djork Wrek' }
];
const accounts = [
    { clientId: 6, bankId: 1, balance: 15000 },
    { clientId: 1, bankId: 3, balance: 18000 },
    { clientId: 5, bankId: 3, balance: 135000 },
    { clientId: 2, bankId: 2, balance: 5600 },
    { clientId: 3, bankId: 1, balance: 23000 },
    { clientId: 5, bankId: 2, balance: 15000 },
    { clientId: 3, bankId: 3, balance: 45900 },
    { clientId: 2, bankId: 3, balance: 19000 },
    { clientId: 4, bankId: 3, balance: 51000 },
    { clientId: 5, bankId: 1, balance: 89000 },
    { clientId: 1, bankId: 2, balance: 1600 },
    { clientId: 5, bankId: 3, balance: 37500 },
    { clientId: 6, bankId: 1, balance: 19200 },
    { clientId: 2, bankId: 3, balance: 10000 },
    { clientId: 3, bankId: 2, balance: 5400 },
    { clientId: 3, bankId: 1, balance: 9000 },
    { clientId: 4, bankId: 3, balance: 13500 },
    { clientId: 2, bankId: 1, balance: 38200 },
    { clientId: 5, bankId: 2, balance: 17000 },
    { clientId: 1, bankId: 3, balance: 1000 },
    { clientId: 5, bankId: 2, balance: 600 },
    { clientId: 6, bankId: 1, balance: 16200 },
    { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [
    { id: 1, name: 'Bank of America' },
    { id: 2, name: 'Citibank' },
    { id: 3, name: 'China Central Bank' }
];


