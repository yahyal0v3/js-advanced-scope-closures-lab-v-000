function produceDrivingRange (distance) {
  return function (startStreet, endStreet) {
    if (startStreet < endStreet) {
      let range = parseInt(endStreet) - parseInt(startStreet)
      if (distance < range) {
        return `${range - distance} blocks out of range`
      } else {
        return `within range by ${distance - range}`
      }
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
<<<<<<< HEAD
    return total * percent
=======
    return total * percent  
>>>>>>> ba7d2e396804983b1b209a2ddb4b08f352815fbd
  }
}
