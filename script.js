{document.getElementsByTagName('div')[0].focus();
  }
  
const nombre = document.getElementById('nombre')
const email = document.getElementById('correo')
const lugar = document.getElementById('lugar')
const organizacion = document.getElementById('organizacion')
const mejora = document.getElementById('mejora')
const forma = document.getElementById('forma')
const errorElement = document.getElementById('error')

form.addEventListener('enviar', (e) => {
	let messages = []
	if (nombre.value === '' || nombre.value == null) {
		messages.push('Nombre requerido')
	}
	
	if (mejora.value.length > 300) {
		messages.push('Tiene que ser menos de 300 palabras')
	}
	
	if (messages length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})

function increase()
{
	document.getElementById("img").style.width = '400px';
}