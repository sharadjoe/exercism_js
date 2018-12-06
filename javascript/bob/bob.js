const regex = /([a-z]|[0-9]|:)(?!.*\1)/g
export const hey = (message) => {
  message = message.replace(/\s|\t/g, "")
  if (message === '') {
    return "Fine. Be that way!"
  }
  else if (message[message.length - 1] === '?' && message.match(regex) === null) {
    return "Calm down, I know what I\'m doing!"
  }
  else if(message.match(regex) === null){
    return "Whoa, chill out!"
  } 
  else if(message[message.length-1] === '?') {
    return "Sure."
  }
  else if (message[message.length - 1] === '!' && (message.match(regex).length > 3)) {
    return "Whatever."
  }
  else if (message[message.length - 1] === '!' && message.match(regex) !== null) {
    return "Whoa, chill out!"
  }
  
  else{
    return "Whatever."
  }
  
};
