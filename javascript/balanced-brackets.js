function isBalance(str) {
  const stack = [];
  const brackets = "[]{}()";

  for (let index = 0; index < str.length; index++) {
    const bracket = str[index];

    let bracketIndex = brackets.indexOf(bracket);

    if (bracketIndex === -1) continue;

    if (!(bracketIndex % 2)) {
      stack.push(bracketIndex + 1);
    } else if (!stack.length || stack.pop() !== bracketIndex) return "NO";
  }

  return "YES";
}


