const formulario = document.querySelector('.contacto')
const $buttonMailto = document.querySelector('#trucazo')

formulario.addEventListener('submit', handleSubmit)

function handleSubmit(event){
event.preventDefault()
const form = new FormData(this)
console.log(form.get('name'))
$buttonMailto.setAttribute('href', `mailto:cooperativa.laimposible@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
$buttonMailto.click()
}


function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function openMenu(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}