const imagenes=document.querySelectorAll('.img-galeria')
const imagenesLight=document.querySelector('.agregar-imagen')
const contImgLight=document.querySelector('.imagen-light')
const hamburguesa1= document.querySelector('.hamburguesa');



imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        AparecerImagene(imagen.getAttribute('src'))
    })
})

contImgLight.addEventListener('click', (e)=>{
    if (e.target != imagenesLight) {
        contImgLight.classList.toggle('show')
        imagenesLight.classList.toggle('show-img')
        hamburguesa1.style.opacity='1'
    }
})

const AparecerImagene = (imagen)=>{
    imagenesLight.src= imagen;
    imagenesLight.style.height = window.innerHeight + "px";
    contImgLight.classList.toggle('show')
    imagenesLight.classList.toggle('show-img')
    hamburguesa1.style.opacity='0'
}