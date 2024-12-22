function printName(name: string | null | undefined): void {
  if (name !== null && name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works
printName(undefined); // Works

//Alternative using optional chaining and nullish coalescing
function printName2(name: string | null | undefined): void {
  console.log((name ?? 'No name provided').toUpperCase());
}

printName2(null);
printName2(undefined);
printName2('John');