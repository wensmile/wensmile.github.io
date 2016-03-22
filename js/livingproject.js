$(document).ready(function(){
	var map = new google.maps.Map($('#map-canvas')[0], {
		center: {lat: 23.718189, lng: 121.006771},
		zoom: 10,
	});
	//map.setCenter(new google.maps.LatLng(22.997722, 120.212387));
	var marker = new google.maps.Marker({
		position: {lat: -34.397, lng: 150.644},
		map: map,
		title:"Taiwan!"
	});
	$("#map-canvas").css('height', $(window).height()-150); 
	$("#btnTainan").click(function () {
		$("#tainan").show();
		$("#front").hide();
		$("#lukang").hide();
		$("#dulan").hide();
		map.setCenter(new google.maps.LatLng(22.997722, 120.212387));
		map.setZoom(1);
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