export const mergeObjects = (
    ...objects: { [key: string]: string | number }[]
): { [key: string]: string | number } => {
    return objects
        .filter(obj => Object.values(obj)[0] !== undefined)
        .reduce((a, b) => ({ ...a, ...b }));
};
