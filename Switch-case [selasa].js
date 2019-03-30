var tanggal = prompt("Isi Tanggal : 1 - 31");
    if (tanggal > 0 && tanggal <= 31){
        document.write("");
    } else {
        document.write("<h2>Maaf, Anda salah mengisi tanggal</h2>");
    }          
    
var bulan = prompt("Isi Bulan : 1 - 12");
var namabulan = "";
    switch(bulan){
        case "1":
            namabulan = "Januari";
            break;
        case "2":
            namabulan = "Februari";
            break;
        case "3":
            namabulan = "Maret";
            break;
        case "4":
            namabulan = "April";
            break;
        case "5":
            namabulan = "Mei";
            break;
        case "6":
            namabulan = "Juni";
            break;
        case "7":
            namabulan = "Juli";
            break;
        case "8":
            namabulan = "Agustus";
            break;
        case "9":
                namabulan = "September";
                break;
        case "10":
            namabulan = "Oktober";
            break;
        case "11":
            namabulan = "November";
            break;   
        case "12":
            namabulan = "Desember";
            break;
    }  
         

if(namabulan !== ""){
    document.write("");
} else {
    document.write("<h2>Maaf, Anda salah mengisi bulan</h2>");
}
    
var tahun = prompt("Isi Tahun : 1900 - 2200");
if (tahun > 1900 && tahun < 2200) {
    document.write("<h2> " + tanggal + " " + namabulan + " " + tahun + "</h2>");
} else {
    document.write("<h2>Maaf, Anda salah mengisi tahun</h2>");
}         