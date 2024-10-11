
import {CategoriesProps} from '@/components/types';
import Category from './Category';


export default function Categories(){


    const categories:CategoriesProps[] = [
        {
            title:"Phone Tober Test",
            src:"/PhoneToberFest_THUMBNAILS_300x300.gif",
        },
        {
            title:"Appliances",
            src:"/PTF_THUMBNAILS_Appliances_300x300.gif",
        },
        {
            title:"Discount check",
            src:"/PTF_THUMBNAILS_Computing_300x300.gif",
        },
        {
            title:"Televisions",
            src:"/PTF_THUMBNAILS_Health_Beauty_300x300.gif",
        },
        {
            title:"New Arrivals",
            src:"/PTF_THUMBNAILS_Jumia_Picks_300x300.gif",
        },
        {
            title:"Super Saver Sale",
            src:"/PTF_THUMBNAILS_New_arrivals_300x300.gif",
        },
        {
            title:"Phone Tober Test",
            src:"/PTF_THUMBNAILS_Shipped_from_abroad_300x300.gif",
        },
        {
            title:"Health And Beauty",
            src:"/PTF_THUMBNAILS_Televisions_300x300.gif",
        },
        {
            title:"JFORCE",
            src:"/PTF_THUMBNAIsLS_2_300x300.gif",
        },
    ]
    return (
        
        <div className='flex font-sans gap-5 flex-wrap text-xs p-5'>
            <Category categories = {categories} />
    

        </div>
    )
}