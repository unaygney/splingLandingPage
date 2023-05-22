let psPage = document.querySelector('.page-1')
let xPage = document.querySelector('.page-2')


psPage.addEventListener('click' , function(){
    psPage.style.width = '70%';
    xPage.style.width = '30%';
    
})

xPage.addEventListener('click' , function(){
    xPage.style.width = '70%';
    psPage.style.width = '30%';
})



