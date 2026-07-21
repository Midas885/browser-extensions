





import Card from './Card'

export default function CardComponents({extensions, setExtensions}) {
  return (
    <section id='extensions' className='mx-4 grid md:grid-cols-2 gap-2 lg:grid-cols-3 '>
        {extensions.map(
          (extension) => <Card 
          key={extension.name} 
          {...extension}/>
        )}
    </section>
  )
}
