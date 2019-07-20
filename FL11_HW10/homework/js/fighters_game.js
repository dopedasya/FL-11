const hundred = 100;
const two = 2;
function Fighter(data){
  let warrior = data;
  let win = 0;
  let lose = 0;
    let getName = function getName() {
        return warrior.name;
    };
    let getDamage = function getDamage(){
        return warrior.damage;
    };
    let getHp = function getHp(){
        return warrior.hp;
    };
    let getAgility = function getAgility(){
        return warrior.agility;
    };
    let damageGet = function damageGet(dmg){
        warrior.hp = warrior.hp - dmg;
        if(warrior.hp < 0){
            warrior.hp = 0;
        }
        return this.hp;
    }
    let getWin = function getWin(){
        warrior.win = win;
        return warrior.win;
    }

    let getLose = function getLose(){
        warrior.lose = lose;
        return warrior.lose;
    }
    function attack(enemy){
        let trueStrike = (hundred-enemy.getAgility())/hundred;
        let strike = Math.random().toFixed(two);
        if(trueStrike >= strike){
            enemy.damageGet(getDamage());
            console.log(`${getName()} make ${getDamage()} damage to ${enemy.getName()}`);
            
        }else{
        console.log(`${getName()} attack missed`);
        }
    }
   
     function logCombatHistory() {
        console.log(`Name:  ${getName()}  Wins:  ${getWin()},  Losses:   ${getLose()}`);
    } 
    function heal(amountHp){
        warrior.hp = amountHp + warrior.hp;
        if(warrior.hp > warrior.starterHp){
            warrior.hp = warrior.starterHp;
        }
    }
    function addWin(){
        win++;
        getWin();
        return getWin();
    }
    function addLose(){
        lose++;
        getLose();
        return getLose();
    }
    return{
        getName: getName,
        getDamage: getDamage,
        getAgility: getAgility,
        getHp: getHp,
        addWin: addWin,
        addLose: addLose,
        attack: attack,
        heal: heal,
        damageGet: damageGet,
        getLose: getLose,
        getWin: getWin,
        logCombatHistory: logCombatHistory
    }
    

}

function battle (fighter1, fighter2){
    if(fighter1.getHp() <=0 ){
        console.log(`${fighter1.getName()} is dead and can't fight`);
    }else if(fighter2.getHp() <= 0){
        console.log(`${fighter2.getName()} is dead and can't fight`);
    }else{ 
        while(fighter1.getHp() > 0 && fighter2.getHp() > 0){
        fighter1.attack(fighter2);
        
        fighter2.attack(fighter1);
        
    }
    if(fighter1.getHp() <= 0){
        fighter1.addLose();
        fighter2.addWin();
        console.log(`${fighter1.getName()} lose the fight`);
    
    }
    if(fighter2.getHp() <= 0){
        fighter2.addLose();
        fighter1.addWin();
        console.log(`${fighter2.getName()} lose the fight`);
    
    }
    }
   
}


const john = new Fighter({name: 'John', damage:20,hp:100, agility:25});
const ignat = new Fighter({name: 'ignat', damage:30,hp:110, agility:30});
battle(john, ignat);
ignat.logCombatHistory();
john.logCombatHistory();
 