# Drum-Kit
🥁 Simple Drum Kit Application 🥁

This drum kit application allows users to play different drum sounds by clicking on specific buttons representing letters (w, a, s, d, j, k, l) on the webpage or by pressing the corresponding keys on the keyboard.


✨HTML File 🌐


➡️Contains a set of buttons with the class "drum" and letters (w, a, s, d, j, k, l) as their innerHTML.

➡️Includes a script tag to link the JavaScript code file (index.js).



✨CSS File 🎨

➡️Provides styling for the buttons, setting background images, and other properties.



✨JavaScript (index.js) 🚀

➡️Adds click event listeners to each button with the class "drum" using a loop.

➡️When a user clicks on a button, the sound() function is called with the clicked button's innerHTML (letter) as a parameter.

➡️Adds an event listener to the document to listen for keyboard keypress events.

➡️When a user presses a key on the keyboard, the makesound() function is called with the pressed key as a parameter.

➡️The makesound() function takes a single parameter key, representing the letter (e.g., "w", "a", "s") or key that was clicked or pressed.

➡️Inside makesound(), a switch-case statement matches the key with different cases (letters "w", "a", "s", "d", "j", "k", "l").

➡️For each case, the function creates a new Audio object with the corresponding sound file (e.g., 🎵 "crash.mp3", "kick-bass.mp3" 🎵) and plays the sound.

➡️With this code, the webpage will function as an exciting drum kit, allowing users to create groovy beats by either clicking the buttons or jamming on the keyboard! 🎶🥁🔊
