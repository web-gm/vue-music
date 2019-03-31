function getTen (num) {
  if (num > 10000) {
    return parseInt(num / 10000) + '万'
  } else {
    return num
  }
}
const tools = {
  getTen: getTen
}

export default tools
