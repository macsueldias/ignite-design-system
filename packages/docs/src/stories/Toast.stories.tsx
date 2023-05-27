import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { Button, Toast, ToastProps, ToastRef } from '@i9-design-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: { text: 'Macsuel', children: 'Tooltip' },
  argTypes: {
    duration: {
      type: 'number',
      default: 6000,
    },
    position: {
      default: 'right',
      control: {
        options: ['up', 'down', 'left', 'right'],
        type: 'inline-radio',
      },
    },
    title: {
      type: 'string',
      description: 'Titulo!',
      defaultValue: 'Adicionado com sucesso!',
    },
    description: {
      type: 'string',
      description: 'Descrição',
      defaultValue: 'usuário Macsuel foi adicionado a lista de clientes!',
    },
  },
  decorators: [
    (Story, { args }) => {
      const toastRef = useRef<ToastRef>({} as ToastRef)

      const handleClick = (): void => toastRef.current.open()

      return (
        <>
          <Button onClick={handleClick}>Add</Button>

          {Story({ args: { ref: toastRef, ...args } })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
