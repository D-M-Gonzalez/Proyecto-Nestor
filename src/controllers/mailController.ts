export function sendMail(data: any, subject: string) {
    console.log(data);

    const emailTo = 'contacto@dream-doit.com';
    const emailSubject = subject;
    const emailBody = `
Nestor:

${data.comments}

Mi teléfono es: ${data.phone}

Saludos, ${data.name}
`;

    window.open('mailto:' + emailTo + '?cc=' + '' + '&subject=' + emailSubject + '&body=' + emailBody);
}
