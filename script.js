document.getElementById('output').style.visibility="hidden";
let input=document.getElementById("input");
input.addEventListener("input",function(e){
    document.getElementById('output').style.visibility="visible";
    let kg= e.target.value;
    document.getElementById("gram").innerHTML = kg*1000+" gram";
    document.getElementById("pound").innerHTML = kg*2.204+" pounds";
    document.getElementById("ounce").innerHTML = kg*35.27+" ounces";
}
);