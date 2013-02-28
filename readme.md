A jquery plugin for making Kenburn effects on image
They are 3 different effects.

Script developed and tested for Jquery v1.9.1. The script wait 8 seconds to launch the first effect.

---- HOW IT WORKS ----

To use this Jquery script, you need a specific HTML structure :

div class="wa-kenburn-block"
    img alt="Test image" src="..."
div

You just need to respect this structure and add "wa-kenburn-block" class on the parent element. The image can have any size, the script will respect the proportions.
The script is very light but can be even more with the minfied version.

Your container must have a width and a height, the children image must be bigger than the container (arround +30%) and set overflow:hidden to the CSS of the container.
