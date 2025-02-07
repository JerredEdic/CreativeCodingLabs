let friend01={name:"Matthew",age:22,fishing:true};
let friend02={name:"Tyler",age:25,fishing:true};
let friend03={name:"Yon",age:21,fishing:false};
let friend04={name:"James",age:24,fishing:true};
let friend05={name:"Adrian",age:20,fishing:false};

let friends = [];
let friendAges = [];
let friendFishingAges = [];

friends.push(friend05);
friends.push(friend03);
friends.push(friend01);
friends.push(friend04);
friends.push(friend02);

console.log(friends);



for (let i=0;i<friends.length;i++){
    console.log(friends[i].name);
    friendAges.push(friends[i].age)
}


for (let i=0;i<friends.length;i++) {
    if (friends[i].fishing) {
        friendFishingAges.push(friends[i].age)
    }
}




//Function testing

//calculation functions
function avgCalc(arrNum) {
    let averageStart=0;
    for (let i=0;i<arrNum.length;i++) {
        averageStart=averageStart+arrNum[i];
    }
    return parseInt(averageStart/arrNum.length);
}

// for (let i=0;i<100;i++){
//     if(i%5===0){console.log(i)}
// }
//Modular test and median finder
function median(arrNum){
    arrNum.sort((a,b)=>(a-b)) //array.sort() automatically sort via first digit rather whole number

    if (arrNum.length%2===0)
    {
        return (arrNum[Math.floor((arrNum.length/2)-1)] + arrNum[Math.floor(arrNum.length/2)])/2
    }
    else
    {
        return arrNum[Math.floor(arrNum.length/2)]
    }
}

//Original calc functions
// function avgAgeFriends() {
//     let averageAge=0;
//     for (let i=0;i<friends.length;i++) {
//         averageAge=averageAge+friends[i].age;
//     }
//     return parseInt(averageAge/friends.length);
// }


// function avgAgeFishing() {
//     let averageAge=0;
//     for (let i=0;i<friendFishingAges.length;i++) {
//         averageAge=averageAge+friendFishingAges[i];
//     }
//     return parseInt(averageAge/friendFishingAges.length);
// }


//find by index
function FAge(fid){
    return friends[fid].name + " is " + friends[fid].age;
}


function FName(fid){
    return "Their name is " +friends[fid].name
}


function FFishing(fid){
    let answer;
    if (friends[fid].fishing){
        answer=friends[fid].name +" does fish";
    }
    else {
        answer=friends[fid].name +" does not fish";
    }

    return answer;
}