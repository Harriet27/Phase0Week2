//Soal 1
function shoutOut() {
  console.log("Halo Function!");
}

shoutOut();
//end Soal 1

//Soal 2
function multiplyNumbers(x,y){
  return x * y;
}

console.log(multiplyNumbers(5,4))
console.log(multiplyNumbers(2,9))
console.log(multiplyNumbers(9,7))
console.log(multiplyNumbers(4,3))
console.log(multiplyNumbers(8,6))
//end Soal 2

//Soal 3
function processSentence (name, age, address, hobby) {
  return "Nama saya " + name + ", umur saya " + age + " tahun, saya tinggal di " + address + ", dan saya punya hobi yaitu " + hobby + "!" 
}
  
var name = "Neil";
var age = 21;
var address = "Alam Sutera, Serpong";
var hobby = "bermain piano";

var fullSentence = processSentence(name, age, address, hobby);

console.log(fullSentence);
//end Soal 3