const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const radius = 200;
const numParticles = 400;
let particles = [];


function init() {
    particles = [];    
    for (let i = 0; i < numParticles; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        particles.push({
            x: radius * Math.sin(phi) * Math.cos(theta),
            y: radius * Math.sin(phi) * Math.sin(theta),
            z: radius * Math.cos(phi),
        });
    }
}

function project(p) {
    const scale = 400 / (400 + p.z);
    return {
      x: p.x * scale + canvas.width / 2,
      y: p.y * scale + canvas.height / 2,
    };
}

function rotateParticles(angleX, angleY) {
    particles.forEach(p => {
        let x = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);
        p.x = x;
        p.z = z;

        let y = p.y * Math.cos(angleX) - p.z * Math.sin(angleX);
        z = p.z * Math.cos(angleX) + p.y * Math.sin(angleX);
        p.y = y;
        p.z = z;
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      const projected = project(p);
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dz = particles[i].z - particles[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 50) {  // Adjust the threshold as needed
          const p1 = project(particles[i]);
          const p2 = project(particles[j]);
          ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 50})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
}

function animate() {
    rotateParticles(0.001, 0.001);
    drawParticles();
    drawConnections();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

init();
animate();