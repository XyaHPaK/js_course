import LocationApi from "./location_api.js"
import Dom from "./dom.js"
let a = new LocationApi();
let b = new Dom();
let c = b.showPreloader();
a.getMyIp()
.then (() => {
    a.getMyLocation()
    .then (res => b.setCoordinates(res))
    .then (() => b.hidePreloader())
    
});
