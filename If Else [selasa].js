var nama = 'King';
var peran = 'Ksatria';

if (nama === '' && peran ===''){
  
  console.log("Nama tidak boleh kosong. Pilih peranmu untuk memulai game.");
  
} else if (nama !== '' && peran === '') {
  
  console.log("Pilih peranmu untuk memulai game");
  
} else if (peran !== '' && nama === ''){
  
  console.log('Nama tidak boleh kosong');
  
} else if (nama !== '' && peran === 'Ksatria') {
  
  console.log("Selamat datang di Dunia Proxytia, " + nama + " . Halo Ksatria" + nama +  ", kamu dapat menyerang dengan senjatamu!");
  
} else if (nama !== '' && peran === 'Tabib') {
  
  console.log ("Selamat datang di Dunia Proxytia," + nama+ ". Halo Tabib "+ nama + ", kamu akan membantu temanmu yang terluka.");
  
} else if (nama !== '' && peran === 'Penyihir') {
  
  console.log ("Selamat datang di Dunia Proxytia, " + nama + ". Halo Penyihir "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
  
}