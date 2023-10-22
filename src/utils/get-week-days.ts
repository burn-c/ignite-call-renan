function captalize(string: string, numberOfLetters: number) {
  return (
    string.substring(0, numberOfLetters).toUpperCase() +
    string.substring(numberOfLetters + 1)
  )
}

export function getWeekDays(short = false) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const arrayDays = Array.from(Array(7).keys()).map(
    (day) => formatter.format(new Date(Date.UTC(2021, 5, day))), // Data precisa iniciar no primeiro dia da semana ( Domingo)
  )

  if (short) {
    return arrayDays.map((day) => captalize(day, 3).substring(0, 3))
  }

  return arrayDays.map((day) => captalize(day, 1))
}
