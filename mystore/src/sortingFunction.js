export const AllCommonFilerSorting = (selectedOption, allstateData) => {
  //   let finalSortedValue;

  if (selectedOption === "lowest") {
    const finalSortedValue = allstateData.sort((a, b) => {
      return a.price - b.price;
    });
    return finalSortedValue;
  }

  if (selectedOption === "highest") {
    const finalSortedValue = allstateData.sort((a, b) => {
      return b.price - a.price;
    });
    return finalSortedValue;
  }

  if (selectedOption === "a-z") {
    const finalSortedValue = allstateData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return finalSortedValue;
  }

  if (selectedOption === "z-a") {
    const finalSortedValue = allstateData.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return finalSortedValue;
  }
};
