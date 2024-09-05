const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const fishArray = [];
const numFish = 2;

class Fish {
    constructor() {
        this.bodyParticles = [];
        this.tailParticles = [];
        this.finParticles = [];

        this.numBodyParticles = 200;
        this.numTailParticles = 75;
        this.numFinParticles = 25;

        this.bodyRadiusX = 150;
        this.bodyRadiusY = 50;
        this.bodyRadiusZ = 50;

        this.tailLength = 150;
        this.tailWidth = 100;

        this.finLength = 120;
        this.finWidth = 50;
        
        this.centerX = Math.random() * canvas.width;
        this.centerY = Math.random() * canvas.height;

        this.velocityX = (Math.random() - 0.5);
        this.velocityY = (Math.random() - 0.5);
        this.direction = 1;

        this.createBody();
        this.createTail();
        this.createTopFin();
        this.createBottomFin();
    }

    createBody() {
        for (let i = 0; i < this.numBodyParticles; i++) {
            const theta = (i / this.numBodyParticles) * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            this.bodyParticles.push({
                x: this.centerX + this.bodyRadiusX * Math.sin(phi) * Math.cos(theta),
                y: this.centerY + this.bodyRadiusY * Math.sin(phi) * Math.sin(theta),
                z: this.bodyRadiusZ * Math.cos(phi),
                center: {x: this.centerX, y: this.centerY}
            });
        }
    }

    createTopFin() {
        const finBaseX = this.centerX - this.bodyRadiusX * 0.5;
        const finBaseY = this.centerY - this.bodyRadiusY;
    
        const controlPoints = [
            { x: finBaseX, y: finBaseY, offsetX: 0, offsetY: 0 },
            { x: finBaseX + this.finLength * 0.2, y: finBaseY, offsetX: 0.05, offsetY: -0.1 },
            { x: finBaseX + this.finLength * 0.2, y: finBaseY - this.finWidth * 0.3, offsetX: 0.05, offsetY: -0.1 },
            { x: finBaseX + this.finLength * 0.4, y: finBaseY - this.finWidth * 0.15, offsetX: 0.1, offsetY: -0.2 },
            { x: finBaseX + this.finLength * 0.4, y: finBaseY - this.finWidth * 0.6, offsetX: 0.1, offsetY: -0.25 },
            { x: finBaseX + this.finLength * 0.6, y: finBaseY - this.finWidth * 0.3, offsetX: 0.125, offsetY: -0.3 },
            { x: finBaseX + this.finLength * 0.6, y: finBaseY - this.finWidth * 0.8, offsetX: 0.125, offsetY: -0.35 },
            { x: finBaseX + this.finLength * 0.8, y: finBaseY - this.finWidth * 0.45, offsetX: 0.15, offsetY: -0.4 },
            { x: finBaseX + this.finLength * 0.8, y: finBaseY - this.finWidth * 0.9, offsetX: 0.15, offsetY: -0.45 },
            { x: finBaseX + this.finLength, y: finBaseY - this.finWidth, offsetX: 0.2, offsetY: 0 },
        ];

    
        for (let i = 0; i < this.numFinParticles; i++) {
            const t = i / (this.numFinParticles - 1);
            const cpIndex = Math.min(Math.floor(t * (controlPoints.length - 1)), controlPoints.length - 2);
            const cp1 = controlPoints[cpIndex];
            const cp2 = controlPoints[cpIndex + 1];
    
            const IT = (t * (controlPoints.length - 1)) - cpIndex;
    
            const x = cp1.x + (cp2.x - cp1.x) * IT + (Math.random() - 0.5) * this.finWidth * 0.1;
            const y = cp1.y + (cp2.y - cp1.y) * IT + (Math.random() - 0.5) * this.finWidth * 0.1;
    
            this.finParticles.push({
                x: x + cp1.offsetX * Math.sin(t * Math.PI),
                y: y + cp1.offsetY * Math.sin(t * Math.PI),
                z: Math.random() * this.finLength / 10,
                center: {x: this.centerX, y: this.centerY}
            });
        }
    }
    
