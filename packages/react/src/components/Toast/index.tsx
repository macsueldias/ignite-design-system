import React, { useRef, useState } from 'react'
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  duration?: number
  position?: 'up' | 'down' | 'left' | 'right'
  children: React.ReactNode
}

export const Component = ({
  title,
  description,
  duration,
  position,
  children,
}: ToastProps) => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  const handleClick = (): void => {
    setOpen(false)

    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  return (
    <ToastProvider duration={duration} swipeDirection={position}>
      <button style={{ all: 'unset', cursor: 'pointer' }} onClick={handleClick}>
        {children}
      </button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText="Fechar">
          <X size={18} color="#A9A9B2" />
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

Component.displayName = 'Toast'
