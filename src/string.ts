export function isBlank(str: string | undefined) {
    if (str == undefined) {
        return true;
    }
    return str.trim().length === 0;
}

export function isNotBlank(str: string | undefined) {
    return !isBlank(str);
}

export function isEmpty(str: string | undefined) {
    if (str == undefined) {
        return true;
    }
    return str.length === 0;
}

export function isNotEmpty(str: string | undefined) {
    return !isEmpty(str);
}