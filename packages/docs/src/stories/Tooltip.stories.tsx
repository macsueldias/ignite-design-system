import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from '@i9-design-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: { text: 'Macsuel', children: 'Tooltip' },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: 'Tooltip',
    title: 'Macsuel',
  },
}
