interface UniqueItem {
  name: string
  isChecked: boolean
}
/** 
 * Return a new array of objects with unique field values and sets an `isChecked` property to true.
 * @param field - The object property within the array that you want to compare.
 * @param array - The array that contains objects with the chosen property.
*/
  const getUniqueObjFields = (field: string, array: any[]) => {
  const uniqueItems: UniqueItem[] = []
  array.map((item: any) => {
    if ((uniqueItems.findIndex((uItem: any) => uItem.name === item[field])) === -1) {
      uniqueItems.push({
        name: item[field],
        isChecked: true
      })
    }
  })
  return uniqueItems
}

export default getUniqueObjFields