export const sort = (arr, value) => {
    switch (value) {
        case 'asc': return [...arr].sort((a, b) => {return a.id - b.id}) ;
        case 'desc': return [...arr].sort((a, b) => {return b.id - a.id});
        case 'title': return [...arr].sort((a, b) => a[value].localeCompare(b[value]));
        default: return [...arr].sort((a, b) => {return a.id - b.id});
    }   
}