export function handleDateFormat (date) {
  const myDate = date || ''
  if (myDate) {
    let time = myDate.split('-')
    switch (time[1]) {
      case '01':
        time[1] = 'January'
        break
      case '02':
        time[1] = 'February'
        break
      case '03':
        time[1] = 'March'
        break
      case '04':
        time[1] = 'April'
        break
      case '05':
        time[1] = 'May'
        break
      case '06':
        time[1] = 'June'
        break
      case '07':
        time[1] = 'July'
        break
      case '08':
        time[1] = 'August'
        break
      case '09':
        time[1] = 'September'
        break
      case '10':
        time[1] = 'October'
        break
      case '11':
        time[1] = 'November'
        break
      case '12':
        time[1] = 'December'
        break
    }
    return time[2] + ' ' + time[1] + ' ' + time[0]
  }
  return myDate
}

export const months = [
  'Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'September',
  'October',
  'November',
  'December'
]

export const days = ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

export function years () {
  const years = ['Years']
  for (let year = 2018; year >= 1897; year--) {
    years.push(year)
  }
  return years
}
