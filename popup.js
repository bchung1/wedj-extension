window.addEventListener("load", function(){
	document.getElementById("connect").addEventListener("click", function() {
		chrome.runtime.sendMessage({
			msg: "connect"
		}); 
	});

	document.getElementById("start").addEventListener("click", function(){ 
		chrome.runtime.sendMessage({
			msg: "start"
		}); 
	}); 
}, false);

