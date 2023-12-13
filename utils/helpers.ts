export const uniqItems = (items: string[]): string[] => {
    return items.filter((value, index, array) => array.indexOf(value) === index);
}

export const formatter = new Intl.NumberFormat();

export const setApi = (api: string, pageId: string) => {
    return api.replace(/{[^}]*}/g, pageId);
};