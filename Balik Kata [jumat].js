//Tugas 2 (Balik Kata)
function balikKata(kata) {
  var newWord = '';
  for (var i= kata.length -1; i >= 0; i --){
    newWord += kata[i];
  }
return newWord;
}

console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 
//end Tugas 2 (Balik Kata)