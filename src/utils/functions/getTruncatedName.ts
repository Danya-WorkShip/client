export const getTruncatedName = (name: string, nameLength: number) => {
    if (name.length > nameLength) {
        return name.substring(0,nameLength) + '...';
    } else {
        return name;
    }
}