//"StAuth10244: I Zack Freeman, 000781330 certify that this material is my original work. 
//No other person's work has been used without due acknowledgement. 
//I have not made my work available to anyone else."

//referrences to DOM
barButton = document.getElementById("bars");
mAndGButton = document.getElementById("mandg");
gamesButton = document.getElementById("games");
allButton = document.getElementById("all");
geoButton = document.getElementById("geo");
addressButton = document.getElementById("addressButton");
dirButton = document.getElementById("dirButton");
select = document.getElementById("dest");
selectType = document.getElementById("transitType")



//initmap function sets markers up on the map with their info windows
function initMap() {
  


    var gageParkLoc = { lat: 43.2422,lng: -79.8287 };  
    map = new google.maps.Map(document.getElementById("map"),{
       center: gageParkLoc,
       zoom: 11,
       });

       directionsRender = new google.maps.DirectionsRenderer();
       directionsService = new google.maps.DirectionsService();
    var gageParkMark = new google.maps.Marker({
       position: gageParkLoc,
       map,
       title: "Gage Park",
   });

   var gagecontentString = "<div id = 'content'>" + 
    "<h1>Gage Park</h1>" + 
    "<p>Gage Park is a large community park and civic gardens located in Hamilton, Ontario, Canada. "
    + "Lots of outdoor events take place here including live music, flower shows, exercise classes and much more. Great place to check out! </p>"
    + "<button id = 'gageDir'>Directions</button>" 
    +"</div>"

    var gageinfowindow = new google.maps.InfoWindow({
        content: gagecontentString,
      });

    gageParkMark.addListener("click", () => {
        gageinfowindow.open({
          anchor: gageParkMark,
          map,
          shouldFocus: false,
        });
        
    });  

   var dundurnLoc = {lat: 43.2695,lng: -79.8842};
   var dundurnMark = new google.maps.Marker({
       position: dundurnLoc,
       map,
       title: "Dundurn Castle",
   });

   var dundurncontentString = "<div id = 'content'>" + 
    "<h1>Dundurn Castle</h1>" + 
    "<p>Dundurn Castle is a historic neoclassical mansion on York Boulevard in Hamilton, Ontario, Canada."
    + "Great historical site with fantastic gudied tours through the castle definatly a sight to see in Hamilton </p>"
    + "<button id = 'dundurnDir'>Directions</button>" 
    + "</div>"

    var dundurninfowindow = new google.maps.InfoWindow({
        content: dundurncontentString,
      });

      dundurnMark.addListener("click", () => {
        dundurninfowindow.open({
          anchor: dundurnMark,
          map,
          shouldFocus: false,
        });
    });

   var aghLoc = {lat:43.2574,lng: -79.8721};
   var aghMark = new google.maps.Marker({
       position:aghLoc,
       map,
       title: "Art Gallery of Hamilton"
   });

   var aghString = "<div id = 'content'>" + 
    "<h1>Art Gallery of Hamilton</h1>" + 
    "<p>The Art Gallery of Hamilton is an art museum located in Hamilton, Ontario, Canada. The museum occupies a 7,000 square metres building on King Street West in downtown Hamilton."
    + "The AGH hosts lots of events including film festivals, poetry slams, book signings and more. </p>"
    + "<button id = 'aghDir'>Directions</button>" 
    + "</div>"

    var aghinfowindow = new google.maps.InfoWindow({
        content: aghString,
      });

      aghMark.addListener("click", () => {
        aghinfowindow.open({
          anchor: aghMark,
          map,
          shouldFocus: false,
        });
    });


   var carnigieLoc = {lat: 43.26639,lng:-79.95469};
   var carnigieMark = new google.maps.Marker({
       position: carnigieLoc,
       map,
       title: "Carnigie Gallery"

   });

   var carnigieString = "<div id = 'content'>" + 
    "<h1>Carnigie Gallery</h1>" + 
    "<p>The Carnigie Gallery in Dundas 10 King St W features changing exhibits promoting local artists "
    + " </p>"
    + "<button id = 'carnigieDir'>Directions</button>" 
    + "</div>"

    var carnigieinfowindow = new google.maps.InfoWindow({
        content: carnigieString,
      });

      carnigieMark.addListener("click", () => {
        carnigieinfowindow.open({
          anchor: carnigieMark,
          map,
          shouldFocus: false,
        });
    });


   var shoalinLoc = {lat: 43.2625,lng: -79.8667}
   var shoalinMark = new google.maps.Marker({
       position: shoalinLoc,
       map,
       title: "Shoalin Underground Bar"
   });

   var shoalinString = "<div id = 'content'>" + 
    "<h1>Shaolin Underground</h1>" + 
    "<p>The Shaolin Underground Bar and Resturant located at 229 James St N in Hamilton offers a unique bar crawl experience. Great staff and menu mixed with a unique ambiance"
    + " </p>"
    + "<button id = 'shoalinDir'>Directions</button>" 
    + "</div>"

    var shoalininfowindow = new google.maps.InfoWindow({
        content: shoalinString,
      });

      shoalinMark.addListener("click", () => {
        shoalininfowindow.open({
          anchor: shoalinMark,
          map,
          shouldFocus: false,
        });
    });


   var radiusLoc = {lat: 43.2524,lng: -79.8708}
   var radiusMark = new google.maps.Marker({
       position: radiusLoc,
       map,
       title: "Radius Resturant"
   });

   var radiusString = "<div id = 'content'>" + 
    "<h1>Radius</h1>" + 
    "<p>Located at 151 James St S Hamilton ON Radius is a Stylish, brick-lined spot with unique, thoughtfully sourced bistro fare, local wine & a small patio."
    + " A more upscale experience worth a trip if you want to feel elegant.</p>"
    + "<button id = 'radiusDir'>Directions</button>" 
    + "</div>"

    var radiusinfowindow = new google.maps.InfoWindow({
        content: radiusString,
      });

      radiusMark.addListener("click", () => {
        radiusinfowindow.open({
          anchor: radiusMark,
          map,
          shouldFocus: false,
        });
    });


   var corktownLoc = {lat: 43.24989, lng: -79.86443};
   var corktownMark = new google.maps.Marker({
       position: corktownLoc,
       map,
       title: "Corktown Irish Pub"
   });

   var corktownString = "<div id = 'content'>" + 
    "<h1>The Corktown Irish Pub</h1>" + 
    "<p>Circa-1931 watering hole with an Irish theme, a pub-grub menu & a full calendar of music events. Located at 175 Young St Hamilton ON, its the perfect slice of the UK in Ontario"
    + " </p>"
    + "<button id = 'corktownDir'>Directions</button>" 
    + "</div>"

    var corktowninfowindow = new google.maps.InfoWindow({
        content: corktownString,
      });

      corktownMark.addListener("click", () => {
        corktowninfowindow.open({
          anchor: corktownMark,
          map,
          shouldFocus: false,
        });
    });

   var elementsLoc = {lat: 43.30055, lng: -80.02606};
   var elementsMark = new google.maps.Marker({
       position: elementsLoc,
       map,
       title: "Elements Casino"
   });

   var elementsString = "<div id = 'content'>" + 
    "<h1>Elements Casino</h1>" + 
    "<p>The Casino most local to Hamilton Proper, Elements casino in Flamborough offers a wide variety of virtual gambling and tables and great bar service"
    + " </p>"
    + "<button id = 'elementsDir'>Directions</button>" 
    + "</div>"

    var elementsinfowindow = new google.maps.InfoWindow({
        content: elementsString,
      });

      elementsMark.addListener("click", () => {
        elementsinfowindow.open({
          anchor: elementsMark,
          map,
          shouldFocus: false,
        });
    });

   var keymastersLoc = { lat: 43.23460, lng: -79.74034}
   var keymastersMark = new google.maps.Marker({
       position: keymastersLoc,
       map,
       title: "Keymasters Escape Room"
   });

   var keymastersString = "<div id = 'content'>" + 
    "<h1>Keymasters Escape Room</h1>" + 
    "<p>Great local escape room venue. A fun family experience with changing interesting themes."
    + " </p>"
    + "<button id = 'keymastersDir'>Directions</button>" 
    + "</div>"

    var keymastersinfowindow = new google.maps.InfoWindow({
        content: keymastersString,
      });

      keymastersMark.addListener("click", () => {
        keymastersinfowindow.open({
          anchor: keymastersMark,
          map,
          shouldFocus: false,
        });
    });

   var boardgamecafeLoc = {lat: 43.24747,lng: -79.81671};
   var boardgamecafeMark = new google.maps.Marker({
       position: boardgamecafeLoc,
       map,
       title: "Mancala Monk Board Game Cafe"
   });

   var boardgamecafeString = "<div id = 'content'>" + 
    "<h1>Monkala Monk Boardgame Cafe</h1>" + 
    "<p>Interesting spot in Hamilton, offers a unique experience with every board game you can imagine to play with along side a cafe."
    + " </p>"
    + "<button id = 'boardgamecafeDir'>Directions</button>" 
    + "</div>"

  var boardgamecafeinfowindow = new google.maps.InfoWindow({
       content: boardgamecafeString,
    });

    boardgamecafeMark.addListener("click", () => {
     boardgamecafeinfowindow.open({
      anchor: boardgamecafeMark,
       map,
      shouldFocus: false,
     });
    
    });
    


   
  // filter buttons remove all markers not pertaining to a certain theme and show the ones that do
  barButton.addEventListener("click", function(){
    shoalinMark.setMap(map);
    corktownMark.setMap(map);
    radiusMark.setMap(map);
    gageParkMark.setMap(null);
    boardgamecafeMark.setMap(null);
    keymastersMark.setMap(null);
    carnigieMark.setMap(null);
    aghMark.setMap(null);
    dundurnMark.setMap(null);
    elementsMark.setMap(null);

  });

  mAndGButton.addEventListener("click", function(){
    shoalinMark.setMap(null);
    corktownMark.setMap(null);
    radiusMark.setMap(null);
    gageParkMark.setMap(null);
    boardgamecafeMark.setMap(null);
    keymastersMark.setMap(null);
    carnigieMark.setMap(map);
    aghMark.setMap(map);
    dundurnMark.setMap(map);
    elementsMark.setMap(null);

  });

  gamesButton.addEventListener("click", function(){
    shoalinMark.setMap(null);
    corktownMark.setMap(null);
    radiusMark.setMap(null);
    gageParkMark.setMap(null);
    boardgamecafeMark.setMap(map);
    keymastersMark.setMap(map);
    carnigieMark.setMap(null);
    aghMark.setMap(null);
    dundurnMark.setMap(null);
    elementsMark.setMap(map);

  });

  allButton.addEventListener("click", function(){
    shoalinMark.setMap(map);
    corktownMark.setMap(map);
    radiusMark.setMap(map);
    gageParkMark.setMap(map);
    boardgamecafeMark.setMap(map);
    keymastersMark.setMap(map);
    carnigieMark.setMap(map);
    aghMark.setMap(map);
    dundurnMark.setMap(map);
    elementsMark.setMap(map);

  });

  //set directions function draws directions from the users gathered location to a location they selected
  function setDir(location){

    directionsRender.setMap(map);
    //throws a error message if user has not put location on map yet
    try{
      if(selectType.value == "drive"){
        request = {
          origin: userLoc,
          destination: location,
          travelMode: "DRIVING"
        };
      }
      else{
        request = {
          origin: userLoc,
          destination: location,
          travelMode: "TRANSIT"
        };
      }
  }
  catch(err){
    alert("Add your location to the map first before requesting directions")
  }
      
        
      directionsService.route(request, function(result, status){

      if(status == "OK"){
        directionsRender.setDirections(result);
        console.log(result);
        }
      

      });
    }

    
    //calls setDir function with selected destinations location as the argument
    dirButton.addEventListener("click", function(){

      //if there are directions on the map already clear them off
      if (select.value == "gage"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(gageParkLoc);
      }
      else if (select.value == "dundurn"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(dundurnLoc);
      }
      else if (select.value == "agh"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(aghLoc);
      }
      else if (select.value == "carnigie"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(carnigieLoc);
      }
      else if (select.value == "shaolin"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(shoalinLoc);
      }
      else if (select.value == "radius"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(radiusLoc);
      }
      else if (select.value == "corktown"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(corktownLoc);
      }
      else if (select.value == "elements"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(elementsLoc);
      }
      else if (select.value == "keymasters"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(keymastersLoc);
      }
      else if (select.value == "boardgamecafe"){
        if(directionsRender != null){
          directionsRender.setMap(null)
        }
        setDir(boardgamecafeLoc);
      }
    });
}

geoButton.addEventListener("click", function(){

  getLocation();

});

addressButton.addEventListener("click", function(){
  getAddressLocation();
});





//geolocation api to get user location
function showPosition(position){
  console.log(position)
  userLoc = {lat: position.coords.latitude, lng: position.coords.longitude}
  userMark = new google.maps.Marker({
    map: map,
    position: userLoc,
    title: "Your Location"
  });
}

function getLocation(){

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

  } 
  else {
      
      console.log("Geolocation is not supported by this browser.");

      }
}

//uses geocoder to get an address specified by the user
function getAddressLocation(){
  geocoder = new google.maps.Geocoder();

  addr = document.getElementById("addr").value;
  console.log(addr)
  geocoder.geocode({address: addr},
  function(results, status){
    if (status == 'OK'){
      marker = new google.maps.Marker({
      map:map,
      position: results[0].geometry.location,
      title: "Location"
      })
    }
  });
  
}
