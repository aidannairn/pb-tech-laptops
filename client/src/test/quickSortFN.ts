export const quickSort = (array: any[] = []): any => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr: any[] = [];
  const rightArr: any[] = [];

  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
