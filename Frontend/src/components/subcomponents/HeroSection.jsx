import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero flex flex-col bg-[url('/main.jpg')]  bg-cover">
  <section className="w-full rounded-2xl h-[450px] bg-cover bg-center bg-no-repeat bg-blend-darken flex flex-col justify-center pl-24 gap-2 md:pl-10 sm:pl-5" >
    <h4 className="text-red-600 text-2xl font-medium sm:text-xl">Trending Now</h4>
    <h2 className="text-black text-4xl font-bold w-[450px] sm:text-3xl sm:w-full">Mike's famous salad with cheese</h2>
    <p className="text-black text-2xl font-normal sm:text-xl">-By John Mike</p>
  </section>
</div>
  )
}

export default HeroSection