body {
    margin: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    z-index: 1;
}

.star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 6px white;
    animation: twinkle 3s infinite;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.camera-frame, .chat-frame {
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid #00ffcc; /* Verde neón para un toque futurista */
    border-radius: 15px;
    padding: 10px;
    width: 300px;
    height: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.2; }
}

