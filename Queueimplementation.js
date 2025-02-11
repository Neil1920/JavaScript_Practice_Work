const queue =[];

function enqueuElement(element){
    queue.push(element); //-->Add to the end of the queue
    console.log(`${element} Added To The Queue`);
}

function dequeueElement(){
    if(queue.length==0){
        console.log("Queue is the empty nothing to dequeue");
    }else{
        const removedElement = queue.shift(); // Remove from the front of the queue
        console.log(`${removedElement} Removed Form The Queue`);
    }
}

function displayQueue(){
    if(queue.length==0){
        console.log("Queue Is The Empty");
    }else{
        console.log("Current Queue:- ",queue);
    }
}

function showMenu(){
    console.log("\n Menu:- ");
    console.log("1.Enqueue The Element");
    console.log("2.Dequeue The Element");
    console.log("3.Display The Queue");
    console.log("4.Exit");
}

function startQueueApp(){
    const readline = require(`readline`);
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    function promptUser(){
        showMenu();
        rl.question("Enter The Your Choice:",(choice)=>{
            switch(choice){
                case'1':
                rl.question("Enter The Element To Enqueue:",(element)=>{
                    enqueuElement(element);
                    promptUser();
                });
                break;
                case '2':
                    dequeueElement();
                    promptUser();
                    break;
                case '3':
                    displayQueue();
                    promptUser();
                    break;
                case '4':
                    console.log("Exiting the program. Goodbye!");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
                    promptUser();
            }
        });
    }
    promptUser();
}
startQueueApp();