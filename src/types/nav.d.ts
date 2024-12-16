interface MenuItem {
    home: boolean
    about: boolean
    portfolio: boolean
    contact: boolean
}

interface Header {
    title: string;
    menu: MenuItem;
}

interface Nav {
    header: Header;
    footer_text: string;
    footer_designer: string;
    footer_link: string;
}

export type { MenuItem, Header, Nav };