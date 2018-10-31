export default class Dom{
    constructor(){
        this.body = document.getElementsByTagName('body')[0];
		this.preload = document.createElement('span');
        this.body.append(this.preload);
        this.body.style.textAlign = "center";
    }
    showPreloader(){
        this.preload.style.fontSize = "3em";
        this.preload.style.position = "absolute";
        this.preload.style.top = "50%";
        this.preload.style.left = "45%";
        this.preload.innerText = `LOADING...`
    }
    hidePreloader(){
        this.preload.remove();
    }
    setCoordinates(coordinates){
        this.wrap = document.createElement('div');
        this.body.append(this.wrap);
        this.wrap.style.padding = "10px";
        this.wrap.style.marginRight = "10px";
        this.wrap.style.background = "blue";
        this.wrap.style.display = "inline-block";
        this.wrap.style.borderRadius = "7px";
        this.cors = document.createElement('span');
        this.wrap.append(this.cors);
        this.cors.innerText = `Широта - ${coordinates.latitude}\nДолгота - ${coordinates.longitude}`
        this.cors.style.color = "white";
        this.cors.style.fontSize = "1em";
        // this.text.innerText = `Ваши координаты:\nШирота - ${coordinates.latitude}\nДолгота - ${coordinates.longitude}\n Город - ${coordinates.city}`
    }
    setWeather(weather){
        this.wrap1 = document.createElement('div');
        this.body.append(this.wrap1);
        this.wrap1.style.padding = "50px";
        this.wrap1.style.background = "blue";
        this.wrap1.style.display = "inline-block";
        this.wrap1.style.borderRadius = "10px";
        this.cityName = document.createElement('h1');
        this.wrap1.append(this.cityName);
        this.cityName.innerText = weather.name;
        this.cityName.style.margin = "0";
        this.cityName.style.color = "white";
        this.cityName.style.fontSize = "4em";
        this.wthr = document.createElement('span');
        this.wrap1.append(this.wthr);
        this.wthr.innerText = weather.weather[0].main;
        this.wthr.style.color = "white";
        this.wthr.style.fontSize = "2em";
        this.tmp = document.createElement('h2');
        this.wrap1.append(this.tmp);
        this.tmp.style.marginTop = "30px";
        this.tmp.innerText = `${Math.round(weather.main.temp - 273.15)} C`;
        this.tmp.style.color = "white";
        this.tmp.style.fontSize = "5em";
        this.info = document.createElement('span');
        this.wrap1.append(this.info);
        this.info.innerText = `Влажность: ${weather.main.humidity}% \n Скорость ветра: ${weather.wind.speed} км/ч`;
        this.info.style.color = "white";
    }
}