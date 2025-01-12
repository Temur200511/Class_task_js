class Animal{
    constructor(name, type, sound){
        this.name=name;
        this.type=type;
        this.sound=sound;
        
    }

    makesound(){
        console.log("qu qu qu qu");
        
    }

}

class Cat extends Animal{
    constructor(name, type, sound, color){
        this.name=name;
        
    }
}

