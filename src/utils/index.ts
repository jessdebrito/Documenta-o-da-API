export const titlelify = (value: string) => {
    
    return value.toLowerCase().split(' ').map(function (s) {
        return s.charAt(0).toUpperCase() + s.substring(1)
    }).join(' ')
}