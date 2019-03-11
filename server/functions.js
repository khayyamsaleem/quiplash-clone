function validStart(list){
  if(list.length>=3 && list.length<=8){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  validStart: validStart,
}
