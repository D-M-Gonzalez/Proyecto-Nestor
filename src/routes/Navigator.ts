export interface INavigate {
    Navigate: (param:string) => string
}

export default function Navigate(URL:string){
    let rURL:String = ""
    switch (URL){
        case 'HOME':
            rURL = '/home'
            break
        case 'ABOUT_US':
            rURL = '/about_us'
            break
        case 'OUR_SERVICES':
            rURL = '/our_services'
            break
        case 'CONTACT':
            rURL = '/contact'
            break
        default:
            break
    }
    return rURL
}