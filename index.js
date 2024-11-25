/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

// Foods

// class Foods
    // name
    // spicyness ; origin and spicyness are the constructors//

class Foods{
    constructor(name, spicyness){
        this.name = name;
        this.spicyness = spicyness;
    }
}


// class Menu

class Menu{
    constructor(){
       // Foods array 
       this.foods = [];
    }

    // add foods
    addFoods(){
        let foodsName = prompt("Enter Food Name:");
        let foodsSpicyness = prompt("Enter Food Spicyness:");
        this.foods.push(new Foods(foodsName, foodsSpicyness));
        //foods push is for what you type will fill in
    }


    // delete foods
    deleteFoods(){
        let foodIndex = prompt("Enter food index to DELETE:");
        this.foods.splice(foodIndex, 1);
    }
    // view foods
    viewFoods(){
        let displayFoods = '';
        for (let i=0; i < this.foods.length; i++){
           displayFoods += `
           ${i}) ${this.foods[i].name} ${this.foods[i].spicyness}`
        }

        alert(`
          Food Inventory:
          ${displayFoods}
        `);
    }
    // see a Menu
    showMainMenu(){
        return prompt(`
            Main Menu:
            ------------
            0) Exit Menu
            1) Add Foods
            2) Delete Foods
            3) View all Foods
        `);
    }
    // start the menu
    start(){
        let selection = this.showMainMenu();
        while(selection != 0){
            switch(selection){
                case "1": this.addFoods();
                break;
                case "2": this.deleteFoods();
                break;
                case "3": this.viewFoods();
                break;
                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu...Goodbye!");
    }

}


// instantiate the menu and invoke the start method


let menu = new Menu();

menu.start();