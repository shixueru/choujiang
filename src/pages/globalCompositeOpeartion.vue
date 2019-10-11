<template>
    <div>
        <canvas ref="canvas"  width="375" height="250"></canvas>
    </div>
</template>

<script>

export default {
    name: 'globalCompositeOpeartion',
    data() {
        return {
            radius: 30,
            drawing: false
        };
    },
    methods: {
        getBoundingClientRect(canvas, x, y) {
            const box = canvas.getBoundingClientRect();
            console.log(box);
            return {
                x: x - box.left,
                y: y - box.top
            }
        }
    },
    mounted() {
        const canvas = this.$refs.canvas;
        console.log(canvas);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00aeff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.lineWidth = this.radius;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalCompositeOperation = 'destination-out';


        canvas.addEventListener('touchstart', (e) => {
            console.log(e);
            const fristPosition = this.getBoundingClientRect(canvas, e.touches[0].clientX, e.touches[0].clientY);
            console.log(fristPosition);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(fristPosition.x, fristPosition.y);
            this.drawing = true;
        });
        canvas.addEventListener('touchmove', (e) => {
            console.log(e);
            if (this.drawing) {
                const move = this.getBoundingClientRect(canvas, e.touches[0].clientX, e.touches[0].clientY);
                console.log(move);
                ctx.save();
                ctx.lineTo(move.x, move.y);
                ctx.stroke();
                ctx.restore();
            }
        });
        canvas.addEventListener('touchend', () => {
            this.drawing = false;
        });
    }
};
</script>
<style scope>
    canvas{
        display: block; 
        background:url(http://img0.imgtn.bdimg.com/it/u=73478915,3193482595&fm=21&gp=0.jpg) no-repeat;
        background-size:100% 100%;
        margin:50px auto;
        display:block;
    }
</style>

