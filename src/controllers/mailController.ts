export function sendMail(data: any, subject: string) {
    if (subject === 'contact') {
        const emailTo = 'contacto@dream-doit.com';
        const emailSubject = 'Contacto' + ' ' + data.name;
        const emailBody = `${data.comments}, Mi teléfono es: ${data.phone}, Mi email es: ${data.email}`;

        window.open('mailto:' + emailTo + '?cc=' + '' + '&subject=' + emailSubject + '&body=' + emailBody);
    } else if (subject === 'work') {
        const emailTo = 'contacto@dream-doit.com';
        const emailSubject = 'Trabajo' + ' ' + data.name;
        const emailBody = `${data.cover}, Mi teléfono es: ${data.phone}, Mi email es: ${data.email}, Mi linkedin es: ${data.linkedin}, Mi portafolio es: ${data.portfolio}`;

        window.open('mailto:' + emailTo + '?cc=' + '' + '&subject=' + emailSubject + '&body=' + emailBody);
    }
}
