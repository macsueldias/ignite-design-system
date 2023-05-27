import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@i9-design-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
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
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: <Button>Add</Button>,
    title: 'Usuário adicionado com sucesso!',
    description: 'Macsuel, Piracicaba-SP',
  },
}
