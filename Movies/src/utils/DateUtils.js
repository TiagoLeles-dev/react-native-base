/* eslint-disable no-array-constructor */
export default function getDisplayDate(date) {
  //Check for a valid date obj
  if (typeof date.getMonth === 'function') {
    let month = date.getMonth();
    let day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let months = new Array(
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    );

    let formattedDate =
      day + ' ' + months[month] + ', at ' + hours + ':' + minutes; //12 Aug, at 13:22

    return formattedDate;
  }
}
