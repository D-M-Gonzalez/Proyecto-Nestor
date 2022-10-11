import React from 'react';

export interface INavigate {
    Navigate: (param: string) => any;
}

export default function Navigate(URL: string, text?: string) {
    let rURL: String = '';
    switch (URL) {
        case 'HOME':
            rURL = '/';
            break;
        case 'ABOUT-US':
            rURL = '/about-us';
            break;
        case 'SERVICES':
            rURL = '/services';
            break;
        case 'CONTACT':
            rURL = '/contact';
            break;
        case 'FACEBOOK':
            rURL = 'https://www.facebook.com/we.dreamdoit';
            break;
        case 'INSTAGRAM':
            rURL = 'https://www.instagram.com/we.dreamdoit/';
            break;
        case 'TWITTER':
            rURL = 'https://twitter.com/we_dreamdoit';
            break;
        case 'LINKEDIN':
            rURL = 'https://www.linkedin.com/company/dream-doit/';
            break;
        case 'WHATSAPP':
            rURL = `https://wa.me/+5491130748591/?text=${text}`;
            break;
        default:
            break;
    }
    return rURL;
}
