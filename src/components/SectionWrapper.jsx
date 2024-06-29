import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title, id } = props
    const defaultTitle = title || ['', '', ''];
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4'>
                <p className='uppercase font-medium'>{header}</p>
                {Array.isArray(defaultTitle) && defaultTitle.length >= 3 ? (
                    <h2 className = 'font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{defaultTitle[0]} <span className='uppercase text-blue-400'>{defaultTitle[1]}</span> {defaultTitle[2]}</h2>
                ) : (
                    <h2 className = 'font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Default Title</h2> // Fallback title
                )}
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 '>
                {children}
            </div>
        </section>
    )
}

