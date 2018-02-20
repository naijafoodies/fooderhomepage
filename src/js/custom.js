var Naijahandler = (function() {
    "use strict"
     // private variables
	 var stoploader;
	 var searchbuttonele = $("#findnowvendor");
	 var searchfield = $("#searchfield");
	 var nloader = 'stop';
     var naijaloaderid = 'preloader';
	 //Private Method
     var Ctrls = {}; 	
	 //Private Method
	 var defaultnaijaloader = function() {
		if(nloader=='stop'){
			document.getElementById(naijaloaderid).style.display = 'none';
		}
      };
	  
	// Private AJAX calls 
    var getVendors = function(latitude,longitude) {
		document.getElementById(naijaloaderid).style.display = 'none'; //Stop Naija Loader
		alert(latitude);
		alert(longitude);
		return false;
        
    };
	// Private Method
    var inputClick = function(event) {
		var searchk = searchfield.val();
		if(searchk ==''){
			alert('Please enter address, city, state or zip');
			return false;
		} else {
			      //Start Naija Loader
				  document.getElementById(naijaloaderid).style.display = 'block';
				  var geocoder = new google.maps.Geocoder();
				  geocoder.geocode( { 'address': searchk}, function(results, status) {
                  //alert(status);
				  if (status == google.maps.GeocoderStatus.OK) {
					  var latitude = results[0].geometry.location.lat();
					  var longitude = results[0].geometry.location.lng();
					  getVendors(latitude,longitude);
					  }
				  
				  if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
					  alert('Invalid search !!!, Please enter valid address, city, state or zip');
					  document.getElementById(naijaloaderid).style.display = 'none'; //Stop Naija Loader
					  return false;
					  } 
				}); 
				
		}
		
		event.preventDefault();
    };
	
	// Private Method
	var bindFunctions = function() {
        searchbuttonele.on("click", inputClick);
    };
	
	// Public Method
	var init = function () {
		stoploader = defaultnaijaloader();
		bindFunctions();
		
    };
	return {
        init: init,
     };
})();