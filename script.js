/* ==================================================
   MÀN HÌNH MỞ ĐẦU
================================================== */
const introScreen =
    document.getElementById("introScreen");
const mainContent =
    document.getElementById("mainContent");
const enterButton =
    document.getElementById("enterButton");
enterButton.addEventListener(
    "click",
    () => {
        introScreen.classList.add("hide");
        mainContent.classList.add("show");
        /*
           Bắt đầu hiệu ứng trái tim
           sau khi mở trang.
        */
        setTimeout(() => {
            resize();
            requestAnimationFrame(
                animate
            );
        }, 400);
    }
);
/* ==================================================
   CANVAS
================================================== */
const canvas =
    document.getElementById(
        "heartCanvas"
    );
const ctx =
    canvas.getContext("2d");
let hearts = [];
let particles = [];
let W = window.innerWidth;
let H = window.innerHeight;
let dpr =
    Math.min(
        window.devicePixelRatio || 1,
        2
    );
/* ==================================================
   RESIZE
================================================== */
function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width =
        W * dpr;
    canvas.height =
        H * dpr;
    canvas.style.width =
        W + "px";
    canvas.style.height =
        H + "px";
    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );
    createHearts();
    createParticles();
}
/* ==================================================
   TẠO TRÁI TIM
================================================== */
function createHearts() {
    hearts = [];
    const mobile =
        W < 600;
    const scale =
        Math.min(W, H) /
        (mobile ? 35 : 32);
    /*
       Số lượng trái tim.
       Mobile:
       5000
       PC:
       8000
    */
    const amount =
        mobile
            ? 5000
            : 8000;
    for (
        let i = 0;
        i < amount;
        i++
    ) {
        const x =
            Math.random() * 32 - 16;
        const y =
            Math.random() * 30 - 15;
        const yy = -y;
        const equation =
            Math.pow(
                x * x +
                yy * yy -
                1,
                3
            )
            -
            x * x *
            Math.pow(
                yy,
                3
            );
        if (
            equation <= 0
        ) {
            const distance =
                Math.sqrt(
                    x * x +
                    y * y
                );
            /*
               Chừa vùng trung tâm
               cho chữ.
            */
            if (
                distance < 4.8
            ) {
                continue;
            }
            const stagger =
                Math.random() > 0.5
                    ? 0.22
                    : -0.22;
            hearts.push({
                baseX:
                    W / 2 +
                    x * scale +
                    stagger *
                    scale,
                baseY:
                    H / 2 +
                    y * scale,
                size:
                    Math.random() *
                    3.2 + 3.8,
                rotation:
                    Math.random() *
                    Math.PI * 2,
                phase:
                    Math.random() *
                    Math.PI * 2,
                hue:
                    Math.random() *
                    25 + 340
            });
        }
    }
}
/* ==================================================
   VẼ TRÁI TIM
================================================== */
function drawHeart(
    x,
    y,
    size,
    rotation,
    color,
    glow
) {
    ctx.save();
    ctx.translate(
        x,
        y
    );
    ctx.rotate(
        rotation
    );
    ctx.beginPath();
    ctx.moveTo(
        0,
        size * 0.35
    );
    ctx.bezierCurveTo(
        -size * 1.2,
        -size * 0.35,
        -size * 0.65,
        -size * 1.1,
        0,
        -size * 0.45
    );
    ctx.bezierCurveTo(
        size * 0.65,
        -size * 1.1,
        size * 1.2,
        -size * 0.35,
        0,
        size * 0.35
    );
    ctx.shadowBlur =
        glow;
    ctx.shadowColor =
        color;
    const gradient =
        ctx.createLinearGradient(
            -size,
            -size,
            size,
            size
        );
    gradient.addColorStop(
        0,
        "#ffffff"
    );
    gradient.addColorStop(
        0.25,
        color
    );
    gradient.addColorStop(
        1,
        "#c90065"
    );
    ctx.fillStyle =
        gradient;
    ctx.fill();
    ctx.restore();
}
/* ==================================================
   HẠT SÁNG
================================================== */
function createParticles() {
    particles = [];
    const amount =
        W < 600
            ? 70
            : 120;
    for (
        let i = 0;
        i < amount;
        i++
    ) {
        particles.push({
            x:
                Math.random() * W,
            y:
                Math.random() * H,
            size:
                Math.random() *
                2 + 0.5,
            speed:
                Math.random() *
                0.5 + 0.15,
            phase:
                Math.random() *
                Math.PI * 2
        });
    }
}
/* ==================================================
   ANIMATION
================================================== */
function animate(time) {
    ctx.clearRect(
        0,
        0,
        W,
        H
    );
    /* =========================
       HẠT SÁNG
    ========================= */
    particles.forEach(
        p => {
            p.phase += 0.02;
            p.y -= p.speed;
            if (
                p.y < -10
            ) {
                p.y =
                    H + 10;
            }
            const alpha =
                0.2 +
                Math.sin(
                    p.phase
                ) * 0.35;
            ctx.beginPath();
            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );
            ctx.fillStyle =
                `rgba(
                    255,
                    120,
                    200,
                    ${alpha}
                )`;
            ctx.shadowBlur =
                12;
            ctx.shadowColor =
                "#ff2f9d";
            ctx.fill();
        }
    );
    /* =========================
       TRÁI TIM
    ========================= */
    hearts.forEach(
        h => {
            const floating =
                Math.sin(
                    time * 0.0015 +
                    h.phase
                ) * 2;
            const pulse =
                1 +
                Math.sin(
                    time * 0.002 +
                    h.phase
                ) * 0.12;
            const wave =
                Math.sin(
                    time * 0.0008 +
                    h.phase
                ) * 2;
            drawHeart(
                h.baseX + wave,
                h.baseY + floating,
                h.size * pulse,
                h.rotation,
                `hsl(
                    ${h.hue},
                    100%,
                    65%
                )`,
                10
            );
        }
    );
    requestAnimationFrame(
        animate
    );
}
/* ==================================================
   RESIZE
================================================== */
window.addEventListener(
    "resize",
    resize
);
/*
   Chỉ tạo dữ liệu ban đầu.
   Animation sẽ bắt đầu khi
   người dùng ấn nút.
*/
resize();
