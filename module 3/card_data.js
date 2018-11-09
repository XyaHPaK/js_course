export default class CardData{
    constructor(){
        
    }
    getCardInfo(cn){
       return fetch (`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.cn}`)
        .then (res =>res.json())
    }
}