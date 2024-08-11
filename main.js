window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('isReload', 'true');
});

window.addEventListener('load', () => {
    if (sessionStorage.getItem('isReload')) {
        sessionStorage.removeItem('isReload');

        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", `./images/dice${rand1}.png`);
        document.querySelector(".img2").setAttribute("src", `./images/dice${rand2}.png`);
        let resultText;
        if (rand1 === rand2) {
            resultText = "Draw!";
        } else if (rand1 < rand2) {
            resultText = "Player2 Win!";
        } else {
            resultText = "Player1 Win!";
        }
        document.querySelector("h1").innerHTML = resultText;

    } else {
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", `./images/dice${rand1}.png`);
        document.querySelector(".img2").setAttribute("src", `./images/dice${rand2}.png`);
    }
});
