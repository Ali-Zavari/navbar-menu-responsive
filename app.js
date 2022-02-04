const item = document.querySelector("#item");
const icon=document.querySelector(".iconmenu");
icon.addEventListener("click",function(){
    // if(item.classList.contains('item-without-height') ){
    //     item.classList.remove('item-without-height');
    // }else{
    //     item.classList.add('item-without-height');
    // }
    item.classList.toggle("item-without-height");
})