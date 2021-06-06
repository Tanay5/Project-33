class Snow {
    constructor(x, y, r) {
        var options = {
            'friction':0.1,
            'restitution':0.1,
            'isStatic':false
        }
        this.r = 10
        this.body = Bodies.circle(x, y, 10, options);
        var rand = Math.round(random(1, 2));
        var image 
        if (rand === 1) {
            image = "snow4.webp"
        }
        else {
            image = "snow5.webp"
        }
        this.image = loadImage(image);
        World.add(world, this.body)
    }
    updateY() {
        if(this.snow.position.y > height) {
            Matter.Body.setPosition(this.snow, {x:random(0, 800), y:random(0, 800)})
        }
    }
    showDrop() {
        fill("white");
        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, 10, 10);
    }
}