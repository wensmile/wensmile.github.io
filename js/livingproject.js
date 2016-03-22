$(document).ready(function(){
	var taiwanC = new google.maps.LatLng(23.718189, 121.006771);
	var tainanC = new google.maps.LatLng(22.997722, 120.212387);

	var map = new google.maps.Map($('#map-canvas')[0], {
		center: taiwanC,
		zoom: 6,
	});
	//map.setCenter(new google.maps.LatLng(22.997722, 120.212387));
	var marker = new google.maps.Marker({
		position: taiwanC,
		map: map,
		title:"Taiwan!"
	});
	var infoTaiwan = new google.maps.InfoWindow();
  	infoTaiwan.setContent("TAIWAN!");
    infoTaiwan.setPosition(taiwanC);
    infoTaiwan.open(map);
	var markerTainan = new google.maps.Marker({
		position: tainanC,
		map: map,
		title:"Tainan!"
	});
	$("#map-canvas").css('height', $(window).height()-150); 
	$("#btnTainan").click(function () {
		$("#tainan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#dulan").hide();
		map.setZoom(14);
		map.setCenter(new google.maps.LatLng(22.997722, 120.212387));
	});
	$("#btnLukang").click(function () {
		$("#lukang").show();
		$("#front").hide();
		$("#tainan").hide();
		$("#dulan").hide();
	});
	$("#btnDulan").click(function () {
		$("#dulan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#tainan").hide();
	});	
});