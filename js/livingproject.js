$(document).ready(function(){
	$("#btnTainan").click(function () {
    $("#tainan").show();
    $("#front").hide();
            map = new google.maps.Map($('map-canvas'), {
          center: {lat: 22.997722, lng: 120.212387},
          zoom: 3
        });
  });
});