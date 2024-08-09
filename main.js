import { caesarCipher, caesarDecipher} from "./solution.js";

const today = new Date();
const year = today.getFullYear();
const day = today.getDate();

let code = year - 2000 - day;

console.log(caesarCipher('The troops are inbound', code));

caesarCipher('The troops are inbound', code);