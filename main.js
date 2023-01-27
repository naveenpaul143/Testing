const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

// email.addEventListener('textInput', email_Verify);

// password.addEventListener('textInput', pass_Verify);

// function btnc(){
// const username1=document.getElementById("username1").value;
// const password1=document.getElementById("password1").value;
// if((username1!="admin") && (password1!="admin123")){
// 	var ele=document.getElementById("boxs");
// 	ele.innerHTML="Invalid Credentials";
// 	ele.style="background-color:rgba(255, 123, 29, 0.274);color:red;box-shadow: 1px  solid rgb(100, 100, 181);border-radius: 10px;border:none;font-size:20px;font-family: Verdana, Geneva, Tahoma, sans-serif;";
	
	
// }
// }

var ele=document.getElementById("boxs");
function btnc(){
	if (email.value!="admin") {
		// email.style.border = "2px solid red";
		email.style.color="red";
		email.focus();
		ele.innerHTML="Invalid Credentials <br> 👉Enter Correct username👈";
		ele.style="background-color:rgba(255, 123, 29, 0.274);color:red;box-shadow: 1px  solid rgb(100, 100, 181);border-radius: 10px;border:none;font-size:20px;font-family: Verdana, Geneva, Tahoma, sans-serif;";
		return false;
	}
	if (password.value!="admin123") {
		// password.style.border = "2px solid red";
		password.style.color="red";
	    
		ele.innerHTML="Invalid Credentials <br> 👉Enter Correct Password👈";
		ele.style="color:red;box-shadow: 1px  solid rgb(100, 100, 181);border-radius: 10px;border:none;font-size:20px;font-family: Verdana, Geneva, Tahoma, sans-serif;";
		return false;
	}

}
