var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
		"x-rapidapi-key": "ef0532a7cbmsh74675c67cdd0441p14fce3jsn836ce3d6111d"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});