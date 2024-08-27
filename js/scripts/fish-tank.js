const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const fishArray = [];
const numFish = 1;

class Fish {
    constructor() {
        this.particles = [];
        this.tailParticles = [];
        this.numParticles = 200;
        this.radiusX = 150;
        this.radiusY = 50;
        this.radiusZ = 50;
        this.tailLength = 120;
        this.tailWidth = 80;
        this.angleX = 0;
        this.angleY = 0;
        // this.centerX = Math.random() * canvas.width;
        this.centerX = canvas.width / 2;
        // this.centerY = Math.random() * canvas.height;
        this.centerY = canvas.height / 2;

        this.createBody();
        this.createTail();
        this.drawParticles();
        this.drawConnections();
        this.drawTail();
    }

    createBody() {
        for (let i = 0; i < this.numParticles; i++) {
            const theta = (i / this.numParticles) * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            this.particles.push({
                x: this.centerX + this.radiusX * Math.sin(phi) * Math.cos(theta),
                y: this.centerY + this.radiusY * Math.sin(phi) * Math.sin(theta),
                z: this.radiusZ * Math.cos(phi),
            });
        }
    }

    createTail() {
        const tailBaseX = this.centerX + this.radiusX;
        const tailBaseY = this.centerY;

        this.tailParticles.push({ x: tailBaseX, y: tailBaseY - 8, z: 0 });

        this.tailParticles.push({
            x: tailBaseX + this.tailLength * 0.7,
            y: tailBaseY - this.tailWidth * 0.7,
            z: 0
        });

        this.tailParticles.push({
            x: tailBaseX + this.tailLength,
            y: tailBaseY - this.tailWidth * 0.5,
            z: 0
        });

        this.tailParticles.push({
            x: tailBaseX + this.tailLength * 0.9,
            y: tailBaseY,
            z: 0
        });

        this.tailParticles.push({
            x: tailBaseX + this.tailLength,
            y: tailBaseY + this.tailWidth * 0.5,
            z: 0
        });

        this.tailParticles.push({
            x: tailBaseX + this.tailLength * 0.7,
            y: tailBaseY + this.tailWidth * 0.7,
            z: 0
        });

        this.tailParticles.push({ x: tailBaseX, y: tailBaseY + 8, z: 0 });
    }

    project(p) {
        const scale = 400 / (400 + p.z);
        return {
            x: p.x * scale + (this.centerX * (1 - scale)),
            y: p.y * scale + (this.centerY * (1 - scale)),
        };
    }

    drawParticles() {
        this.particles.forEach(p => {
            const projected = this.project(p);
            ctx.beginPath();
            ctx.arc(projected.x, projected.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dz = this.particles[i].z - this.particles[j].z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distance < 30) {
                    const p1 = this.project(this.particles[i]);
                    const p2 = this.project(this.particles[j]);
                    ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 30})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    drawTail() {
        ctx.beginPath();
        this.tailParticles.forEach((p, i) => {
            const projected = this.project(p);
            if (i === 0) {
                ctx.moveTo(projected.x, projected.y);
            } else {
                ctx.lineTo(projected.x, projected.y);
            }
        });
        ctx.closePath();
        ctx.stroke();
    }
}

function init(){
    for (let i = 0; i < numFish; i++) {
        fishArray.push(new Fish());
    }
}

init();