    createBottomFin() {
        const finBaseX = this.centerX - this.bodyRadiusX * 0.5;
        const finBaseY = this.centerY + this.bodyRadiusY;
    
        const controlPoints = [
            { x: finBaseX, y: finBaseY, offsetX: 0, offsetY: 0 },
            { x: finBaseX + this.finLength * 0.2, y: finBaseY, offsetX: 0.05, offsetY: 0.1 },
            { x: finBaseX + this.finLength * 0.2, y: finBaseY + this.finWidth * 0.3, offsetX: 0.05, offsetY: 0.1 },
            { x: finBaseX + this.finLength * 0.4, y: finBaseY + this.finWidth * 0.15, offsetX: 0.1, offsetY: 0.2 },
            { x: finBaseX + this.finLength * 0.4, y: finBaseY + this.finWidth * 0.6, offsetX: 0.1, offsetY: 0.25 },
            { x: finBaseX + this.finLength * 0.6, y: finBaseY + this.finWidth * 0.3, offsetX: 0.125, offsetY: 0.3 },
            { x: finBaseX + this.finLength * 0.6, y: finBaseY + this.finWidth * 0.8, offsetX: 0.125, offsetY: 0.35 },
            { x: finBaseX + this.finLength * 0.8, y: finBaseY + this.finWidth * 0.45, offsetX: 0.15, offsetY: 0.4 },
            { x: finBaseX + this.finLength * 0.8, y: finBaseY + this.finWidth * 0.9, offsetX: 0.15, offsetY: 0.45 },
            { x: finBaseX + this.finLength, y: finBaseY + this.finWidth, offsetX: 0.2, offsetY: 0 },
        ];
    
        for (let i = 0; i < this.numFinParticles; i++) {
            const t = i / (this.numFinParticles - 1);
            const cpIndex = Math.min(Math.floor(t * (controlPoints.length - 1)), controlPoints.length - 2);
            const cp1 = controlPoints[cpIndex];
            const cp2 = controlPoints[cpIndex + 1];
    
            const IT = (t * (controlPoints.length - 1)) - cpIndex;
    
            const x = cp1.x + (cp2.x - cp1.x) * IT + (Math.random() - 0.5) * this.finWidth * 0.1;
            const y = cp1.y + (cp2.y - cp1.y) * IT + (Math.random() - 0.5) * this.finWidth * 0.1;
    
            this.finParticles.push({
                x: x + cp1.offsetX * Math.sin(t * Math.PI),
                y: y + cp1.offsetY * Math.sin(t * Math.PI),
                z: Math.random() * this.finLength / 10,
                center: {x: this.centerX, y: this.centerY}
            });
        }
    }

    createTail() {
        const tailBaseX = this.centerX + this.bodyRadiusX;
        const tailBaseY = this.centerY;
    
        const controlPoints = [
            { x: tailBaseX, y: tailBaseY + this.tailWidth * 0.1, offsetX: 0, offsetY: 0 },
            { x: tailBaseX, y: tailBaseY - this.tailWidth * 0.1, offsetX: 0, offsetY: 0 },
        
            { x: tailBaseX + this.tailLength * 0.15, y: tailBaseY, offsetX: 0.05, offsetY: -0.1 },
            { x: tailBaseX + this.tailLength * 0.15, y: tailBaseY - this.tailWidth * 0.3, offsetX: 0.05, offsetY: -0.15 },
            { x: tailBaseX + this.tailLength * 0.15, y: tailBaseY + this.tailWidth * 0.3, offsetX: 0.05, offsetY: 0.15 },
        
            { x: tailBaseX + this.tailLength * 0.3, y: tailBaseY - this.tailWidth * 0.15, offsetX: 0.1, offsetY: -0.2 },
            { x: tailBaseX + this.tailLength * 0.3, y: tailBaseY - this.tailWidth * 0.45, offsetX: 0.1, offsetY: -0.25 },
            { x: tailBaseX + this.tailLength * 0.3, y: tailBaseY + this.tailWidth * 0.15, offsetX: 0.1, offsetY: 0.2 },
            { x: tailBaseX + this.tailLength * 0.3, y: tailBaseY + this.tailWidth * 0.45, offsetX: 0.1, offsetY: 0.25 },
        
            { x: tailBaseX + this.tailLength * 0.45, y: tailBaseY, offsetX: 0.15, offsetY: 0 },
            { x: tailBaseX + this.tailLength * 0.45, y: tailBaseY - this.tailWidth * 0.6, offsetX: 0.15, offsetY: -0.3 },
            { x: tailBaseX + this.tailLength * 0.45, y: tailBaseY - this.tailWidth * 0.3, offsetX: 0.15, offsetY: -0.2 },
            { x: tailBaseX + this.tailLength * 0.45, y: tailBaseY + this.tailWidth * 0.6, offsetX: 0.15, offsetY: 0.3 },
            { x: tailBaseX + this.tailLength * 0.45, y: tailBaseY + this.tailWidth * 0.3, offsetX: 0.15, offsetY: 0.2 },
        
            { x: tailBaseX + this.tailLength * 0.6, y: tailBaseY, offsetX: 0.2, offsetY: 0 },
            { x: tailBaseX + this.tailLength * 0.6, y: tailBaseY - this.tailWidth * 0.75, offsetX: 0.2, offsetY: -0.35 },
            { x: tailBaseX + this.tailLength * 0.6, y: tailBaseY - this.tailWidth * 0.45, offsetX: 0.2, offsetY: -0.25 },
            { x: tailBaseX + this.tailLength * 0.6, y: tailBaseY + this.tailWidth * 0.75, offsetX: 0.2, offsetY: 0.35 },
            { x: tailBaseX + this.tailLength * 0.6, y: tailBaseY + this.tailWidth * 0.45, offsetX: 0.2, offsetY: 0.25 },
        
            { x: tailBaseX + this.tailLength * 0.75, y: tailBaseY - this.tailWidth * 0.9, offsetX: 0.25, offsetY: -0.4 },
            { x: tailBaseX + this.tailLength * 0.75, y: tailBaseY - this.tailWidth * 0.45, offsetX: 0.25, offsetY: -0.4 },
            { x: tailBaseX + this.tailLength * 0.75, y: tailBaseY + this.tailWidth * 0.9, offsetX: 0.25, offsetY: 0.4 },
            { x: tailBaseX + this.tailLength * 0.75, y: tailBaseY + this.tailWidth * 0.45, offsetX: 0.25, offsetY: 0.4 },
        
            { x: tailBaseX + this.tailLength, y: tailBaseY - this.tailWidth * 0.75, offsetX: 0.3, offsetY: 0 },
            { x: tailBaseX + this.tailLength, y: tailBaseY + this.tailWidth * 0.75, offsetX: 0.3, offsetY: 0 },
        ];

        for (let i = 0; i < this.numTailParticles; i++) {
            const t = i / (this.numTailParticles - 1);
            const cpIndex = Math.min(Math.floor(t * (controlPoints.length - 1)), controlPoints.length - 2);
            const cp1 = controlPoints[cpIndex];
            const cp2 = controlPoints[cpIndex + 1];
    
            const IT = (t * (controlPoints.length - 1)) - cpIndex;
    
            const x = cp1.x + (cp2.x - cp1.x) * IT + (Math.random() - 0.5) * this.tailWidth * 0.1;
            const y = cp1.y + (cp2.y - cp1.y) * IT + (Math.random() - 0.5) * this.tailWidth * 0.1;
    
            this.tailParticles.push({
                x: x + cp1.offsetX * Math.sin(t * Math.PI),
                y: y + cp1.offsetY * Math.sin(t * Math.PI),
                z: Math.random() * this.tailLength / 10,
                center: {x: this.centerX, y: this.centerY}
            });
        }
    }    

