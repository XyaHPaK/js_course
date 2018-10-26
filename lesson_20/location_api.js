export default class LocationApi{
    constructor(){
        
    }
    getMyIp() {
        return fetch('https://api.ipify.org?format=json')
                .then (res => res.json())
                .then (res => {this.myIp = res.ip;
                    return this.myIp;
                });     
    }
    getMyLocation(){
        return fetch(`http://api.ipstack.com/${this.myIp}?access_key=d8a9ddb68383a6c1e630373457deeae4`)
        .then ((res) => res.json());
    }
}

