//regular function
function submitdata(){
    let sequencedata = document.getElementById("sequencedata").value;
        document.getElementById("Output").innerHTML = sequencedata;
        return false;
    }
/*
function submitdata(){
const sequencedata = document.getElementById("sequencedata").value;
let temp = [];
for (i = 1; i <= sequencedata; i++) {
    temp.push(`
    <li>Deret ke ${i * 3}</li>
    `);
    }
    document.getElementById("output").innerHTML = temp.join(" ");
return false;
}
*/