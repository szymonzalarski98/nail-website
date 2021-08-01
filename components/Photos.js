import Image from "next/image";

export const Photos = () => {
  return (
    <div className="container mx-auto px-4"> 
      <section className="px-4 2xl:hidden">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
        </div>
      </section>
      <section className="hidden px-4 2xl:block">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
        </div>
      </section>
    </div>
  )
}