(function(){
    'use strict';
    console.log('reading js');

    /* Grab elements from the HTML */
    const monster1 = document.getElementById('Chiikawa and Friends');
    const monster2 = document.getElementById('Chiikawas');
    const messages = document.querySelector('#messages');

    const startBtn = document.querySelector('#start');
    const startSound = new Audio('sounds/start.mp3');

    const attackBtn = document.querySelector('#attack');
    const attackSound = new Audio('sounds/action.mp3');

    let attacker;
    let defender;
    let defenderIndex;

    const gameData = {
        monsters: ['Chiikawa and Friends', 'Chiikawas'],
        health: [100, 100],
        attack: [5, 15, 25, 30, 40],
        attackMessage: [
            'a very weak attack! 5 hit points!',
            'a weak attack for only 15 hit points!',
            'an attack of 25 hit points!',
            'a big attack for 30 hit points',
            'a massive attack! woah! 40 hit points!'
        ],
        defendMessage: [
            'no defense, hit!', 
            'some defense, partial hit', 
            'total defense, no hit!'
        ],
        index: 0
    };

    startBtn.addEventListener('click', function(){
        startSound.play();
    });

    attackBtn.addEventListener('click', function(){
        attackSound.play();
    });

    // Start button
    startBtn.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `
            <p>Get ready! <strong>${gameData.monsters[gameData.index]}</strong> 
            was randomly selected to attack first. Click the attack button to see what happens.</p>`;
        attackBtn.className = 'showing';
    });

    // Attack button
    attackBtn.addEventListener('click', monsterAttack );

    function monsterAttack(){
        // who attacks / defends this turn
        if (gameData.index) {
            attacker = gameData.monsters[1];
            defender = gameData.monsters[0];
            defenderIndex = 0;
        } else {
            attacker = gameData.monsters[0];
            defender = gameData.monsters[1];
            defenderIndex = 1;
        }

        // random attack & defense
        const thisAttack = Math.floor(Math.random() * 5);
        const thisdDefense = Math.floor(Math.random() * 3);

        // hide the attack button until next turn
        attackBtn.className = 'hidden';

        // apply attack animation class to attacking monster
        document.getElementById(attacker).className = `attack${thisAttack}`;

        // attack message
        messages.innerHTML = `<p><strong>${attacker}</strong> has completed ${gameData.attackMessage[thisAttack]}</p>`;

        // let animation play, then defense
        setTimeout(function(){
            messages.innerHTML = `<p><strong>${defender}</strong> has ${gameData.defendMessage[thisdDefense]}</p>`;
            document.getElementById(defender).className = `defend${thisdDefense}`;

            // update health
            if (thisdDefense === 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if (thisdDefense === 1){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack] / 2;
            }

            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            if (health < 0) { health = 0; }

            document.querySelector(`#healthbar${defenderIndex} div`).style.width = `${health}%`;
            document.querySelector(`#monsterhealth${defenderIndex}`).innerHTML = `${health}%`;

            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }

    function checkWinningCondition(enemy, attackingMonster){
        setTimeout(function(){
            // remove animation classes
            monster1.removeAttribute('class');
            monster2.removeAttribute('class');

            const health = Math.floor(parseFloat(gameData.health[enemy]));

            if (health < 1){
                messages.innerHTML = `<p><strong>${attackingMonster}</strong> has won the battle! Start another battle</p>`;
                messages.innerHTML += '<button id="reset">Battle Again</button>';

                document.querySelector('#reset').addEventListener('click', function(){
                    location.reload();
                });
            } else {
                // switch turn
                gameData.index = gameData.index ? 0 : 1;
                messages.innerHTML = `<p>It\'s now <strong>${gameData.monsters[gameData.index]}'s</strong> turn!</p>`;
                attackBtn.className = 'showing';
            }
        }, 3000);
    }
})();
