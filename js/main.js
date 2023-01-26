function show(){
    // console.log('hello show...')
    if(window.pageYOffset >= 1604){
        console.log('muncul...');
    } else if(window.pageYOffset <= 1604){
        console.log('hidden...')
    }
}
window.addEventListener('scroll',show);

let backTotop = document.getElementById('back-to-top');
backTotop.addEventListener('click',function(){
    console.log('hello world...')
})