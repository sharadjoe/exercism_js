export const solve = (xCordinate, yCordinate) => {
    if(xCordinate === "WRONG" || yCordinate === "WRONG"){
        return null
    }else{
        var euclideanDistance = Math.sqrt((xCordinate * xCordinate) + (yCordinate * yCordinate))
        if(euclideanDistance>10){
            return 0
        }else if(euclideanDistance<=10 && euclideanDistance>5){
            return 1
        }else{
            return 5
        }
    }
}