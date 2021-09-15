class Employee {
    constructor(title){
        this.title = title;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }
}


class Engineer extends Employee {
    constructor(title, isManager){
        super(title);
        this.isManager = isManager;
    }
    
    setIsManager(isManager){
        this.isManager = isManager;
    }
    getIsManager(){
        return this.isManager;
    }
    
}
