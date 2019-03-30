//Tugas 4 (X and O)
function xo(str) {
  return str.split('o').length-1 !== str.split('x').length-1 ? false : true;
}

console.log(xo('xoxoxo')); 
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
//end Tugas 4 (X and O)