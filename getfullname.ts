type Person = {
    firstName: string;
    lastName: string;
}
function getFullName(orang: Person): string {
    return `${orang.firstName} ${orang.lastName}`; 
}
const orang1: Person = { firstName: "John", lastName: "Xina" };
console.log(getFullName(Person));

