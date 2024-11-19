const menuBar=document.querySelector('.fa-bars');
const navBar=document.getElementsByTagName('nav')[0];
menuBar.addEventListener('click',()=>{
    navBar.classList.toggle('toggle')
})
navBar.addEventListener('click',()=>{
    navBar.classList.remove('toggle')
})
const modals=document.querySelector('.modals')
addNews=()=>{
    const btnAddNews=document.querySelector('.btnAdd');
    btnAddNews.addEventListener('click',()=>{
        modals.style.visibility='visible'
    })
}
addNews()
cancelModal=()=>{
    const btnCancel=document.querySelector('.btnCancel');
    btnCancel.addEventListener('click',()=>{
         modals.style.visibility='hidden'
    })
    console.log(btnCancel);
    
}
cancelModal()
addPost=()=>{
    const btnSave=document.querySelector('.btnSave')
    var article=document.getElementsByTagName('article')[0];
    const title=document.querySelector('#title');
    const thumbnail=document.querySelector('#thum');
    btnSave.addEventListener('click',()=>{
       modals.style.visibility='hidden'
       let image=thumbnail.files[0];
       if(title.value=='' || image==''){
            confirm('Please enter data.')
       }else{
        article.innerHTML+=`
            <div class="cards">
                <div class="image">
                    <img src="${URL.createObjectURL(image)}" alt="">
                </div>
                <div class="title">
                    <p>${title.value}</p>
                </div>
            </div>
       `;
       }
    })
}
addPost()