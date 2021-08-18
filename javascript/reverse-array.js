function reverseArray(array) {
  return array.reduce((acc, value) => [value, ...acc], []);
}
