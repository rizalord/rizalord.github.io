interface Count {
    label: string
    count: string
}

interface DescriptionText {
    type: "normal" | "bold"
    text: string
}

interface About {
    prefix: string
    name: string
    description: DescriptionText[]
    counts: Count[]
    available: boolean
}

export type { Count, About }