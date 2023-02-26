export const convertDate = (data) => {
    const d = new Date(data);
    const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let month = monthName[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    return `${month} ${day}, ${year}`;
};

export const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
