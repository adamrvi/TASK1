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
    /*
    <input id="sequenceNumber" class="custom-input" type="number" placeholder="Inputkan jumlah deret">
    </div>
    <div>
        <button type="submit" class="btn">Submit</button>
        <label class="text1">Output</label>
    </div>
    <ul id="output3"></ul>
</form>
</div>
<div class="container">
*/