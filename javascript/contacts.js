function contacts(queries) {
  const names = [];
  const result = [];

  queries.forEach(([op, partial]) => {
    if (op === "add") names.push(partial);

    if (op === "find") {
      const namesFound = names.filter((name) => name.includes(partial));

      result.push(namesFound.length);
    }
  });

  return result;
}
