const word = document.getElementById('word');
const search = document.getElementById('search');
const width = document.getElementById('width');
const height = document.getElementById('height');
const preloader = document.getElementById('preloader');
const ImgContainer = document.getElementById('ImgContainer');
function getSynonim (){
    fetch (`https://api.datamuse.com/words?ml=${word.value}`)
    .then(res => res.json())
}
function getImage(syn){
    img = document.createElement('img');
    img.src = `https://dummyimage.com/${width.value}x${height.value}/000/fff&text=${syn}`;
    ImgContainer.append(img);
}
function deleteImage(){
   img = document.getElementsByTagName('img');
   img.remove();
}
search.disabled = true;
word.addEventListener('input', function(){
    if (word.value.length >= 2 && isNaN(word.value)){
        word.style.borderColor = 'green'
    } else {
        word.style.borderColor = 'red'
    }
})
width.addEventListener('input', function(){
    if (width.value <= 500 && width.value >= 50){
        width.style.borderColor = 'green'
    } else {
        width.style.borderColor = 'red'
    }
})
height.addEventListener('input', function(){
    if (height.value <= 500 && height.value >= 50){
        height.style.borderColor = 'green'
    } else {
        height.style.borderColor = 'red'
    }
})
window.addEventListener('input', function(){
    if (height.style.borderColor == 'green' && width.style.borderColor == 'green' && word.style.borderColor == 'green'){
        search.disabled = false;
    } else {
        search.disabled = true;
    }
})
search.addEventListener ('click', function(){
    preloader.style.display = 'block';
    while (ImgContainer.children.length !== 0) {
        ImgContainer.children[0].remove() ; 
    }
    word.disabled = true;
    width.disabled = true;
    height.disabled = true;
    fetch (`https://api.datamuse.com/words?ml=${word.value}`)
    .then(res => res.json())
    .then(res => res.slice(0,10))
    .then (res => res.forEach((value) => getImage(value.word)))
    .then (()=>{
        preloader.style.display = 'none';
        word.disabled = false;
        width.disabled = false;
        height.disabled = false;
    })
})

