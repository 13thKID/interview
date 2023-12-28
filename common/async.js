function first() {
    console.log(1)
}

function second() {
    setTimeout(() => {
        console.log(2)
    }, 0)
}

function third() {
    console.log(3)
}

first()
second()
third()

/**
 * >>> Questions <<<
 * 
 * 1. Do you know why is that?
 * 2. Could you explain the mechanism in your own words?
 * 3. What is the event loop?
 * 4. Is JS async?
 * 5. Is JS single or multi threaded?
 */