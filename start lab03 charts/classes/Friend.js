class Friend{
    constructor(_name,_age,_hobby){
        this.name=_name;
        this.age=_age;
        this.hobby=_hobby
    }
    
    report(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.hobby)
    }

    changeHobby(_newHobby){
        this.hobby=_newHobby;
    }

    ageUp(){
        this.age++;
    }
}