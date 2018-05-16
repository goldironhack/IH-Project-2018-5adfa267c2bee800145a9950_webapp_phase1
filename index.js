var map;
const hood = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";

//------------------Databases---------------------------//
function getData(){
  var data = $.get(hood,function(){}) //guarda la informacion del get en data.

    .done(function(){

      var myString = data.responseJSON.data[0][9];
      var myTruncatedString = myString.substring(7,data.responseJSON.data[0][9].lenght-1);

      console.log(data.responseJSON.data);
    })

    .fail(function(error){
      console.log(error);
    })
  }


//----------Google Maps--------------------------//
function colores(){
  var color = ["#00FFFF", "#F4FA58", "#BCA9F5", "#DF01D7", "#CEF6F5"] ;
  return color[Math.floor(Math.random() * color.length)];
}


var ny_coordinates= {lat:40.729064,lng: -73.996508};
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: ny_coordinates
        });

        map.data.loadGeoJson(
            'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');


        map.data.setStyle(function(feature) {
        //var id = feature.getProperty('id');
        var color = colores();

        return {
          fillColor: color,
          strokeWeight: 1
        };

    });

    var marker = new google.maps.Marker({
    position: ny_coordinates,
    map: map,
    title: 'Hello World!'
  });
      }








//-------Finish-----///
$("document").ready(function(){
    $("#getData").on("click",getData)

})