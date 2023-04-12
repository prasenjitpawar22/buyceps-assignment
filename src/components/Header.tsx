import { BiLinkExternal } from 'react-icons/bi'

const Header = () => {
    return (
        <div className="text-slate-700 text-sm p-2 hover:underline flex items-center font-bold">
            <a href="https://github.com/prasenjitpawar22/buyceps-assignment"
                target="_blank" rel="noopener noreferrer"
            >
                Developed by @prasenjitpawar22
            </a>
            <BiLinkExternal size={10} />
        </div >
    )
}

export default Header