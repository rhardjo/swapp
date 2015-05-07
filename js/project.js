//Global Variables
// Image Array
var indexTop = 2;
var indexMid = 1;
var indexBot = 0;
// Countdown Timer
CountDownTimer('02/19/2012 10:1 AM', 'countdown');
CountDownTimer('05/07/2016 10:1 AM', 'newcountdown');

function loadScript() {
// Load everything
	document.addEventListener('deviceready', onDeviceReady, false);
//  onDeviceReady();
};

// When device is ready
function onDeviceReady() {
  // click is gebruikt in plaats van onTouch omdat click zowel werkt op mobiel en internet browser.
  document.getElementById('btnHome').addEventListener('click',  homeShow, false);
  document.getElementById('btnMaps').addEventListener('click',  mapsShow, false);
  document.getElementById('btnCamera').addEventListener('click',  cameraShow, false);
  document.getElementById('btnInlog').addEventListener('click',  homeShow, false);
  navbarShow();
}

function navbarShow() {
  if (document.getElementById('login').className=='show') {
    document.getElementById('iconbar').className='icon-bar three-up hide';
  } else {
    document.getElementById('iconbar').className='icon-bar three-up show';
  };
}

// Page navigation
function homeShow() {
  document.getElementById('login').className='hide';
  document.getElementById('home').className='show';
  document.getElementById('maps').className='hide';
  document.getElementById('camera').className='hide';
  document.getElementById('camera2').className="hide";
  document.getElementById('btnHome').className = 'item btnActive';
  document.getElementById('btnMaps').className = 'item btnInactive';
  document.getElementById('btnCamera').className = 'item btnInactive';
  navbarShow();
};
function mapsShow() {
  document.getElementById('home').className='hide';
  document.getElementById('maps').className='show';
  document.getElementById('camera').className='hide';
  document.getElementById('camera2').className="hide";
  document.getElementById('btnHome').className = 'item btnInactive';
  document.getElementById('btnMaps').className = 'item btnActive';
  document.getElementById('btnCamera').className = 'item btnInactive';
  document.getElementById('btnGetPos').addEventListener('click', getPosition, false);
  document.getElementById('img-map').className = "show";
};
function cameraShow() {
  document.getElementById('home').className='hide';
  document.getElementById('maps').className='hide';
  document.getElementById('camera').className='show';
  document.getElementById('camera2').className="hide";
  document.getElementById('btnHome').className = 'item btnInactive';
  document.getElementById('btnMaps').className = 'item btnInactive';
  document.getElementById('btnCamera').className = 'item btnActive';
  document.getElementById('iconbar').className='icon-bar three-up show';
  var getEmotion = document.getElementsByClassName('emotion-radio');
  for(var i=0;i<getEmotion.length;i++){
        getEmotion[i].addEventListener('click', ChooseEmotion, false);
    }
  document.getElementById('btnCamera2').addEventListener('click', camera2Show, false);
};
function camera2Show() {
  document.getElementById('iconbar').className='hide';
  document.getElementById('home').className='hide';
  document.getElementById('maps').className='hide';
  document.getElementById('camera').className='hide';
  document.getElementById('camera2').className="show";
  document.getElementById('btnCapture').addEventListener('click', capturePhoto, false);
  document.getElementById('backButton').addEventListener('click',  cameraShow, false);
  var top = document.getElementById('image-top');
  var mid = document.getElementById('image-mid');
  var bot = document.getElementById('image-bot');
  top.addEventListener('click', nextTop, false );
  mid.addEventListener('click', nextMid, false );
  bot.addEventListener('click', nextBot, false );
};

// ***Plugins***
function CountDownTimer(dt, id)
{
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'Begonnen!';
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ' dagen ';
        document.getElementById(id).innerHTML += hours + ' uur ';
        document.getElementById(id).innerHTML += minutes + ' min. ';
        document.getElementById(id).innerHTML += seconds + ' sec.';
    }
    timer = setInterval(showRemaining, 1000);
}

// Emoticons
function ChooseEmotion() {
  var emote_icon = document.getElementById('emotionIcon');
  var emote_value = document.querySelector('input[name="emotion"]:checked').value;
  document.getElementById('emotionText').innerHTML = emote_value;
  emote_icon.src = "svg/" + emote_value +".svg";
}
function cameraNextPage(){
  var emote_icon = document.getElementById('emotionIcon');
  var emote_value = document.querySelector('input[name="emotion"]:checked').value;
  if (emote_value.checked == checked){
    document.getElementById('btnCamera2').addEventListener('click', camera2Show, false);
  } else {
    alert("Geen emotie gekozen!");
  }
}

