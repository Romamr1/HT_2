(function () {
	var users = [
		{
			name: 'vasia',
			password: 'vasia'	
		},
		{
			name: 'petia',
			password: '1234'
		},
		{
			name: 'mashia',
			password: '12345'
		}
	];

	var container = document.getElementById('container');

	var form = document.createElement('form');
	form.addEventListener('submit', ONSubmit);

	var ul = document.createElement('ul');

	createElem("login", "login", ul);

	createElem("password", "password", ul);

	createElem("submit", "submit", ul);



	form.appendChild(ul);

	container.appendChild(form);


	function createElem(name, type, parent){
		var li = document.createElement('li');

		var el = document.createElement('input');
		el.setAttribute('type',type);
		el.setAttribute('name',name);
		el.setAttribute('id',name);
		
		
		if (type !== 'submit') {
			el.setAttribute("required", true);
			el.setAttribute("placeholder", "your " + name);
			el.setAttribute('class',"box");
			label = document.createElement('label');
			label.setAttribute('for',name);
			label.innerHTML = name;
			li.appendChild(label);
		}	
		li.appendChild(el);
		parent.appendChild(li);
		
	} 

	function ONSubmit(event){
		event.preventDefault();
		var login = document.getElementById("login").value + '';
		var password = document.getElementById("password").value + '';
		var resalt = chekData(login, password);
		container.innerHTML = resalt.message;

	}

	function chekData(login, password){
		var message = '';
		var user = {};
		for (var i = users.length - 1; i >= 0; i--) {
			if ((users[i].name === login) && (users[i].password === password)){
				message = 'You successfully login!!! Welcome ' + users[i].name;
				user = users[i];
				break;
			} else {
				message = 'Check the login and password!!! You are not logged in!';
			}
		}		
		user.message = message;
		return user;		
	};
}());