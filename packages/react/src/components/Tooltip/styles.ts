import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipPortal = styled(Tooltip.Content, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const IconButton = styled('button', {
  all: 'unset',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  padding: '.625rem 1rem',
  borderRadius: 4,
})
