// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

var CryptoJS = require("crypto-js");
    console.log(CryptoJS.HmacSHA1("Message", "Key"));


export default {

    name: "Hash",

    
    var md5 = function(value) {
        return CryptoJS.MD5(value).toString();
    } ("input").keyup(function () {
        var value = (this).val(),
            hash = md5(value);
        (".test").html(hash);
    });

}
  

    

