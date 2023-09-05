const panels = document.querySelectorAll('.panel');

function removeItem(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
        this.classList.add('active'); 
    });
}


panels.forEach((item)=>{
    item.addEventListener('click', removeItem);

})




// items.forEach((item)=>{
//   item.addEventListener('click', ()=>{
//     items.classList.remove('active');
//     this.classList.add('active');
//   })
// })