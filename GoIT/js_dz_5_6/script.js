function addText (n, s) {
	var el = document.createElement("p");
	el.innerHTML = "split" + n + ' ' + s;
	document.getElementById("split-text").appendChild(el);
}

function removeText () {
	var node = document.getElementById("split-text");
  var last;
  while (last = node.lastChild) node.removeChild(last);
};


var mseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var LIMIT = 60;
var split_counter=0;
var loop;

var time_text;
var status = 0;

function zero (digit,n) {
	if ((arguments.length === 2)&&(n===3)) {
		if (digit < 10) return '00' + digit;
		if ((digit >= 10) && (digit < 100)) return '0' + digit;
		return digit;
	}
	if (digit < 10) return '0' + digit;
	else return digit;
}

function Timer () {
	document.getElementById("btn_start").innerHTML = "start";
	//status = 1;
	function counter() {
		mseconds+=10;		
		if ( mseconds >= 1000 ) { ++seconds; mseconds = 0; }
		if ( seconds >= LIMIT ) {++minutes; seconds = 0; }
		if ( minutes >= LIMIT ) {++hours; minutes = 0; }
		time_text = zero(hours) + ':' + zero(minutes) + ':' + zero(seconds) + '.' + zero(mseconds, 3);
		document.getElementById("timer").innerHTML = time_text;
	};
	loop = setInterval(counter, 10);
}

function splitTime() {
	++split_counter;
	addText(split_counter, time_text);
}

function pauseTimer() {
	clearInterval(loop);
	document.getElementById("btn_start").innerHTML = "pause";
	//status=0;
}

function stopTimer() {
	clearInterval(loop);
	split_counter = 0;
	mseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	removeText();
	status=0;
	document.getElementById("timer").innerHTML = "00:00:00.000";
	document.getElementById("btn_start").innerHTML = "start";
}

function OnOff() {
	if (status==1) {
		status=0;
		return pauseTimer();		
	}	else {
		status=1; 
		return Timer();		
	}
}

document.getElementById("btn_start").addEventListener('click', OnOff);
document.getElementById("btn_stop").addEventListener('click', stopTimer);
document.getElementById("btn_split").addEventListener('click', splitTime);
//document.getElementById("btn_pause").addEventListener('click', pauseTimer);

