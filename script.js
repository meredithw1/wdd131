const character = {
    name: 'Snortleblat',
    class: 'Swamp beast diplomat',
    level: '5',
    health: '100',
    image: 'snortleblat.webp',

    attacked: function () {
        this.health -= 20;

        if (this.health <= 0) {
            this.heath = 0;
            alert(this.name + " has died.");
        }
    },

    levelUp: function () {
        this.level += 1;
    }
}

document.querySelector("#charName").textContent = character.name;
document.querySelector("#charClass").textContent = character.class;
document.querySelector("#charLevel").textContent = character.level;
document.querySelector("#charHealth").textContent = character.health;

document.querySelector("#charImage").setAttribute("src", character.image);
document.querySelector("#charImage").setAttribute("alt", character.name);