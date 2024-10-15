
interface HeaderProps{
    title: string;
    description?: string
}

function Header({title , description = ''}:HeaderProps){

    document.title = `Food Commerce | ${title}`
    document.querySelector('[name=description]')?.setAttribute('content' , description)

    return null

}

export default Header