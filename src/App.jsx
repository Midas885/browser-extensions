import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header.jsx';
import Filter from './components/Filter.jsx'
import CardComponents from './components/CardComponents.jsx'
import { useExtensions } from './context/ExtensionsContext.jsx';
import { useMemo } from 'react';


function App() {
  const [filter, setFilter] = useState('All');
  const { extensions } = useExtensions();
  
  const filteredExtensions = useMemo(() => {
    if (filter === 'All') return extensions;
    const status = filter === 'Active';

    return extensions.filter((ex) =>
      ex.isActive === status 
    );
  }, [extensions, filter]);


  return (
    <main className='light-gradiant dark:dark-gradiant min-h-screen
      flex flex-col items-center'>
      <section className='w-93.75 my-6 md:w-3xl lg:w-5xl'>
        <Header />
        <Filter setFilter={setFilter}/>
        <CardComponents extensions={filteredExtensions}/>
      </section>
    </main>
  )
}

export default App
