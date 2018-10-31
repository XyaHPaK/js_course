import LocationApi from "./location_api.js"
import Dom from "./dom.js"
let a = new LocationApi();
let b = new Dom();
b.showPreloader();
a.getMyIp()
.then ((ip) => {
    a.getMyLocation(ip)
    .then (res => {
        a.getWeather(res)
        .then (res =>{
            b.setWeather(res)
        })
        b.setCoordinates(res)
    })
    b.hidePreloader()
    
});
