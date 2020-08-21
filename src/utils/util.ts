/**
 * Merges objects together, this is used to merge optional arguments in GraphQL queries.
 */
export const mergeObjects = (
    ...objects: { [key: string]: string | number }[]
): { [key: string]: string | number } => {
    return objects
        .filter(obj => Object.values(obj)[0] !== undefined)
        .reduce((a, b) => ({ ...a, ...b }));
};
