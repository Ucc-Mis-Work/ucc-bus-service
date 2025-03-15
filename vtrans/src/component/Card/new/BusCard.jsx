import { CarFrontIcon, KeySquare, PenIcon, Trash, User2 } from "lucide-react"

export const BusCard = ({car_plate,capacity,type,handleEdit,setexpand,expand})=>{
    return(
        <button className='p-3 bg-gray-100 rounded-xl flex items-start justify-between w-full gap-6 mb-2'>
            <div className='flex-1' onClick={()=> setexpand()}>
                <h1 className='flex items-center text-sm gap-2 text-primary font-medium mb-1'><KeySquare className=''/>{car_plate}</h1>

                {expand && <div>
                    <hr className='my-3'/>

                    <h1 className='text-sm font-medium flex gap-2 mb-2'><User2 className='size-5'/>Capacity:
                    <span className='font-semibold mx-1 text-blue-800'>
                        {capacity}
                    </span>
                </h1>

                <h1 className='text-sm font-medium flex gap-2'><CarFrontIcon className='size-5'/>Vehicle Type:
                    <span className='font-semibold mx-1 text-blue-800'>
                        {type}
                    </span>
                </h1>
                    </div>
                }


            </div>

            <div className='space-x-2'>
                <button className='p-2 bg-blue-200 rounded-xl' onClick={handleEdit}>
                    <PenIcon className='size-4 text-blue-700'/>
                </button>
                <button className='p-2 bg-red-200 rounded-xl'>
                    <Trash className='size-4 text-red-700'/>
                </button>

            </div>
        </button>
    )
}
