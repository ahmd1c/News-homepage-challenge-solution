let openn = document.getElementById('openn');
let closee = document.getElementById('closee');
let li = document.querySelectorAll('li');
let list = document.getElementById('list');


openn.addEventListener('click',(e)=>{
    li.forEach((el)=>{
        el.classList.remove('hidden');
    })
    openn.style.display='none';
    closee.style.display='block';
    list.classList.add('active');
    list.classList.remove('none');

})

closee.addEventListener('click',(e)=>{
    li.forEach((el)=>{
        el.classList.add('hidden');
    })
    openn.style.display='block';
    closee.style.display='none';
    list.classList.remove('active');
    list.classList.remove('none');

})
