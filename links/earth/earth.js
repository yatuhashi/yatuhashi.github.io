var container;
var camera;
var scene;
var geometry;
var material;
var mesh;
var renderer;

init();
animate();

function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 600;

    scene = new THREE.Scene();
    geometry = new THREE.SphereGeometry(150, 30, 30);
    material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('earth.png')
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    mesh.rotation.y += 0.008;
    mesh.rotation.x += 0.008;
    renderer.render(scene, camera);
}


function clock() {
var myDay = new Array("日","月","火","水","木","金","土");
var now  = new Date();
var year = now.getFullYear(); // 年
var month = now.getMonth()+1; // 月
var date = now.getDate(); // 日
var day = now.getDay();
var hour = now.getHours(); // 時
var min  = now.getMinutes(); // 分
var sec  = now.getSeconds(); // 秒
var mili = now.getMilliseconds()

if(hour < 10) { hour = "0" + hour; }
if(min < 10) { min = "0" + min; }
if(sec < 10) { sec = "0" + sec; }

mili = String(mili).slice(0,1)

// フォーマット①
var clock1 = hour + ':' + min + ':' + sec + ':' +mili;
document . getElementById( 'clock-01' ) . innerHTML= clock1 . toLocaleString(); // div id="clock-01"

// 1000ミリ秒ごとに処理を実効
window . setTimeout( "clock()", 100);
}
window . onload = clock;
