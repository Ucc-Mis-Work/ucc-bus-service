import React from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import Mintitle from '../../typo/Mintitle'

export default function BookingTips() {
  return (
    <div className='adjust mb-5'>
        <Title
            text={'Booking Tips'}
            otherStyles={'mb-2'}
        />

        <div className='adjus'>
            <ul className='border-s p-3 ms-0 flex flex-col md:flex-row'>
                <li className='relative mb-10 ms-4'>
                        <div className='w-4 h-4 rounded-full bg-primary absolute mt-1.5 -start-[36px]'></div>

                        <Mintitle
                            text={'Step 1'}
                            otherStyles={'mb-5 font-semibold'}
                        />
                        <Subs
                            text={'Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.'}
                            otherStyles={'pl-5'}
                        />
                </li>
                <li className='relative mb-10 ms-4'>
                        <div className='w-4 h-4 rounded-full bg-primary absolute mt-1.5 -start-[36px]'></div>

                        <Mintitle
                            text={'Step 2'}
                            otherStyles={'mb-5 font-semibold'}
                        />
                        <Subs
                            text={'Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.'}
                            otherStyles={'pl-5'}
                        />
                </li>
                <li className='relative mb-10 ms-4'>
                        <div className='w-4 h-4 rounded-full bg-primary absolute mt-1.5 -start-[36px]'></div>

                        <Mintitle
                            text={'Step 3'}
                            otherStyles={'mb-5 font-semibold'}
                        />
                        <Subs
                            text={'Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.'}
                            otherStyles={'pl-5'}
                        />
                </li>
            </ul>
        </div>

    </div>
  )
}
