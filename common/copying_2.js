const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
    }
}

const obj2 = { ...obj1 }

obj2.c.d = "Foo"

// console.log(obj1);
// console.log(obj2);

/**
 * >>> Questions <<<
 * 
 * 1. What will be the value of obj1.c.d ?
 * 2. Explain the mechanism and propose a solution
 */