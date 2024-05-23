const minizumu = `
___  ____       _                           
|  \\/  (_)     (_)                          
|      |_ _ __  _ _____   _ _ __ ___  _   _ 
| |\\/| | |  _ \\| |_  / | | |  _   _ \\| | | |
| |  | | | | | | |/ /| |_| | | | | | | |_| |
\\_|  |_/_|_| |_|_/___|\\__,_|_| |_| |_|\\__,_|
`;

console.log(minizumu+ "\n")

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

var count = 0

for(i = 0; i < 3; i++) {
    const number = randomNumber()
    console.log("Number " + (i + 1) + ": " + number);
    if (number === 3) {
        count++
    }
}

if (count === 3) {
    console.log("\n" + "%cJACKPOT!", "color: yellow")
}