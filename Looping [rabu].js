//Soal 1
/*looping 1*/
var number = 0;
while(number < 20) { 
  number+=2;
  console.log(number + " - I love coding");
}
/*end looping */
/*looping 2*/
var number = 22;
while(number > 2) { 
  number-=2;
  console.log(number + " - I will become fullstack developer");
}
/*end looping 2*/
//End Soal 1


//Soal 2
/*looping 1*/
for (var angka = 1; angka <= 20; angka+=1){
    console.log(angka + " - I love coding")
}
/*end looping 1*/
/*looping 2*/
for (var angka = 20; angka >= 1; angka-=1){
    console.log(angka + " - I will become fullstack developer")
}
/*end looping 2*/
//End Soal 2


//Soal 3
/*1 & 2*/
for(var x=1; x<=100; x+=1) {
    if (x%2 === 0) {
        console.log(x + " adalah genap");   
    } else {
        console.log(x + " adalah ganjil");
    }
  }
/*end of 1 & 2*/
/*3 & 4*/
for(var x=1; x<=100; x+=2) {
    if (x%3 === 0) {
        console.log(x + " kelipatan 3");   
    } else {
      console.log (x)
    }
  }

  for(var x=1; x<=100; x+=5) {
    if (x%6 === 0) {
        console.log(x + " kelipatan 6");   
    } else {
      console.log (x)
    }
  }
  
  for(var x=1; x<=100; x+=9) {
    if (x%10 === 0) {
        console.log(x + " kelipatan 10");   
    } else {
      console.log (x)
    }
  }
/*end of 3 & 4*/
//End of Soal 3