var city = '';

document.getElementById('inputtext').addEventListener('change',cityName);

function cityName(event){
    city = event.target.value;
}

async function fetchData(){
    try{
    const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad355578e1a65b64da61732c5bb798ec`);
    const data = await respons.json();
    console.log(data);
    document.getElementById('output').innerText = `${city} whether is ${data.main.temp} c`
    }catch(e){
        document.getElementById('output').innerText = `${city} not found`;
    }
}

