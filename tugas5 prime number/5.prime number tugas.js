function isPrime(n){
 
    if (n<2) {
        return false ;
    }else if (n==2){
        return false ;
    }else{
        for(var i=2 ; i <= Math.sqrt(n) ; i++){
            if ( n % i == 0){
                return false
            }
        }
        return true ;
    }
}
function cekPrime(n){
    let condition;
    if (n>1){
        if (isPrime(n)){
          condition = " adalah bilangan prima";
        }else{
          condition = " bukan bilangan prima";
        }
        }else{
        condition ="-";
        }
    document.getElementById('txt').value = n + condition;
}



/*
function isPrime(n){
 
    if (n<2) {
        return false ;
    }else if (n==2){
        return false ;
    }else{
        for(var i=2 ; i <= Math.sqrt(n) ; i++){
            if ( n % i == 0){
                return false
            }
        }
        return true ;
    }
}
function cekPrime(n){
    if (n>1){
        if (isPrime(n)){
            document.getElementById('txt').value=" bilangan Prima";

        }else{
            document.getElementById('txt').value=" tidak bilangan Prima";
        }
    }else{
            document.getElementById('txt').value="-";
    }
}
<body>
    <form id="form1" name="prima">
        <p>Pengecekan Bilangan Prima</p>
 
        <p>Input Nilai
          <input type="text" id="nilai" name="nilai" onKeyUp="cekPrime(parseFloat(document.prima.nilai.value))">
      </p>
        <p>Keterangan : <input type="text" id="txt" onFocus="blur()">
    </form>
</body>
var bil =4;
for (i=2; i<(bil-1);i++ )
{
if (bil%i==0)
{
document.writeln("bukan bilangan prima");
}
else {
document.writeln("bilangan prima");
}
}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilangan Prima</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="tugas5.css">
    
</head>
<body>
    <div class="container">

        <form class="form" onsubmit="return submitdata()">
            <h3 style="text-align: center;">Cek Bilangan Prima</h3>
            <div class="text1">
                <label class="number1">Input</label>
                 <input type="number" id="numberdata" class="custom-input" placeholder="Input number">
                  <input type="button" onclick="primebil()"  class="btn" value="Submit"><br/>
                  <label class="number1">Output</label>
                <input type="number" id="hasil" class="custom-input" placeholder="Output number" >

            </div>
        <div>
         <ul type="number" id="Output"></ul>
        </div>
        </form>

    </div>
    <script src="5.prime number tugas.js"></script>
</body>
</html> 
*/