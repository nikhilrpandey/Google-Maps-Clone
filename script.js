
mapboxgl.accessToken = 'pk.eyJ1IjoiaW1uaWNraHp6eiIsImEiOiJja3EycHI0d3Ywa3pxMnJwZjVhY3FuMTRwIn0.ZsH_rM2PfD9HgcB3dQIGyw';


// getting the user's current location
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
});

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
}

function errorLocation(){
    setupMap([20.59,78.69]);
}


// render the map
function setupMap(center){

    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom:9
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    var marker1 = new mapboxgl.Marker({color:'light blue'})
    .setLngLat(center)
    .addTo(map);

    // Add directions control
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}
