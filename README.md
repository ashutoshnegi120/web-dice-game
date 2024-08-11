# Dice Roll Game

## Overview

This web page features a simple dice roll game. When the page is loaded or refreshed, it simulates a dice roll for two players and displays the results. The page dynamically updates images to show the dice faces and indicates the outcome of the roll.

## Features

- **Dice Roll Simulation**: Generates random dice rolls between 1 and 6 for two dice.
- **Image Update**: Displays corresponding dice images based on the generated dice values.
- **Result Display**: Shows whether Player 1 or Player 2 wins or if there is a draw.

## How It Works

1. **Page Load or Refresh**:
   - On initial load, random dice values are generated and displayed.
   - On page reload, a flag is set in `sessionStorage` to indicate that the page has been refreshed.
   - When the page is reloaded, the flag is checked, and the dice rolls and result are updated accordingly.

2. **Dice Roll Logic**:
   - Dice values are generated using `Math.floor(Math.random() * 6) + 1` to ensure values between 1 and 6.
   - Dice images are updated based on the generated values.
   - The result is displayed based on a comparison of the two dice values.

## Code Explanation

### JavaScript

```javascript
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('isReload', 'true');
});

window.addEventListener('load', () => {
    if (sessionStorage.getItem('isReload')) {
        sessionStorage.removeItem('isReload');

        // Generate random dice rolls between 1 and 6
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;

        // Update dice images
        document.querySelector(".img1").setAttribute("src", `./images/dice${rand1}.png`);
        document.querySelector(".img2").setAttribute("src", `./images/dice${rand2}.png`);

        // Determine the result and update the text
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
        // Generate initial dice rolls between 1 and 6
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;

        // Update dice images
        document.querySelector(".img1").setAttribute("src", `./images/dice${rand1}.png`);
        document.querySelector(".img2").setAttribute("src", `./images/dice${rand2}.png`);
    }
});
