export default class LocationApi{
    constructor(){
        
    }
    getMyIp() {
        return fetch('https://api.ipify.org?format=json')
                .then (res => res.json())
                .then (res => res.ip);     
    }
    getMyLocation(ip){
        return fetch(`http://api.ipstack.com/${ip}?access_key=d8a9ddb68383a6c1e630373457deeae4`)
        .then ((res) => res.json());
    }
    getWeather(coordinates){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${coordinates.city}&appid=d31ee244b3a96154c9068b2e0f26f4fa`)
        .then ((res) => res.json())
    }
}

