$(document).ready(function(){
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
    	center: {lat: 23.667893, lng: 120.951698},
        zoom: 8
    });
	$("#btnTainan").click(function () {
    $("#tainan").show();
    $("#front").hide();
  });
});