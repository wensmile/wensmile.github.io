$(document).ready(function(){

	var map = new google.maps.Map($('#map-canvas')[0], {
		center: {lat: 23.718189, lng: 121.006771},
		zoom: 10,
	});
	//map.setCenter(new google.maps.LatLng(22.997722, 120.212387));
	var marker = new google.maps.Marker({
		position: {lat: 23.718189, lng: 121.006771},
		map: map,
		title:"Taiwan!"
	});
	var markerTainan = new google.maps.Marker({
		position: {lat: 22.997722, lng: 120.212387},
		map: map,
		title:"Tainan!"
	});
	$("#map-canvas").css('height', $(window).height()-150); 
	$("#btnTainan").click(function () {
		$("#tainan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#dulan").hide();
		map.setZoom(1);
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