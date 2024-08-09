import { caesarCipher, caesarDecipher} from "./solution.js";

const today = new Date();
const year = today.getFullYear();
const day = today.getDate();
let code = year - 2000 - day;


const message = caesarCipher('Hello world', code);

const decipheredMessage = caesarDecipher(message, code);

console.log(decipheredMessage);

