/**
 * Merges objects together, this is used to merge optional arguments in GraphQL queries.
 * If the argument is a string, create a regular expression in order to support querying the database in a LIKE format.
 */
export const mergeArguments = (...objects: { [key: string]: any }[]): { [key: string]: any } => {
    const objs = objects.filter(obj => Object.values(obj)[0] !== undefined);
    const args = objs.map(obj => {
        const property = Object.keys(obj)[0];
        const value = obj[property];

        if (typeof value === 'string') {
            obj[property] = new RegExp(`.*${value}.*`, 'i');
        }

        return obj;
    });

    return objs.length > 0 ? args.reduce((a, b) => ({ ...a, ...b })) : {};
};
