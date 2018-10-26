export default class Dom{
    constructor(){
        this.body = document.getElementsByTagName('body')[0];
		this.preload = document.createElement('span');
		this.body.append(this.preload)
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
        this.text = document.createElement('h1');
        this.body.append(this.text);
        this.text.style.textAlign = "center"
        this.text.innerText = `Ваши координаты:\nШирота - ${coordinates.latitude}\nДолгота - ${coordinates.longitude}`
    }
}