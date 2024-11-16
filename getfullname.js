function getFullName(orang) {
    return "".concat(orang.firstName, " ").concat(orang.lastName);
}
var orang = { firstName: "John", lastName: "Xina" };
console.log(getFullName(person));
