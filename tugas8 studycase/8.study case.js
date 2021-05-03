function konversi(){
    let umur = Number(document.getElementById("a").value);
    let kategori;
    if((umur>=61)&&(umur<=150))
    kategori = 'Lanjut usia';
    else if((umur>=20)&&(umur<=60))
    kategori = 'Dewasa';
    else if((umur>=11)&&(umur<=19))
    kategori = 'Remaja';
    else if((umur>=2)&&(umur<=10))
    kategori = 'Anak-anak';
    else if(umur<=1)
    kategori = 'Bayi';
    document.getElementById("c").value = "Umur" + " " + umur + " " + "tahun adalah " + kategori;
    }
