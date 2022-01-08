const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const newcats = ["Broom"];
function appendCat() {
    let newcats = ([...cats, "Broom"]);
    return newcats;
}

const orangecats = ["Arnold"];
function prependCat() {
    let orangecats = (["Arnold", ...cats]);
    return orangecats;
}

const baconcats = ["Milo", "Otis"];
function removeLastCat() {
    baconcats.slice(1);
    return baconcats;
}
const allCats = [...cats]
function removeFirstCat(){
    allCats.shift(1)
    return allCats
}