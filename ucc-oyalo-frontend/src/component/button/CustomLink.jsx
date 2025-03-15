import { Link } from "react-router-dom"

export const CustomLink = ({icon,name,link})=>{
    return (
        <Link to={link} className='inline-grid min-w-max'>
            <h1 className='py-3 px-6 bg-yellow-400 hover:bg-yellow-400/80 rounded-2xl flex items-center gap-2 group font-medium hover:text-gray-600 text-blue-900 text-sm'>
                {icon}
                {name}
            </h1>
        </Link>
    )
}
