function captalize(string: string) {
  return string[0].toUpperCase() + string.substring(1)
}

export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const arrayDays = Array.from(Array(7).keys()).map(
    (day) => formatter.format(new Date(Date.UTC(2021, 5, day))), // Data precisa iniciar no primeiro dia da semana ( Domingo)
  )

  return arrayDays.map((day) => captalize(day))
}
