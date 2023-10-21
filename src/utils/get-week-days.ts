function captalize(string: string) {
  return string[0].toUpperCase() + string.substring(1)
}

export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const arrayDays = Array.from(Array(7).keys()).map((day) =>
    formatter.format(new Date(Date.UTC(2023, 5, day))),
  )

  return arrayDays.map((day) => captalize(day))
}
