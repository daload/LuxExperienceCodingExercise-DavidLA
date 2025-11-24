export const toSnakeCase = (camelCaseString: string) => {
    return camelCaseString.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
}