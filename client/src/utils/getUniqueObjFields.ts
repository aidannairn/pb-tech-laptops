  /** 
   * Return a new array of unique field values.
   * @param field - The object property within the array that you want to compare.
   * @param array - The array that contains objects with the chosen property.
  */
   const getUniqueObjFields = (field: string, array: any[]) => {
    const uniqueItems: string[] = []
    array.map((item: any) => {
      if (uniqueItems.indexOf(item[field]) === -1) {
        uniqueItems.push(item[field])
      }
    })
    return uniqueItems
  }

  export default getUniqueObjFields