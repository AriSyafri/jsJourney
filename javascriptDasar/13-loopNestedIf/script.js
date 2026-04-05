

let s = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        s += "*";
    }
    s += "\n";

}

let j = "";
for (let k = 0; k < 5; k++) {
    for (let l = 0; l < k; l++) {
        j += "*";
    }
    j += "\n";
    
}

console.log(s);
console.log("====");
console.log(j);
