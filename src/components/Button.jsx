





export default function Button({children, textSmall, seleceted, onClick}) {

    return (
        <button 
            onClick={onClick}
            className={
                `grid place-content-center border dark:border-2 cursor-pointer
                px-4  rounded-full border-Neutral-300 dark:border-Neutral-600 
                focus:ring dark:focus:ring-2 focus:ring-red-700
                ${textSmall ? 'py-1' : 'py-2'} 
                
                ${seleceted  ? 'bg-Red-500 text-Neutral-0 dark:text-Neutral-800' 
                    : 'bg-Neutral-0 dark:bg-Neutral-700 dark:text-Neutral-300'  }
            `}>
            {children}
        </button>
    )
}