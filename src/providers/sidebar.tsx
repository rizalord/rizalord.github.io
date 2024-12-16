"use client"

import { createContext, useState } from 'react'

export interface SidebarContextType {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    toggle: () => void
}

export const SidebarContext = createContext<SidebarContextType | null>(null)

export default function SidebarProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>
            {children}
        </SidebarContext.Provider>
    )
}