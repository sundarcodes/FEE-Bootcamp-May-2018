# Task description

1. Build a car game. Following are the rules:
    * Have a boundary where the car can move.
    * The car could move in all directions.
    * If the car touches the boundary, the game is over.
    * The speed of the car should keep increasing every 30 seconds.
    * Pressing arrow keys should change the direction of the car.
    * Pressing spacebar should pause the car movement and pressing it again would resume it.
    * The score would be number of seconds that user has been playing the game without hitting the boundaries.
    * High scores should be updated whenever the user breaches his/her own high score.

![alt text](car-animation.gif)

# Points to note
1. The car image should also change/tilt when changing directions.
2. Find the optimum duration for setInterval() meaning how frequently the moveCar() function needs to be called to make it look like its moving.


# Folder structure to be followed
1. Inside this folder, create the index.html.
2. Place your css, fonts file under a folder called css.
3. Place your js file  under a folder called js.
4. Place any images under a folder called images.
5. Create other html files and link them to js/css/other htmls appropriately.