// Geolocation Plugin
function getPosition() {
  navigator.geolocation.getCurrentPosition(posSuccess, posFail);
  document.getElementById('img-map').className = "hide";
}
function posSuccess(position) {
  // Fetch coordinates
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude;
  document.getElementById('lat').innerHTML = myLat;
  document.getElementById('long').innerHTML = myLong;
  
  // Random locations
//  var locations = [
//    ['<h4>Activiteit 1</h4>', 51.686271, 5.288196],
//    ['<h4>Activiteit 2</h4>', 51.686191, 5.289269],
//    ['<h4>Activiteit 3</h4>', 51.687016, 5.289999],
//    ['<h4>Activiteit 4</h4>', 51.685646, 5.288475],
//    ['<h4>Activiteit 5</h4>', 51.689716, 5.288110],
//    ['<h4>Activiteit 6</h4>', 51.688426, 5.290728],
//    ['<h4>Activiteit 7</h4>', 51.689251, 5.291222],
//    ['<h4>Activiteit 8</h4>', 51.688572, 5.291887],
//    ['<h4>Activiteit 9</h4>', 51.689118, 5.287660],
//    ['<h4>Activiteit 10</h4>', 51.685752, 5.289097],
//    ['<h4>Activiteit 11</h4>', 51.685712, 5.287595],
//    ['<h4>Activiteit 12</h4>', 51.687641, 5.289570],
//    ['<h4>Activiteit 13</h4>', 51.691273, 5.288990],
//    ['<h4>Activiteit 14</h4>', 51.701401, 5.288355],
//    ['<h4>Activiteit 15</h4>', 51.702299, 5.286198],
//    ['<h4>Activiteit 16</h4>', 51.703336, 5.287711],
//    ['<h4>Activiteit 17</h4>', 51.701122, 5.286338],
//    ['<h4>Activiteit 18</h4>', 51.701693, 5.290651],
//    ['<h4>Activiteit 19</h4>', 51.703349, 5.286284],
//    ['<h4>Activiteit 20</h4>', 51.702864, 5.284492],
//    ['<h4>Activiteit 21</h4>', 51.702332, 5.284321],
//    ['<h4>Activiteit 22</h4>', 51.703622, 5.284879],
//    ['<h4>Activiteit 23</h4>', 51.701421, 5.291262],
//  ];
  
//  // Set up icons
//  var iconURLPrefix = 'svg/';
//  
//  var icons = [
//      'svg/bang.svg',
//      'svg/blij.svg',
//      'svg/boos.svg',
//      'svg/gelukkig.svg',
//      'svg/jaloers.svg',
//      'svg/ongelukkig.svg',      
//      'svg/verbaasd.svg',
//      'svg/verdrietig.svg',
//      'svg/verveeld.svg'
//    ]
//    var icons_length = icons.length;
  
  // Show coordinates on a map
  var coords = new google.maps.LatLng(myLat, myLong);
  
  // Setting up the google map
  var mapOptions = {
    zoom: 16,
    center: coords,
  };
  
  // Show the map
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
}
function posFail() {
  document.getElementById('lat').innerHTML = "It didn't work, co-ordinates not available!";
}

function capturePhoto() {
//  // Camera settings
  var options = {
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    correctOrientation: true, // Dont make the photo turn 90 degrees
    cameraDirection: 1, //Use the front facing camera
  };
  navigator.camera.getPicture(onSucces,onFail,options);
}
function onSucces(imageData) {
  canvas = document.createElement('canvas'); // In memory canvas
  ctx    = canvas.getContext("2d");
  parts  = [];                               // to push into oud base64 strings
  img    = new Image();
  img.src = "data:image/jpeg;base64," + imageData;
  
  img.onload = split_3;
  
}
function onFail(message) {
  navigator.notification.alert(
      'Your Photo has failed to upload',
      showAlert,
      'Photo Not Uploaded',
      'OK'
      );
}
function showAlert() {
  //callback function
}

function split_3(){ //
  var w2 = img.width, 
      h2 = img.height / 3; 

  for(var i=0; i<3; i++){
    
    var x = 0, y=0;
      if((h2*i)<h2){y=0;}
      if((h2*i)==h2){y=-h2;}
      if((h2*i)>h2){y=-h2*2;}

    canvas.width  = w2;
    canvas.height = h2;

    ctx.drawImage(this, x, y, w2, h2*3); // img, x, y, w, h
    parts.unshift( canvas.toDataURL() );     // ("image/jpeg") for jpeg
    
    var top = document.getElementById('image-top');
    top.src = parts[indexTop];
    var mid = document.getElementById('image-mid');
    mid.src = parts[indexMid];
    var bot = document.getElementById('image-bot');
    bot.src = parts[indexBot];

  };
    navigator.notification.alert(
      'Druk op een deel van het gezicht om te wisselen',  // message
      showAlert,                           // callback
      'Gesliced!',              // title
      'OK'                          // buttonName
  );
  parts.push("img/mouth1.jpg");
    parts.push("img/nose1.jpg");
    parts.push("img/eyes1.jpg");
    parts.push("img/mouth2.jpg");
    parts.push("img/nose2.jpg");
    parts.push("img/eyes2.jpg");
    parts.push("img/mouth3.jpg");
    parts.push("img/nose3.jpg");
    parts.push("img/eyes3.jpg");
    parts.push("img/mouth4.jpg");
    parts.push("img/nose4.jpg");
    parts.push("img/eyes4.jpg");
};

function nextTop() {
  var top = document.getElementById('image-top');
  top.src = parts[indexTop];
  indexTop+=3;
  if (indexTop > parts.length) {
    indexTop = 2;
  };
}
function nextMid() {
  var mid = document.getElementById('image-mid');
  mid.src = parts[indexMid];
  indexMid+=3;
  if (indexMid > parts.length) {
    indexMid = 1;
  };
}
function nextBot() {
  var bot = document.getElementById('image-bot');
  bot.src = parts[indexBot];
  indexBot+=3;
  if (indexBot >= parts.length) {
    indexBot = 0;
  };
}