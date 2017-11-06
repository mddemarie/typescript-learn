function f2(callback: (arg1: number) => number, callCallback: boolean ): string {
    if (callCallback) {
        return callback(12).toString()
    } else 
    return "boom";
}

var hello4 = function(arg: number) {
    return arg*2;
}

function hello3(arg) {
    return arg*3;
}

function hello(result: number): number {
    return result + 1;
}
function hello2(result: number): number {
    return result - 1;
}

console.log(hello(5));
console.log(f2(hello, true));
console.log(f2(hello2, true));
console.log(f2(hello3, true));
console.log(f2((args:number)=>13, false));