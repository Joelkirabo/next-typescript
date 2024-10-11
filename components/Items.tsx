

import Item from '@/components/Item'

import {ItemProps } from '@/components/types'

export default function Items(){

    const items:ItemProps[] = [
        {
            src: "/image1.jpg",
            title:'Tecno Spark 20 -6.6" 8GB RAM',
            discountprice: 420000,
            normalprice: 600000,
            itemsleft: 15,
            discount: 30
        }, 
        {
            src: "/image2.jpg",
            title:'Itel A70 - 6.6" HD + 8GB RAM',
            discountprice: 284000,
            normalprice: 450000,
            itemsleft: 17,
            discount: 37
        }, 
        {
            src: "/image3.jpg",
            title:'Oale POP 8 PRO - 4GB 6.6"',
            discountprice: 245000,
            normalprice: 500000,
            itemsleft: 32,
            discount: 51
        }, 
        {
            src: "/image4.jpg",
            title:'SIMI C1 4G Smartphone',
            discountprice: 296000,
            normalprice: 435000,
            itemsleft: 41,
            discount: 32
        }, 
        {
            src: "/image5.jpg",
            title:'Redmi 13C 6.74" 8GB RAM',
            discountprice: 380000,
            normalprice: 405000,
            itemsleft: 15,
            discount: 6
        }, 
        {
            src: "/image6.jpg",
            title:'Tecno Pop 8 - 6.6" 3GB RAM',
            discountprice: 420000,
            normalprice: 600000,
            itemsleft: 15,
            discount: 30
        },  
        {
            src: "/image6.jpg",
            title:'Tecno Pop 8 - 6.6" 3GB RAM',
            discountprice: 420000,
            normalprice: 600000,
            itemsleft: 15,
            discount: 30
        },  
        {
            src: "/image6.jpg",
            title:'Tecno Pop 8 - 6.6" 3GB RAM',
            discountprice: 420000,
            normalprice: 600000,
            itemsleft: 15,
            discount: 30
        },  
    
      
    ]
    return(

        <div className='p-3'>
            <Item items = {items}/>
        </div>
    )
}