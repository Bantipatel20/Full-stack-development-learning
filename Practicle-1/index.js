
var numrs=0
var numkl=0
var numvk=0
function voters(){
    numrs+=1
    document.getElementById("rs").innerHTML=numrs;
}
function votevk(){
    numvk+=1
    document.getElementById("vk").innerHTML=numvk;
}
function votekl(){
    numkl+=1
    document.getElementById("kl").innerHTML=numkl;
}
setInterval(() =>{
    document.getElementById("rs").innerHTML=numrs;
    document.getElementById("vk").innerHTML=numvk;
    document.getElementById("kl").innerHTML=numkl;
},3000);