    project(p) {
        const scale = 400 / (400 + p.z);
        return {
            x: p.x * scale + (p.center.x * (1 - scale)),
            y: p.y * scale + (p.center.y * (1 - scale)),
        };
    }

    drawParticles(particles) {
        particles.forEach(p => {
            const projected = this.project(p);
            ctx.beginPath();
            ctx.arc(projected.x, projected.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawConnections(particles) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dz = particles[i].z - particles[j].z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distance < 30) {
                    const p1 = this.project(particles[i]);
                    const p2 = this.project(particles[j]);
                    ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 30})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    update () {
        this.centerX += this.velocityX;
        this.centerY += this.velocityY;

        this.bodyParticles.forEach(p => {
            p.center.x = this.centerX;
            p.center.y = this.centerY;
            p.x += this.velocityX;
            p.y += this.velocityY;
        });

        this.tailParticles.forEach(p => {
            p.center.x = this.centerX;
            p.center.y = this.centerY;
            p.x += this.velocityX;
            p.y += this.velocityY;
        });

        this.finParticles.forEach(p => {
            p.center.x = this.centerX;
            p.center.y = this.centerY;
            p.x += this.velocityX;
            p.y += this.velocityY;
        });

        if (this.centerX > canvas.width) {
            this.velocityX *= -1;
            this.direction = -1;
        } else if (this.centerX < 0) {
            this.velocityX *= -1;
            this.direction = 1;
        }

        if (this.centerY < 0 || this.centerY > canvas.height) this.velocityY *= -1;
    }

    render() {
        this.drawParticles(this.bodyParticles);
        this.drawParticles(this.tailParticles);
        this.drawParticles(this.finParticles);

        this.drawConnections(this.bodyParticles);
        this.drawConnections(this.tailParticles);
        this.drawConnections(this.finParticles);
    }
}

function init (){
    for (let i = 0; i < numFish; i++) {
        fishArray.push(new Fish());
        fishArray[i].render();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numFish; i++) {
        fishArray[i].update();
        fishArray[i].render();
    }
    requestAnimationFrame(animate);
}

init();
animate();