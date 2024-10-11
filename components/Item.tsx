import Image from 'next/image'
import {ItemProps } from '@/components/types'

export default function Item({items}:{items:ItemProps[]}){
    return (
        <div className='flex flex-wrap justify-start bg-white gap-1 py-0 px-3'>
        {
            items.map((item,i)=>{
                return(
                    <div key={i} className='w-[150px] py-2 font-sans relative border border-gray-100 shadow-sm'>
                        <div className='absolute bg-orange-50 text-orange-500 rounded right-0 top-5'>-{item.discount}%</div>
                        <Image src={`${item.src}`} alt={item.title} width={100} height={150}  className='w-full'/>
                        <div className='flex flex-col text-sm p-2 gap-2'>
                            <div className='text-gray-500 truncate'>{item.title}</div>
                            <div className='font-bold text-gray-800 text-sm tracking-wider '>UGX {item.discountprice}</div>
                            <div className='text-sm text-gray-500 tracking-wider line-through'>UGX {item.normalprice}</div>
                            <div className='text-gray-500'>{item.itemsleft} items left</div>
                            <div className='bg-orange-500 h-1 rounded-full'></div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}