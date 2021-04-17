class Player {
    constructor() {
        this.distance = 0;
        this.index = null;
        this.name = null;
        this.rank = 0;
    }
    getCount() {
        var count = database.ref("playerCount");
        count.on("value", function (data) {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        });
    }
    updateProp() {
        var playerIndex = "Players/Player" + this.index;
        database.ref(playerIndex).update({
            Name: this.name,
            Distance: this.distance
        });
    }
    static getPlayerInfo() {
        database.ref("Players").on("value", (data) => {
            allPlayers = data.val();
        });
    }
    getRank() {
        var rankNode = database.ref("Rank");
        var obj = this;
        rankNode.on("value", function (data) {
            obj.rank = data.val();
        });
    }
    updateRank(rank) {
        database.ref("/").update({
            Rank: rank
        });
    }
}