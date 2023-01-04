
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");  
	
	// Validate fields entered by the user: name, phone, password, and email

	//Validate the name
	if(fName.value == "" || !isNaN(fName.value) || (fName.value).length < 3){
		errorName.innerHTML = "Este campo es obligatorio y debe tener, al menos, 3 caracteres";
		fName.style.border = "1px solid red"
		error++;
	}else{
		errorName.innerHTML = "";
		fName.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the email
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(fEmail.value == "" || !regex.test(fEmail.value) || (fEmail.value).length < 3){
		errorEmail.innerHTML = "Este campo es obligatorio y debe contener un '@' y tener, al menos, 3 caracteres";
		fEmail.style.border = "1px solid red"
		error++;
	}else{
		errorEmail.innerHTML = "";
		fEmail.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Address
	if(fAddress.value == "" || (fAddress.value).length < 3){
		errorAddress.innerHTML = "Este campo es obligatorio y debe tener, al menos, 3 caracteres";
		fAddress.style.border = "1px solid red"
		error++;
	}else{
		errorAddress.innerHTML = "";
		fAddress.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Last Name	
	if(fLastN.value == "" || !isNaN(fLastN.value) || (fLastN.value).length < 3){
		errorLastN.innerHTML = "Este campo es obligatorio y debe tener, al menos, 3 caracteres";
		fLastN.style.border = "1px solid red"
		error++;
	}else{
		errorLastN.innerHTML = "";
		fLastN.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Password
	if(fPassword.value == "" || (fPassword.value).length < 3){
		errorPassword.innerHTML = "Este campo es obligatorio y debe tener, al menos, 3 caracteres";
		fPassword.style.border = "1px solid red"
		error++;
	}else{
		errorPassword.innerHTML = "";
		fPassword.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Phone
	if(fPhone.value == "" || isNaN(fPhone.value) || (fPhone.value).length < 3){
		errorPhone.innerHTML = "Este campo es obligatorio y debe tener, al menos, 3 caracteres";
		fPhone.style.border = "1px solid red"
		error++;
	}else{
		errorPhone.innerHTML = "";
		fPhone.style.border = "1px solid gray"
		error = 0;
	}

	
	if(error == 0){
		alert("Todo correcto");
		return true;
	}else{
		alert("Hay errores");
		return false;


	}









}





	


