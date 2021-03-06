$(document).ready(function(){
	var taiwanC = new google.maps.LatLng(23.718189, 121.006771);
	var tainanC = new google.maps.LatLng(22.997722, 120.212387);
	var lukangC = new google.maps.LatLng(24.059338, 120.431415);
	var dulanC = new google.maps.LatLng(22.871944, 121.226038);

	var map = new google.maps.Map($('#map-canvas')[0], {
		center: taiwanC,
		zoom: 7,
	});
	var infoTaiwan = new google.maps.InfoWindow();
  	infoTaiwan.setContent("TAIWAN!");
    infoTaiwan.setPosition(taiwanC);
    infoTaiwan.open(map);
    var markerTainan = new google.maps.Marker({
		position: tainanC,
		title:"Tainan",
	});
	var markerLukang = new google.maps.Marker({
		position: lukangC,
		title:"Lukang",
	});
	var markerDulan = new google.maps.Marker({
		position: dulanC,
		title:"Dulan",
	});
	function clearMarker() {
		markerTainan.setMap(null);
		markerLukang.setMap(null);
		markerDulan.setMap(null);
	}

	var map_height = $(window).height()*0.6;
	$("#map-canvas").css('height', map_height); 
	var content_height = $(window).height()*0.6*0.7;
	$("#content").css('height', content_height); 
	var nav_height = $().height()*0.6*0.3;
	$("#nav").css('height', nav_height); 
	$("#btnTaiwan").click(function () {
		$("#tainan").hide();
		$("#front").show();
		$("#lukang").hide();
		$("#dulan").hide();
		clearMarker();
		map.setZoom(7);
		map.setCenter(taiwanC);
	});
	$("#btnTainan").click(function () {
		$("#tainan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#dulan").hide();
		clearMarker();
		map.setZoom(14);
		map.setCenter(tainanC);
		markerTainan.setMap(map);
	});
	$("#btnLukang").click(function () {
		$("#lukang").show();
		$("#front").hide();
		$("#tainan").hide();
		$("#dulan").hide();
		clearMarker();
		map.setZoom(14);
		map.setCenter(lukangC);
		markerLukang.setMap(map);
	});
	$("#btnDulan").click(function () {
		$("#dulan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#tainan").hide();
		clearMarker();
		map.setZoom(16);
		map.setCenter(dulanC);
		markerDulan.setMap(map);
	});	
});