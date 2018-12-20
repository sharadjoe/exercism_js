function at(hour, minute=0) {
    hour = (Math.floor(minute/60)) + (hour%24)
    while(hour<0){
        hour+=24
    }
    hour = hour % 24
    if(minute<0){
        minute = (minute%60) + 60
    }
    minute = minute%60
    var minuteInString = minute.toString()
    var hourInString = hour.toString()
    if(minuteInString.length === 1) {
        minuteInString = '0' + minuteInString
    }
    if(hourInString.length === 1) {
        hourInString = '0' + hourInString
    }
    return(hourInString + ':' + minuteInString)

}



export default at