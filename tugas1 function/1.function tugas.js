//regular function
function submitdata(){
    let sequencedata = document.getElementById("sequencedata").value;
        document.getElementById("Output").innerHTML = sequencedata;
        return false;
    }
//arrow function   
let submitdata2 = () => {
    let sequencedata = document.getElementById("sequencedata").value;
    document.getElementById("Output").innerHTML = sequencedata;
    return false;

}
console.log(submitdata2);