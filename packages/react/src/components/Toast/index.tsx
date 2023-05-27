import React, {
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
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

export interface ToastRef {
  open: () => void
}

const Component: ForwardRefRenderFunction<ToastRef, ToastProps> = (
  { title, description, duration, position, children }: ToastProps,
  ref: any,
) => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  const handleClick = (): void => {
    setOpen(false)

    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  useImperativeHandle(ref, () => ({ open: handleClick }), [])

  return (
    <ToastProvider duration={duration} swipeDirection={position}>
      {children}
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

export const Toast = forwardRef(Component)
