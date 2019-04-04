//Tugas 3 (Konversi Menit)
function konversiMenit(menit) {
    var seconds = menit%60;
    var minutes = (menit - seconds)/60;
    if (String(seconds).length === 1){
       return minutes+':'+'0'+seconds;
    } else {
    return minutes+':'+seconds;
    }
}
    
console.log(timeConvert(63));
console.log(timeConvert(124)); 
console.log(timeConvert(53)); 
console.log(timeConvert(88)); 
console.log(timeConvert(120));
//end Tugas 3 (Konversi Menit)