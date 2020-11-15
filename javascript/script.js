$(document).ready(function(){
	var dropdown = $(".search-dropdown");
	var toogleBtn = $(".search-dropdown .dropdown-toggle");
	
	// Toggle search and close icon for search dropdown
	dropdown.on("show.bs.dropdown", function(e){
		toogleBtn.toggleClass("d-none");
	});
	dropdown.on("hide.bs.dropdown", function(e){
		toogleBtn.addClass("d-none");
		toogleBtn.first().removeClass("d-none");
	});
});
let regexp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let email= document.getElementById("email");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let card=document.querySelector(".mymar");
let form=document.querySelector("#form-main");
let phone=document.querySelector("#phone");
let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let phn = /^\d{10}$/;
let btn=document.querySelector('.btn');
let btnn=document.querySelector(".show");
let butn=document.querySelector(".showc");
console.log(btnn);
// signup registration
function register(){
	let errDiv=document.createElement("div");
	errDiv.className="alert alert-danger";
	if(!regexp.test(email.value)){
		errDiv.appendChild(document.createTextNode("Email Invalid"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,3000);
		return false;
	}
	else if(!phn.test(phone.value) && !phoneno.test(phone.value)){
		errDiv.appendChild(document.createTextNode("Phone number is not valid"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,3000);
		return false;
	}
	else if(!regpwd.test(password.value)){
		errDiv.appendChild(document.createTextNode("Password not strong"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,3000);
		return false;
	}
	else if(confirmpassword.value!=password.value){
		errDiv.appendChild(document.createTextNode("Password does not match"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,2000);
		return false;
	} 
	else {
	  return true;
	}
	
   
}
// login validate
function validate(){
	let errDiv=document.createElement("div");
	errDiv.className="alert alert-danger";
	if(!regexp.test(email.value)){
		errDiv.appendChild(document.createTextNode("Email Invalid"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,3000);
		return false;
	}
	else if(!regpwd.test(password.value)){
		errDiv.appendChild(document.createTextNode("Password invalid"));
		card.insertBefore(errDiv,form);
		setTimeout(clearError,3000);
		return false;
	}
	else{
		return true;
	}

}
function clearError(){
    document.querySelector(".alert").remove();
}
function showpsw(el){
	if(password.type === "password"){
		password.type ="text";
		el.className="fa fa-eye-slash";
	}
	else{
		password.type= "password";
		el.className="fa fa-eye";
	}
}
function showpswc(el){
	if(confirmpassword.type === "password"){
		confirmpassword.type ="text";
		el.className="fa fa-eye-slash";
	}
	else{
		confirmpassword.type= "password";
		el.className="fa fa-eye";
	}
}
let no;
let indictr = document.querySelector(".indicatr");
let vweak = document.querySelector(".vweak");
let weak = document.querySelector(".weak");
let med = document.querySelector(".med");
let str = document.querySelector(".str");
let txt1 = document.querySelector(".txt1");
let txt = document.querySelector(".txt");
let regweak = /[a-z]/;
let regwk = /[A-Z]/;
let regmed = /\d+/;
let regstr = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function strength(){
	if(password.value!= ""){
		indictr.style.display= "block";
		indictr.style.display= "flex";
		txt1.style.display = "block";
		txt1.textContent= "Password Strength: ";
		if(password.value.length<=3){
			no=0
		}
		if(password.value.length >=4 && (password.value.match(regweak) || password.value.match(regwk) || password.value.match(regmed) || password.value.match(regstr))){
				no=1;
		}
		if(password.value.length >=6 && ((password.value.match(regweak) && password.value.match(regmed)) || (password.value.match(regmed) && password.value.match(regstr)) || (password.value.match(regweak) && password.value.match(regstr)))){
			no=2;
		}
		if(password.value.length >=6 && ((password.value.match(regwk) && password.value.match(regmed)) || (password.value.match(regweak) && password.value.match(regwk)) || (password.value.match(regwk) && password.value.match(regstr)))){
			no=2;
		}
		if(password.value.length >=8 && password.value.match(regweak) && password.value.match(regwk)  && password.value.match(regmed) && password.value.match(regstr)){
			no=3;
		}
		if (no == 0){
			vweak.classList.add("active");
			txt.style.display = "block";
			txt.textContent= "Weak";
			txt.classList.add("vweak");
		}
		else{
			vweak.classList.remove("active");
		}
		if (no == 1){
			
			vweak.style.backgroundColor="orange";
			weak.classList.add("active");
			txt.style.display = "block";
			txt.textContent= "Medium";
			txt.classList.add("weak");
		}else{
			weak.classList.remove("active");
			txt.classList.remove("weak");
		}
		if (no == 2){
			vweak.style.backgroundColor="cadetblue";
			weak.style.backgroundColor="cadetblue";
			// weak.classList.add("active");
			med.classList.add("active");
			txt.style.display = "block";
			txt.textContent= "Fair";
			txt.classList.add("med");
		}else{
			weak.style.backgroundColor="lightgray";
			med.classList.remove("active");
			txt.classList.remove("med");
		}
		if (no == 3){
			vweak.style.backgroundColor="lime";
			weak.style.backgroundColor="lime";
			med.style.backgroundColor="lime";
			// weak.classList.add("active");
			// med.classList.add("active");
			str.classList.add("active");
			txt.textContent= "Strong";
			txt.classList.add("str");
		}else{
			med.style.backgroundColor="lightgray";
			str.classList.remove("active");
			txt.classList.remove("str");
		}
	}
	else{
		indictr.style.display = "none";
		txt.style.display="none";
		txt1.style.display="none";
	}
}
document.querySelector('input').addEventListener('click',function(){
	console.log('clicking');
});