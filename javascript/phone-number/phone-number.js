module.exports = class PhoneNumber {
    constructor(phoneNumber){
        this.phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    }
    number(){
        if (String(this.phoneNumber).length === 11) {
            this.phoneNumber = this.phoneNumber - 10000000000
        }
        var newNumber = String(this.phoneNumber).split("")

        if(newNumber.length===10 && (newNumber[0]>=2) && (newNumber[3]>=2)){
            return (this.phoneNumber).toString()
        }else {
            return null
        }



    }

}