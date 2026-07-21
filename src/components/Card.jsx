


import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';


import Button from "./Button"
import { useExtensions } from '../context/ExtensionsContext.jsx';

export default function Card({ logo, name, description, isActive}) {
    const { toggleExtensionStatus, removeExtension } = useExtensions();

    return (
        <div className=" p-5 bg-Neutral-0 border border-Neutral-200
            rounded-2xl dark:border-Neutral-700 dark:bg-Neutral-800 shadow-sm
            flex flex-col justify-between">
            <div className="flex flex-row gap-3 items-start pb-5 ">
                <img src={logo} alt="" />
                <div>
                    <h2 className="text-xl font-bold text-Neutral-900
                        dark:text-Neutral-0 ">{name}</h2>
                    <p className="text-Neutral-400 dark:text-Neutral-300 text-[16px] ">{description}</p>
                </div>
                
            </div>
            <div className='flex justify-between'>
                <Button textSmall onClick={() => removeExtension(name)} >Remove</Button> 
                <Toggle 
                    onClick={ () => toggleExtensionStatus(name)} 
                    className=' focus:border focus:border-Neutral-600 focus:ring focus:ring-Red-700'
                    color='red' checked={isActive} >

                </Toggle>
            </div>
        </div>
    )
}
