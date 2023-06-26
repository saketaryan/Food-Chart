async function main(){
    let data = await fetch('https://file.notion.so/f/s/a438c663-645c-4570-8503-11f20cea9b18/food.json?id=9f33085a-202e-4056-a4c4-08a0036624b4&table=block&spaceId=663a35c6-2bd7-44e6-bf90-5f33d51f737c&expirationTimestamp=1687881818781&signature=g76-TmUHRAcXFCYAB4x7saWUbC32Vv-UTIw0R3J25Lo&downloadName=food.json');
    data = await data.json();
    listAll(data);
    // listVegetables(data);
    // listFruits(data);
    // listProtein(data);
    // listNuts(data);
    // listGrains(data);
    // listDairy(data);
    // listCalorieAbove100(data);
    // listCalorieBelow100(data);
    // sortProteinContent(data);
    // sortCabContent(data);
}

main();

// list all the food items
function listAll(data){
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category vegetables
function listVegetables(data){
    data = data.filter((item) => item.category === 'Vegetable');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category fruits
function listFruits(data){
    data = data.filter((item) => item.category === 'Fruit');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category protein
function listProtein(data){
    data = data.filter((item) => item.category === 'Protein');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category nuts
function listNuts(data){
    data = data.filter((item) => item.category === 'Nuts');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category grains
function listGrains(data){
    data = data.filter((item) => item.category === 'Grain');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with category dairy
function listDairy(data){
    data = data.filter((item) => item.category === 'Dairy');
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with calorie above 100
function listCalorieAbove100(data){
    data = data.filter((item) => item.calorie > 100);
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with calorie below 100
function listCalorieBelow100(data){
    data = data.filter((item) => item.calorie < 100);
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with highest protien content to lowest
function sortProteinContent(data){
    data = data.sort((a,b) => b.protiens - a.protiens);
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// list all the food items with lowest cab content to highest
function sortCabContent(data){
    data = data.sort((a,b) => a.cab - b.cab);
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}