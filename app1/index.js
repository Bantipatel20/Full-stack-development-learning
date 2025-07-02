var count =0;
function increment(){
    count +=1;
    document.getElementById("counter").innerHTML = count;
}
function decrement(){
    count -=1;
    document.getElementById("counter").innerHTML = count;
}