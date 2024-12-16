export function removeWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
}

export function removeNonAlphaNumeric(str: string): string {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

export function normalizeDiacritics(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function stripHtmlTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

export function collapseWhitespace(str: string): string {
    return str.replace(/\s+/g, ' ').trim();
}

export function removePunctuation(str: string): string {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
