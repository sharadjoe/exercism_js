function at(hour, minute=0) {
    var  minuteInString = minute.toString()
    var hourInString = (hour%24).toString()
    if(minuteInString.length === 1) {
        minuteInString = '0' + minuteInString
    }
    if(hourInString.length === 1) {
        hourInString = '0' + hourInString
    }
    return(hourInString + ':' + minuteInString)

}

export default at