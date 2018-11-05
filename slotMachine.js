//5 Slot Machine

class SlothMachine {

    constructor()
        {
            let coins = 0;
            this.coins = coins;
        }
 
    play(){
        this.coins++;
        let a = Math.random() >= 0.5;
        console.log(a);
        let b = Math.random() >= 0.5;
        console.log(b);
        let c = Math.random() >= 0.5;
        console.log(c);

        if (a === b === c && a ===true){
            console.log("Congratulations!!!. You won " + this.coins + " coins!!");
            this.coins = 0;
        }
        else
            console.log("Good luck next time!!");            
    }
}

const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
