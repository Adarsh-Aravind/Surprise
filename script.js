* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    background: #f0f2f5;
    color: #333;
    overflow-x: hidden;
    position: relative;
    padding: 20px 10px;
}

h1 {
    margin-bottom: 20px;
    color: #d6336c;
    z-index: 10;
    position: relative;
    text-align: center;
    font-size: 2rem;
}

.memory-game {
    width: 640px;
    height: 480px;
    display: flex;
    flex-wrap: wrap;
    perspective: 1000px;
    z-index: 10;
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    justify-content: center;
}

.memory-card {
    width: calc(25% - 10px);
    height: calc(33.333% - 10px);
    margin: 5px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    cursor: pointer;
}

.memory-card:active {
    transform: scale(0.97);
    transition: transform 0.2s;
}

.memory-card.flip {
    transform: rotateY(180deg);
}

.front-face,
.back-face {
    width: 100%;
    height: 100%;
    padding: 10px;
    position: absolute;
    border-radius: 5px;
    background: #fff;
    backface-visibility: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.front-face {
    transform: rotateY(180deg);
}

.back-face {
    font-size: 48px;
    color: #d6336c;
    background: linear-gradient(45deg, #f8f9fa, #e9ecef);
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

.floating-love {
    position: absolute;
    background: radial-gradient(circle at 30% 30%, rgba(255, 105, 180, 0.7), rgba(255, 0, 0, 0.5));
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    filter: blur(8px);
    opacity: 0;
    animation: floatUp 15s infinite linear;
    z-index: 1;
}

.floating-love.heart {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at 30% 30%, rgba(255, 105, 180, 0.7), rgba(255, 0, 0, 0.5));
    position: absolute;
    transform: rotate(-45deg);
    border-radius: 0 50% 50% 50%;
}

.floating-love.heart::before,
.floating-love.heart::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 105, 180, 0.7), rgba(255, 0, 0, 0.5));
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
}

.floating-love.heart::before {
    top: -50%;
    left: 0;
}

.floating-love.heart::after {
    left: 50%;
    top: 0;
}

@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 0.7;
    }
    99% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-130vh); 
        opacity: 0;
    }
}

/* ===== Responsive Styling ===== */

@media (max-width: 768px) {
    h1 {
        font-size: 1.5rem;
        padding: 10px;
    }

    .memory-game {
        width: 90vw;
        height: auto;
        padding: 10px;
        justify-content: center;
    }

    .memory-card {
        width: calc(33.333% - 10px);
        height: calc(25vw - 10px);
    }

    .front-face,
    .back-face {
        font-size: 24px;
        padding: 5px;
    }
}

@media (max-width: 480px) {
    .memory-card {
        width: calc(50% - 10px);
        height: calc(40vw - 10px);
    }

    .back-face {
        font-size: 32px;
    }
}
