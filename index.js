// Code your solutions in this file
// cont

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i=1; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);



function writeCards(birthdayPeople, event) {
    let messages = [];
    for (let i=0; i < birthdayPeople.length; i++) {
messages.push (`Thank you, ${birthdayPeople[i]}, for the wonderful ${event} gift!`
    )}
    return messages;
}


function countDown(integer) {
    let i = integer;
    while (i >= 0) {
        console.log(i)
        i--;
    }
}
countDown(10);