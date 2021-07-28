const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // FoV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Frustum near plane
    1000 // Frustum far plane
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Draw an ellipse curve
const curve = new THREE.EllipseCurve(
    0,
    0, // Center x, y
    50,
    50, // Radius x, y
    0,
    2 * Math.PI, // Angle start, end
    false, // Clockwise
    0 // Rotation
);
const points = curve.getPoints(360); // 360 points for 360 degrees
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({
    color: 0xffffff, // White
    linewidth: 2, // Deprecated?
});
const ellipse = new THREE.Line(geometry, material);
scene.add(ellipse);

function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();
