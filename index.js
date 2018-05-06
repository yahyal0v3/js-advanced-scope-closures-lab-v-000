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
    return total * percent
  }
}
