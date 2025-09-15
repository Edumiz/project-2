export default function FormatDate(date: string) {
    const parts = date.split('-')

    if (Number(parts[1]) < 10) {
        parts[1] = '0' + parts[1]
    }

    if (Number(parts[2]) < 10) {
        parts[2] = '0' + parts[2]
    }

    const newDate = parts.join('-')

    return newDate
}