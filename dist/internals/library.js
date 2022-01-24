import { cli } from "../index.js";
console.log(cli);
export function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
;
export function memberFromID(id) {
    return cli.users.cache.get(id);
}
;
//# sourceMappingURL=library.js.map