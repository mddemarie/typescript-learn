function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);
console.log(buildNameFun);