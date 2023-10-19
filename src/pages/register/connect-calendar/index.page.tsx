import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Burn Call!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente às horas
          ocupadas e seus novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button variant="secondary" onClick={() => signIn('google')}>
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
