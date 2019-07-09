let email= prompt('Enter login');
let userPass='UserPass';
let adminPass='AdminPass';
let pass;
let chngPass;
let oldPass;
let newPass;
let minLogLenght=6;
let minPassLength=5;

if (email.length > minLogLenght){
	switch(email){
		case'user@gmail.com':
			pass = prompt('ent pass');
			if(pass === '' || pass === null){
				alert('Canceled');
			}else if(pass === userPass){
					if(confirm('Do you want to change a password?')){
				oldPass = prompt('enter your old pass');
				if(oldPass === '' || oldPass === null){
					alert('Canceled');
				}else if(oldPass === pass){
					pass= prompt('Enter new password');
					if(pass.length < minPassLength){
						alert('It’s too short password. Sorry.”');
					}else{
						newPass = prompt('Enter new password again');
						if(pass === newPass){
							alert('You have successfully changed your password.');
						}else{
							alert('Wrong new pass');
						}
					}
				}
			}else{
				alert('You have failed the change');
			}
		}else{
				alert('Wrong password');
			}
			break;


		case 'admin@gmail.com':
		pass = prompt('ent pass');
		if(pass === '' || pass === null){
				alert('Canceled');
			}else if(pass === adminPass){
			if(confirm('Do you want to change a password?')){
				oldPass = prompt('enter your old pass');
				if(oldPass === '' || oldPass === null){
					alert('Canceled');
				}else if(oldPass === pass){
					pass= prompt('Enter new password');
					if(pass.length < minPassLength){
						alert('It’s too short password. Sorry.”');
					}else{
						newPass = prompt('Enter new password again');
						if(pass === newPass){
							alert('You have successfully changed your password.');
						}else{
							alert('Wrong new pass');
						}
					}
				}
			}else{
				alert('You have failed the change');
			}
		}else{
			alert('Wrong password');
		}
		break;

		default:
		alert('I don’t know you');
	}
}else {
	alert("I don't know any emails having name length less than 6 symbols");
}


	

