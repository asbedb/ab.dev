//BabylonJS and jQuery Calls//
const canvas = document.getElementById("renderCanvas"); 
const engine = new BABYLON.Engine(canvas, true); 
const RSS_URL = 'http://localhost:8080/https://medium.com/feed/@asbedb';

$.ajax({
    url: RSS_URL,
    dataType: "xml",
    success: function(data) {
        $(data).find("item").each(function() {
            const el = $(this);
            const contentEncoded = el.find("content\\:encoded").text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentEncoded;
            const pTags = tempDiv.getElementsByTagName('p');
            const firstImg = tempDiv.querySelector('img');
            const firstImageUrl = firstImg ? firstImg.getAttribute('src') : 'img/medium.webp';

            let firstTwoSentences = '';
            if (pTags.length > 0) {
                const firstPTagContent = pTags[0].textContent.trim();
                const sentences = firstPTagContent.split(/[\.\?!]\s+/);
                firstTwoSentences = sentences.slice(0, 1).join('. ');
            }
            //HTML Message-Embedder//
            const template = `
            <a href="${el.find("link").text()}" target="_blank">
                <div class="message-embed-social">
                    <div id="title" class="social-title">${el.find("title").text()}</div>
                    <div id="pub-date" class="post-pubdate">${el.find("pubDate").text()}</div>
                    <div id="post-image"><img class="message-embed-image" src="${firstImageUrl}"/></div>
                    <div id="leading-message" class="leading-message">${firstTwoSentences}</div>
                </div>
            </a>
            `;
            $("#rss-embed").append(template);
        });
    },
    error: function(xhr, status, error) {
        console.error("Error fetching RSS feed:", error);
    }
});

const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // Define animation
    const frameRate = engine.getFps();
    const animationDurationInSeconds = 1; // 5 seconds
    const animationFrames = frameRate * animationDurationInSeconds; // Adjusted the duration

    const animRotate = new BABYLON.Animation("rotateAnimation", "rotation.y", animationFrames, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    const rotKeys = [];

    rotKeys.push({
        frame: 0,
        value: 0
    });

    rotKeys.push({
        frame: animationFrames,
        value: 2 * Math.PI
    });

    animRotate.setKeys(rotKeys);

    //Adding a light
    const light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 2.0;
    light.range = 100;

    // Parameters: name, alpha, beta, radius, target position, scene
    const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(50, 50, -50), scene);

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(50, 50, 50));

    // This attaches the camera to the canvas
    camera.panningSensibility = 0;

    // Load model and apply animation
    BABYLON.SceneLoader.ImportMesh("", "models/", "39-blueman.gltf", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        const targetMesh = newMeshes[0];
        camera.lockedTarget = targetMesh;

        // Set initial camera position
        const radius = 50; // distance from the target
        const cameraStartPosition = new BABYLON.Vector3(0, 0, -radius);
        camera.position = cameraStartPosition;

        // Set up animation to rotate camera around the target
        const animRotateCamera = new BABYLON.Animation("rotateCameraAnimation", "position", animationFrames / 10, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE); // Divided the number of frames by 10 to slow down the animation
        const keys = [];

        for (let angle = 0; angle <= 2 * Math.PI; angle += Math.PI / 30) {
            const position = new BABYLON.Vector3(radius * Math.sin(angle), 0, -radius * Math.cos(angle));
            keys.push({
                frame: angle * 30 / (2 * Math.PI),
                value: position
            });
        }

        animRotateCamera.setKeys(keys);

        // Apply animation to the camera
        camera.animations.push(animRotateCamera);
        scene.beginAnimation(camera, 0, 30 * 2 * Math.PI, true);
    });

    return scene;
}

const scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});
