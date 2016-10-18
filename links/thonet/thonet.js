var container;
var camera;
var scene;
var geometry;
var material;
var mesh;
var renderer;

init();

function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 8000);
    //camera.position.z = 600;
    camera.position.set(0, 200, 500);
    camera.rotation.set(-0.2, 0, 0);
    controls = new THREE.OrbitControls(camera);

    scene = new THREE.Scene();
 
    //ライトの作成
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 0.2, 0.2);
    scene.add(directionalLight);


    //XYZ軸の表示
    //var axis = new THREE.AxisHelper(200);
    //scene.add(axis);

    //Grid
    var grid = new THREE.GridHelper(2000, 30);
    grid.position = new THREE.Vector3(0, 0, 0);
    grid.rotation = new THREE.Euler(0, 0, 0);
    scene.add(grid)



/*****************************************************
   Physical
 *****************************************************/


//@@@@@@@@@@@@@@@@@@@@@@@@@Server@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    geometry = new THREE.CubeGeometry(500, 50, 500, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x000033, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(0, 25, 0);
    scene.add(mesh);

    geometry = new THREE.CubeGeometry(500, 50, 500, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x000033, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(0, 25, -1200);
    scene.add(mesh);

    geometry = new THREE.CubeGeometry(500, 50, 500, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x000033, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(0, 25, -600);
    scene.add(mesh);



//@@@@@@@@@@@@@@@@@@@@@@@@@@Swich@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    geometry = new THREE.CubeGeometry(200, 50, 500, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x3366CC, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(800, 25, 0);
    scene.add(mesh);

    geometry = new THREE.CubeGeometry(30, 50, 60, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x3366CC, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(150, 50, 180);
    scene.add(mesh);

    geometry = new THREE.CubeGeometry(30, 50, 60, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x3366CC, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(150, 50, 100);
    scene.add(mesh);

//@@@@@@@@@@@@@@@@@@@Access Point@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    geometry = new THREE.CylinderGeometry(20, 100, 50, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x993333, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(800, 25, -500);
    scene.add(mesh);

//@@@@@@@@@@@@@@@@@@@Network Line@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    geometry = new THREE.CylinderGeometry(5, 5, 500, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(900, 25, 350);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 150, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(650, 25, 270);
    mesh.rotation.set(Math.PI/2, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 100, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(700, 25, 200);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 20, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(750, 25, 190);
    mesh.rotation.set(Math.PI/2, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 600, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(450, 25, 180);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 100, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(150, 75, 180);
    mesh.rotation.set(0, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 100, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(150, 75, 100);
    mesh.rotation.set(0, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 600, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(450, 25, 100);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 120, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(750, 25, 40);
    mesh.rotation.set(Math.PI/2, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 100, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(700, 25, -20);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 1000, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(650, 25, -520);
    mesh.rotation.set(Math.PI/2, 0, 0); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 600, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(450, 25, -480);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

    geometry = new THREE.CylinderGeometry(5, 5, 500, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xADFF2F
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(400, 25, -1010);
    mesh.rotation.set(0, 0, Math.PI/2); 
    scene.add(mesh);

/*****************************************************
   VM Instance
 *****************************************************/

    geometry = new THREE.SphereGeometry(50, 20, 20);
    material = new THREE.MeshBasicMaterial({
        color: 0xFF6633, wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.set(150, 140, 140);
    scene.add(mesh);



/*****************************************************
   Rendering
 *****************************************************/

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    (function renderLoop() {
            requestAnimationFrame(renderLoop);
            controls.update();
            renderer.render(scene, camera);
        })();

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
