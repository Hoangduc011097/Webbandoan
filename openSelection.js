
const openSelection = document.querySelector('#selection');
console.log(openSelection)

openSelection.addEventListener('click', ()=>{

    document.querySelector ('#menu-mobile').style.right = '37%';
    

})

const closeSelection = document.querySelector('#close-selection');

closeSelection.addEventListener('click', ()=>{

    document.querySelector ('#menu-mobile').style.right = '-100%';
    

})