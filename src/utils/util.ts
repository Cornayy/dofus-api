/**
 * Merges objects together, this is used to merge optional arguments in GraphQL queries.
 */
export const mergeObjects = (...objects: { [key: string]: any }[]): { [key: string]: any } => {
    const objs = objects.filter(obj => Object.values(obj)[0] !== undefined);

    if (objs.length > 0) {
        return objs.reduce((a, b) => ({ ...a, ...b }));
    }

    return {};
};
