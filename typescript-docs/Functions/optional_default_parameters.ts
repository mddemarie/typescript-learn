function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

buildName("Bob"); // Only 1 parameter
buildName("Bob", "Adams", "Sr."); // Too many parameters
buildName("Bob", "Adams"); // Exactly two parameters, correct!

// Optional parameters
function buildN(firstN: string, lastN?: string) {
  if (lastN) {
  return firstN + " " + lastN;  
  }
  else
  return firstN;
}

buildN("Bob"); // Now works because lastN is optional parameter
buildN("Bob", "Adams", "Sr."); // error, too many parameters
buildN("Bob", "Adams"); // This is correct!

// default-initialized parameters
function build(first: string, second = "Smith") {
  return first + " " + second;
}

build("Bob")
build("Bob", undefined)
build("Bob", "Adams", "Sr.") // error, too many parameters
build("Bob", "Adams") // Works!


