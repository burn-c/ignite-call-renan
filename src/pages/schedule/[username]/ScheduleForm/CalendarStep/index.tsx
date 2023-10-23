import { useState } from 'react'

import { Calendar } from '@/components/Calendar'

import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimerPickerItem,
} from './styles'

export default function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira <span>20 de setembro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>09:00</TimerPickerItem>
            <TimerPickerItem>10:00</TimerPickerItem>
            <TimerPickerItem>11:00</TimerPickerItem>
            <TimerPickerItem>12:00</TimerPickerItem>
            <TimerPickerItem>13:00</TimerPickerItem>
            <TimerPickerItem>14:00</TimerPickerItem>
            <TimerPickerItem>15:00</TimerPickerItem>
            <TimerPickerItem>16:00</TimerPickerItem>
            <TimerPickerItem>17:00</TimerPickerItem>
            <TimerPickerItem>18:00</TimerPickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
