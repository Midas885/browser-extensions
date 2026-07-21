
import { useState } from "react";
import Button from "./Button"




export default function Filter({ filter, setFilter}) {

  const [selectedFilter, setSelectedFilter] = useState('All')

  const handleClick = (event) => {
    setFilter(event.target.textContent);
    setSelectedFilter(event.target.textContent);
  }

  return (
    <section className=" flex flex-col items-center m-4 md:flex-row justify-between">
      <h2 className="text-Neutral-900 dark:text-neutral-50
        text-xl font-bold mb-1.5 ">Extension List</h2>
      <div className="flex gap-2">
        <Button seleceted={selectedFilter === 'All'} onClick={handleClick} >All</Button>
        <Button seleceted={selectedFilter === 'Active'} onClick={handleClick} >Active</Button>
        <Button seleceted={selectedFilter === 'Inactive'} onClick={handleClick} >Inactive</Button>
      </div>
    </section>
  )
}
