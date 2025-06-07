function changeBgColor(color){
    document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', ()=> {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor==='white'){
        changeBgColor('black');
        themeButton.innerText = "Light mode"
    }else{
        changeBgColor('white');
        themeButton.innerText = "Dark mode"
    }
    
})