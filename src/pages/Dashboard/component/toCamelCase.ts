export default function toCamelCase(str: string) {
    const split = str.split(' ')
    split[0] = split[0].toLowerCase()
    for (let i = 1; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
    }
    return split.join('');
}