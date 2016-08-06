var wedj = io('');

chrome.runtime.onMessage.addListener(
	function(request) {
		if (request.msg == "connect"){ 
			wedj.emit('authorize', function(url){
				console.log(url);
				chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
					var tab = tabs[0];
					chrome.tabs.update(tab.id, {
						url: url
					});
				});
			});
		}else if(request.msg == "start"){
			chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
				var tab = tabs[0];
				var url = tab.url;
				var urlArray = url.split('/');
				var userID = urlArray[4];
				var playlistID = urlArray[6];
				wedj.emit('start', {userID: userID, playlistID: playlistID});
			});
		}

	});

var access_token;





