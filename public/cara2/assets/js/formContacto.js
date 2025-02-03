const contact = document.getElementById('contact');
contact.addEventListener("submit",e=>{
	e.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const subject = document.getElementById("subject").value;
	const message = document.getElementById("message").value;
	fetch("/contactoCorreo",{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({name,email,subject,message})
	})
	.then(res=>res.json())
	.then(res=>{
		if(res.status){
       Swal.fire('¡Correo enviado con exito!');
		}else{
		Swal.fire('¡Hubo un error inesperado!');	
		}
	})
});