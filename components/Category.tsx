import Image from 'next/image';
import {CategoriesProps} from '@/components/types';


export default function Category({categories}:{categories:CategoriesProps[]}){
    return(
        <>
        {
            categories.map((category,i)=>{
                return(
                    
                    <div key={i} className='flex flex-col gap-2 items-center'>
                        <Image src={category.src} alt={category.title} width={150} height={150}/>
                        <p>{category.title}</p>
                    </div>
                )
            })
        }
        </>
    )
}