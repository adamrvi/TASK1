function reverse(){
    x=document.getElementById('numberdata').value; 
    var hsl,p;
    hsl=""; 
    p=x.length; 
    for(a=p-1;a>=0;a--) 
         hsl=hsl+x.charAt(a); 
    document.getElementById('hasil').value=hsl; 
}
