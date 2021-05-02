function konversi(){
    let nilai_a = Number(document.getElementById("a").value);
    let nilai_huruf;
    if((nilai_a>86)&&(nilai_a<=100))
    nilai_huruf = 'A';
    else if((nilai_a>70)&&(nilai_a<=85))
    nilai_huruf = 'B';
    else if((nilai_a>50)&&(nilai_a<=69))
    nilai_huruf = 'C';
    else if((nilai_a>30)&&(nilai_a<=49))
    nilai_huruf = 'D';
    else if((nilai_a>=0)&&(nilai_a<=29))
    nilai_huruf = 'E';
    document.getElementById("c").value = nilai_huruf;
    }
