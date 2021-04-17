class Form {
    constructor() {
        this.title = createElement('h2');
        this.input = createInput("").attribute("place-holder", "Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.resetButton = createButton("Reset");
        this.endGreet = createElement("h2");
    }
    hideForm() {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display() {
        this.title.html("Car Race Game");
        this.title.position(displayWidth - 750, 30);
        this.input.position(displayWidth - 800, displayHeight - 590);
        this.button.position(displayWidth - 600, displayHeight - 590);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateProp(player.name);
            player.updateCount(player.index);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth - 735, 100);
        });
    }
    finish() {
        console.log("form.finish started");
        this.resetButton.position(displayWidth - 50, 100);
        this.endGreet.html("Your rank is: " + player.rank);
        this.endGreet.position(displayWidth - 735, 100);
        this.resetButton.mousePressed(() => {
            this.endGreet.hide();
            game.updateState(0);
            player.updateCount(0);
            player.updateRank(0);
            database.ref("Players").remove();
            clear();
            game.start();
        });
    }
}