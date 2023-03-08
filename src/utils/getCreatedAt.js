const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0'); // add "0" next to first digit
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // add "0" next to first digit
    const year = date.getFullYear().toString(); // Get the year as a string
    const hh = date.getHours().toString().padStart(2, '0') //hours
    const mm = date.getMinutes().toString().padStart(2, '0')// minutes
    const ss = date.getSeconds().toString().padStart(2, '0')// seconeds

    return `${day}/${month}/${year} (${hh}:${mm}:${ss}) `; // return the date
}

export default getDate;