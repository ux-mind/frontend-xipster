export const getObjectIf = <T = {}>(condition: boolean, object: T) => condition ? object : {};
