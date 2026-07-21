import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.svg';
import DarkLogo from '../assets/images/dark-logo.svg';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSun from '../assets/images/icon-sun.svg';





export default function Header () {
    
    const [isDark, setIsDark] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');     
        return savedMode === 'true';
    });


    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.setItem('themeMode', isDark);
    }, [isDark]);

    const handleDartMode = () => {
        setIsDark(!isDark); 
    }

    return (
        <header className='bg-Neutral-0 dark:bg-Neutral-800 
            py-3 px-4 mx-4 mb-12 rounded-2xl flex flex-row place-content-center 
            justify-between shadow-sm'>
            <img className='' src={ isDark ? DarkLogo : Logo } alt="Logo de Browser Extensions" />
            
           <button
                type='submit'
                onClick={handleDartMode}
                className='bg-Neutral-100 dark:bg-Neutral-700 
                    size-12.5 grid place-content-center cursor-pointer 
                    rounded-xl hover:bg-Neutral-200 dark:hover:bg-Neutral-600 
                    focus:ring focus:ring-Red-700 dark:focus:ring-2'
           >
            
                <img src={isDark ? IconSun : IconMoon} alt="Button theme" />     
           </button>
        </header>
    );
}