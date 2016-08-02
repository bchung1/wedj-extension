chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
		var url = tabs[0].url;
		var urlArray = url.split('/');
		var userID = urlArray[4];
		var playlistID = urlArray[6];
		console.log(userID, playlistID);
	});
});

