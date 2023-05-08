const fakeItems = (length: number, render: (index: number) => any) => {
  return [...new Array(length)].map((_, index) => render(index));
};
export default fakeItems;
