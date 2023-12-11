export const uniqItems = (items: string[]): string[] => {
    return items.filter((value, index, array) => array.indexOf(value) === index);
}