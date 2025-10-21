class Robot {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
}


const r0 = new Robot('Robo1');
r0.move();

class Weapon {
    constructor(description) {
        this.description = description;
    }

    fire(){
        console.log(`${this.description} is firing`);
    }
}

const w0=new Weapon('pew pew laser');
w0.fire();

class CombatRobot extends Robot {
    constructor(name){
        super(name);
        this.weapons=[];
    }
    addWeapon(w){
        this.weapons.push(w);
    }

    fire(){
        console.log('firing all WAEAPONS:');
        for(const w of this.weapons){
            w.fire();
        }
    }
}

const r1=new CombatRobot('Warrior1');
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly =function(){
    console.log(`${this.name} is flying`);
}

r1.fly();


// Clasa Software
class Software {
    run() {
        console.log('Software is running...');
    }
}

// Clasa Plugin
class Plugin {
    constructor(name) {
        this.name = name;
    }

    activate() {
        console.log(`Plugin ${this.name} is activated.`);
    }
}


class Browser extends Software {
    constructor() {
        super();
        this.plugins = [];
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
        console.log(`Plugin ${plugin.name} installed.`);
    }

    runPlugins() {
        console.log('Running plugins...');
        for (const plugin of this.plugins) {
            plugin.activate();
        }
    }
}

const chrome = new Browser();

chrome.run();  

const adblock = new Plugin('AdBlock');
const darkmode = new Plugin('DarkMode');

chrome.addPlugin(adblock);
chrome.addPlugin(darkmode);

chrome.runPlugins();
