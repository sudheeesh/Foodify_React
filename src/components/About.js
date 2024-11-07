const data = [
    {
        name : 'Customer comes First',
        review : "Customers are first in the sense that its all about them, and satisfying their needs, desires and requirements. It means being fair to them and treating them with respect. Going the extra mile for customers is a natural extension of taking their interests in mind, because you want them to be happy with your products or services.",
        img : 'https://t3.ftcdn.net/jpg/00/72/31/86/240_F_72318607_t99JWMBSY6Iqm3RYu8XevwchSulPNDf6.jpg'
   },
   {
        name : 'Our riders are our Heroes',
        review : 'But being a good rider is not just about riding a scooter and delivering food; it also requires certain soft skills. Dealing with lots of orders and sometimes grumpy customers who are hungry is not easy at all. It takes a lot of patience and quick thinking to be a successful rider.',
        img : 'https://as2.ftcdn.net/v2/jpg/03/48/98/33/1000_F_348983394_32F5WZ7UVB2nVVtPVPwL6DHjqjLvHOcB.jpg'
   },
   {
        name : 'Growing with out partners',
        review : 'Restaurant partnerships yield benefits that directly contribute to business growth. Most significantly, your partner will promote your restaurant to their audience, boosting brand credibility and awareness.',
        img: 'https://as1.ftcdn.net/v2/jpg/02/54/76/08/1000_F_254760897_gYhhVTZB86BW6HM45lYH66yti0I2BKgi.jpg'
   }
]


const About = () => {

    return(
        <div className="">
          <div className="p-72 m-auto bg-[url('https://as2.ftcdn.net/v2/jpg/03/08/48/85/1000_F_308488590_GYIV6Z7VOHabqca81SEqHFRYI0g4SYIZ.jpg')] bg-cover w-full h-full bg-no-repeat">
            <h1 className=" font-serif text-6xl font-medium absolute top-32 left-3/4 bg-cover custom bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-purple-700 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</h1>
            <h1 className="font-serif text-6xl mt-5 font-medium absolute top-44 left-[60%] bg-cover custom bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-purple-700 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Jumba Foods</h1>
          </div>
          <div className="p-10">
            <h1 className="text-5xl">From food delivery to your daily convenience companion.</h1>
            <p className="p-3 text-lg mt-8">A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.</p>

              <p className="p-3 text-lg"> Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.</p>

               <p className="p-3 text-lg">Thanks to dedicated partners, riders, and a team united by shared values,  foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.</p>
          </div>
        <div className="w-3/4 m-auto">
           <div className="mt-20">
            {data.map((d) => (
            <div className="bg-slate-200 shadow-lg h-60 text-black rounded-xl flex mb-5">
              <div className="flex flex-col gap-4 p-4">
                <p className="text-2xl font-serif font-medium">{d.name}</p>
                <p className="text-balance font-sans text-sm">{d.review}</p>
              </div>

              <div className="w-11/12 flex justify-end ">
                <img src={d.img} alt="" className='h-60 w-60 rounded-lg '/>
              </div>
           </div> 
            ))}
          </div>
          </div>
        </div>
         )
       

   }
  

export default About