console.log(this); 
// result -> {} === module.exports

function test() {
    console.log(this);
    // result -> global
}

let test2 = () => {
    console.log(this);
    // result -> {} === module.exports
}

test();
test2();