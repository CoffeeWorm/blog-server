const IEReg = /MSIE \S+|rv:11\.0/i;
const AndroidReg = /android/i;
const IOSReg = /iphone|ipod|ipad/i;


class Util {
  constructor(){}
  isIE(UA){
    return IEReg.test(UA);
  }
  isAndroid(UA){
    return AndroidReg.test(UA);
  }
  isIOS(UA){
    return IOSReg.test(UA);
  }
}

module.exports = new Util();
