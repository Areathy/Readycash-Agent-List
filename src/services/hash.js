import CryptoJS from "crypto-js";


export const hashPassword = password => CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(password));


