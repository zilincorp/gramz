if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, controls;
var camera, scene, renderer;
var clock = new THREE.Clock();

var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 100000 );
camera.position.set( 0, 550, 800 ); // x z y
      
scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );


var lightA = new THREE.AmbientLight( 0xffffff ); 
scene.add( lightA );

const light = new THREE.PointLight(0xffffff, 3);
light.position.set( 0, 0, 1 );
scene.add(light);

scene.fog = new THREE.Fog( 0x000000, 850, 1350 );




function init() {
  container = document.getElementById( 'webgl' );
  document.getElementById("map1").appendChild( container );
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );

};



document.addEventListener( 'mousemove', onDocumentMouseMove, false );
function onDocumentMouseMove( event ) {
        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );
      };

/* without shader, load model */
var loader = new THREE.FBXLoader();
loader.load( 'models/grumz-map.fbx', function ( object ) {
  scene.add( object );

  var element = scene.getObjectByName('homes');
  var element2 = scene.getObjectByName('point');
  var element3 = scene.getObjectByName('point-logo');
  var element4 = scene.getObjectByName('ship');

  function animatePoint() {
    requestAnimationFrame( animatePoint );    
    var t = Date.now() * 0.005;
    var ts = Math.cos( t ) * 0.1 ;  
    element2.position.y += ts * 2;
  }; animatePoint();



  var pointsPath = [
    new THREE.Vector3( 100, -23, -650),
    new THREE.Vector3( 150, -23, -550),  
    new THREE.Vector3( 200, -23, -400),
    new THREE.Vector3( 200, -23, 0),
    new THREE.Vector3( 205, -23, 300),
    new THREE.Vector3( 155, -23, 500)
  ];

  var spline = new THREE.SplineCurve3(pointsPath);


  var geometrySpl = new THREE.BufferGeometry().setFromPoints( pointsPath );
  var materialSpl = new THREE.LineBasicMaterial( { color : 0xff0000 } );
  var splineObject = new THREE.Line( geometrySpl, materialSpl );
  //scene.add(splineObject);



  var shipPosIndex = 1300;
  function update() {
    requestAnimationFrame(update);
    
    shipPosIndex++;
    if (shipPosIndex > 3000) {
      shipPosIndex = 0;
    }
    var element3Pos = spline.getPoint( shipPosIndex / 3000 );
    var element3Rot = spline.getTangent ( shipPosIndex / 3000 );

    element4.position.x = element3Pos.x;
    element4.position.y = element3Pos.y;
    element4.position.z = element3Pos.z;

    element4.rotation.z = element3Rot.x;

  }; update();

 var material = new THREE.MeshPhongMaterial( {
      color: 0x000000, 
      shading: THREE.FlatShading,
      polygonOffset: true,
      polygonOffsetFactor: 0, // positive value pushes polygon further away
      polygonOffsetUnits: 1
  } );

  var geo = new THREE.EdgesGeometry( element.geometry ); // or WireframeGeometry
  var mat = new THREE.LineBasicMaterial( { linewidth: 1, color: 0x555555 } );
  var wireframe = new THREE.LineSegments( geo, mat );
  element.material = material;
  element.add( wireframe );

  var material2 = new THREE.MeshPhongMaterial( {
      color: 0x151515, 
      shading: THREE.FlatShading,
      polygonOffset: true,
      polygonOffsetFactor: 0, // positive value pushes polygon further away
      polygonOffsetUnits: 1
  } );
  var geo2 = new THREE.EdgesGeometry( element2.geometry ); // or WireframeGeometry
  var mat2 = new THREE.LineBasicMaterial( { linewidth: 1, color: 0xffffff } );
  var wireframe2 = new THREE.LineSegments( geo2, mat2 );
  element2.material = material2;
  wireframe.computeLineDistances();
  wireframe2.computeLineDistances();
  element2.add( wireframe2 );

  var geo3 = new THREE.EdgesGeometry( element3.geometry ); // or WireframeGeometry
  var wireframe3 = new THREE.LineSegments( geo3, mat2 );
  element3.material = material2;
  element3.add( wireframe3 );

  var geo4 = new THREE.EdgesGeometry( element4.geometry );
  var wireframe4 = new THREE.LineSegments( geo4, mat );
  element4.material = material;
  element4.add( wireframe4 );
} );

function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
      };

function onDocumentMouseMove( event ) {
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
};


//
// function animate() {
//   requestAnimationFrame( animate );
//   render();
//   var t = Date.now() * 0.002;
//   var ts = Math.sin( t ) * 0.9 ;
//   light.power += ts;
// };
//


function animate() {

  //id = requestAnimationFrame( animate );
  if ( mobdev || mouseEntered === true) {
    console.log('in');
    render();
    var t = Date.now() * 0.002;
    var ts = Math.sin( t ) * 0.9 ;

    light.power += ts;
    id = requestAnimationFrame( animate );

  } else {
    cancelAnimationFrame(id);
  };
};




function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
var mobdev = isMobileDevice();


function render() {

  if (mobdev){
  window.addEventListener( "deviceorientation", function(event) {
    camera.position.x = event.gamma * 3;
    camera.position.y = event.beta * 2 + 300;
//    camera.position.x += ( event.gamma - camera.position.x ) * 0.003;
//    camera.position.y += ( event.beta - camera.position.y ) * 0.003;
  }, true);

  } else {

      camera.position.x += ( mouseX - camera.position.x ) * 0.03 ;
      camera.position.y += ( - mouseY - camera.position.y + 500 ) * ( mouseY > 0 ? 0 : 0.03 );
      if ( mouseY > 0 && camera.position.y > 80 ) {
        camera.position.y += ( - mouseY - camera.position.y + 500 ) *  0.03;
      };    
    }; 
  
  camera.lookAt( new THREE.Vector3(0,0,0) );
  renderer.render( scene, camera );
};



var id;

var mouseEntered;
document.querySelector('#contacts').addEventListener('mouseenter', function() {
  mouseEntered = true;

  requestAnimationFrame( animate );
})
document.querySelector('#contacts').addEventListener('mouseleave', function() {
  mouseEntered = false;
  //cancelAnimationFrame( id );
});



//
// var $win = $(window);
// var $marker = $('#map');
//
// //отслеживаем событие прокрутки страницы
// $win.scroll(function() {
//     //Складываем значение прокрутки страницы и высоту окна, этим мы получаем положение страницы относительно нижней границы окна, потом проверяем, если это значение больше, чем отступ нужного элемента от верха страницы, то значит элемент уже появился внизу окна, соответственно виден
//     if($win.scrollTop() + $win.height() >= $marker.offset().top) {
//
//       init();
//       animate();
//     }
// });


init();
animate();
