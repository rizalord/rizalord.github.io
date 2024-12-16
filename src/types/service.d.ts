interface Service {
    name: string;
    icon: string;
}

interface ServiceData {
    name: string;
    services: Service[];
}

export type { Service, ServiceData };