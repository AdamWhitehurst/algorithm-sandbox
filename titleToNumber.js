function titleToNumber (s) {
    if (s.length === 1) return s.charCodeAt(0) - 64;
    return 26 * titleToNumber(s.substring(0,s.length-1)) + (s.charCodeAt(s.length-1) - 64);
}
