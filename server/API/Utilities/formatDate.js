function formatEventDate(inputDate) {
    const eventDate = new Date(inputDate);
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const dayOfWeek = daysOfWeek[eventDate.getUTCDay()];
    const dayOfMonth = eventDate.getUTCDate();
    const month = monthNames[eventDate.getUTCMonth()];
    const year = eventDate.getUTCFullYear();
  
    const formattedDate = `${dayOfWeek} ${dayOfMonth}${getDayOfMonthSuffix(dayOfMonth)} ${month} ${year}`;
  
    function getDayOfMonthSuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  
    return formattedDate;
  }

  module.exports = formatEventDate