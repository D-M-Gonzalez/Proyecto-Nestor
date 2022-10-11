import React from 'react';

export interface INavigate {
    Navigate: (param: string) => any;
}

export default function Navigate(URL: string) {
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
            rURL = 'https://google.com/';
            break;
        case 'INSTAGRAM':
            rURL = 'https://google.com/';
            break;
        case 'TWITTER':
            rURL = 'https://google.com/';
            break;
        case 'LINKEDIN':
            rURL = 'https://google.com/';
            break;
        case 'WHATSAPP':
            rURL = 'https://google.com/';
            break;
        default:
            break;
    }
    return rURL;
}
