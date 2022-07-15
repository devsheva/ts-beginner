// declare a variadic function
let printStudent = (name: string, ...books: Array<string>) => {
  return name + ' likes ' + books.join(',') + '.';
};

console.log(printStudent('Ross', 'Math', 'Science', 'Geology'));
