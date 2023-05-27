import React from 'react'
import {
  IconButton,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps {
  children?: React.ReactNode
  title: string
}

export const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <IconButton>{children}</IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {title}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
