function submitData() {
    const sequenceNumber = document.getElementById("sequenceNumber").value;
    let temp = [];
    for (i = 1; i <= sequenceNumber; i++) {
    temp.push(`
    <li>Deret ke ${i * 3}</li>
    `);
    }
    document.getElementById("output3").innerHTML = temp.join(" ");
    return false;
    }
