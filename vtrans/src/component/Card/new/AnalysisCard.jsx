

export const AnalysisCard = ({icon,title,value,color})=>{
    return (
        <div className='flex flex-col bg-white rounded-2xl shadow p-4 gap-2'>
            <div className={`p-2 ${color} rounded-lg max-w-min`}>
                {icon}
            </div>
            <p className='text-xs md:text-sm font-montserrat text-gray-600'>{title}</p>
            <p className='font-poppins font-semibold text-lg md:text-2xl'>{value}</p>
        </div>
    )
}
