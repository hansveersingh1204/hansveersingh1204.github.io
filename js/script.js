//switch to dark mode
function dark_mode() {
	//variable initialization
	var elem = document.body;
	var infoTable = document.getElementsByTagName('table');
	var themeBtn = document.getElementById('theme-btn');
	//change body styling
	elem.style.backgroundColor = "black";
	elem.style.color = "white";
	//iterate through all tables
	for (let i = 0; i < infoTable.length; i++) {
		//change table styling
		const table = infoTable[i];
		table.style.color = "white";
	}
	//change theme button styling 
	themeBtn.innerHTML = "Light Mode";
	themeBtn.className = "dark-btn";
	themeBtn.setAttribute('onclick', 'light_mode()');
}

//switch to light mode
function light_mode() {
	//variable initialization
	var elem = document.body;
	var infoTable = document.getElementsByTagName('table');
	var themeBtn = document.getElementById('theme-btn');
	//change body styling
	elem.style.backgroundColor = "#f7f7f7";
	elem.style.color = "black";
	//iterate through all tables
	for (let i = 0; i < infoTable.length; i++) {
		//change table styling
		const table = infoTable[i];
		table.style.color = "black";
	}
	
	//change theme button styling 
	themeBtn.innerHTML = "Dark Mode";
	themeBtn.className = "light-btn";
	themeBtn.setAttribute('onclick', 'dark_mode()');
}

//if scroll, call function stick()
window.onscroll = function() {stick()};
//variable initialization
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//add or remove sticky class depending on page offset
function stick() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
	}
	else {
		navbar.classList.remove("sticky");
	}
}
