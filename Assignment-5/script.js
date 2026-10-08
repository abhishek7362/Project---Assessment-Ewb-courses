function calculateStandardArea(length = 5, width = 4) {
    return length * width;
}

const calculateArrowArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(`Standard Function Area (Default 5x4): ${calculateStandardArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateArrowArea(10, 3)}`);

{
    let blockVar = "Inside Block";
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block)`);
}