class Game {
    constructor() {
    }
    getState() {
        var state = database.ref("gameState");
        state.on("value", function (data) {
            gameState = data.val();
        });
    }
    updateState(state) {
        database.ref("/").update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(300, 200);
        car2 = createSprite(500, 200);
        car3 = createSprite(700, 200);
        car4 = createSprite(900, 200);
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hideForm();
        // textSize(20);
        // fill("blue");
        // text("Game starts", 220, 100);
        Player.getPlayerInfo();
        player.getRank();
        if (allPlayers !== undefined) {
            var index = 0;
            var x = 175;
            var y;
            // var displayPosition = 130;
            background(198, 135, 103);
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            // for (var i = 0; i < allPlayers.length; i++) 
            for (var p in allPlayers) {
                index += 1;
                x += 200;
                y = displayHeight - allPlayers[p].Distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (p === "Player" + player.index) {
                    // cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                    fill("red");
                    ellipse(x, y, 60, 60);
                    text(player.name + ": " + player.distance, x, y - 100);
                }
                else {
                    cars[index - 1].shapeColor = "black";
                }
                // displayPosition += 20;
                // push();
                // textSize(15);
                // text(allPlayers[p].Name + ": " + allPlayers[p].Distance, 220, displayPosition);
                // pop();
            }
        }
        if (player.index !== null && keyIsDown(UP_ARROW)) {
            player.distance += 50;
            player.updateProp();
        }
        if (player.distance > 4350) {
            gameState = 2;
            ranks = player.rank + 1;
            // player.rank += 1;
            player.updateRank(ranks);
        }
        drawSprites();
    }
    end() {
        form.finish();
    };
}