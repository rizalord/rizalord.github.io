"use client"

import { Tooltip } from 'flowbite-react'
import React from 'react'

interface ClipEmailButtonProps {
    email: string
}

export default function ClipEmailButton({ email }: ClipEmailButtonProps) {

    return (
        <Tooltip content="Copied to clipboard" trigger="click">
            <button type="button"
                onClick={() => navigator.clipboard.writeText(email)}
                className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span>Copy Email</span>
            </button>
        </Tooltip>
    )
}
