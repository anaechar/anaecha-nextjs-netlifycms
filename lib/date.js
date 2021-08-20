export default function unixToDate(unix) {
    var unixMs = new Date(unix*1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = unixMs.getFullYear().toString().substr(-2);
    var month = months[unixMs.getMonth()];
    var date = unixMs.getDate();
    var displayedDate = date + ' ' + month + ' ' + year;
    return displayedDate;
};