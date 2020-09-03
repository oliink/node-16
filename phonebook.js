  class Phonebook {
    constructor(name, surname, num){

        let _name = name;
        this.getName = function(){
            return _name;
        }
        this.setName = function(name){
            return(_name = name);
        }

        let _surname = surname;
        this.getSurname = function(){
            return _surname;
        }
        this.setSurname = function(surname){
            return(_surname = surname);
        }

        let _number = num;
        this.getNumber = function(){
            return _number;
        }
        this.setNumber = function(num){
            return(_number = num);
        }

        this.getInfo = function (){
            return {
                number: _number,
                name: _name,
                surname: _surname
            }
        }
    }
}


module.exports = Phonebook;

