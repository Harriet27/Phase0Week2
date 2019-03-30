//Tugas 3 (Konversi Menit)
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
    
console.log(timeConvert(63));
console.log(timeConvert(124)); 
console.log(timeConvert(53)); 
console.log(timeConvert(88)); 
console.log(timeConvert(120));
//end Tugas 3 (Konversi Menit)