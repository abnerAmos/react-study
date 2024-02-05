export function timeToSeconds(time: string) {
  const [hour = '0', min = '0', sec = '0'] = time.split(':')

  const hourToMinutes = Number(hour) * 3600
  const minutesToSeconds = Number(min) * 60
  return hourToMinutes + minutesToSeconds + Number(sec)
}