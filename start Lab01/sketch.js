let age;

let cyear=2025;


const dob="18/07/2005";
const yearOfBirth=parseInt(dob.substring(6,10)); //parseInt() My beloved
const monthOfBirth=parseInt(dob.substring(3,4));
const dayOfBirth=parseInt(dob.substring(0,1));

age=cyear-yearOfBirth;

let friends=["Matthew","James","Yon","John","Adam"];
friends.splice(1,0,"Tyler"); //.splice(index,deleteCount,item) Parameters

let fn=friends.length;

function FriendsList(){
    for (let k=0;k<fn;k++){ //Don't accidentally put: for (let k=0;k=fn;k++), will cause deadman's loop
        console.log(friends[k]);
    }
}


let myfriend = {name:"Matthew",age:21}