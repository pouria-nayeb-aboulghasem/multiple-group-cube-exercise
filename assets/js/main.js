function cube() {
    let cubeContent = document.querySelector(".cube__content");

    zValues = [-3, -2, -1, 0, 1, 2, 3];

    zValues.forEach(z => {
        let cubeList = document.createElement("ul");
        cubeList.classList.add("cube__list");
        cubeList.style.setProperty("--z", z);

        for (let x = -3; x < 3; x++) {
            let li = document.createElement("li");
            li.classList.add("cube__item");
            li.style.setProperty("--x", x);
            li.style.setProperty("--y", 0);

            let span = document.createElement("span");
            span.classList.add("cube__side");
            span.style.setProperty("--i", 3);
            li.appendChild(span);
            cubeList.appendChild(li);
        }

        cubeContent.appendChild(cubeList);
    });
    activeRandomCube();
}

function activeRandomCube() {
    let cubeSides = document.querySelectorAll(".cube__side");

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * cubeSides.length);
        let randomCubeSide = cubeSides[randomIndex];

        randomCubeSide.classList.add("active");

        setTimeout(() => {
            randomCubeSide.classList.remove("active");
        }, 2000);
    }, 500);
}

cube();