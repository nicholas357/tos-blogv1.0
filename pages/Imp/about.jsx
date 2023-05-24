

const About = () => {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-meduim title-font mb-4 text-900" style={{
        color: 'whitesmoke', fontWeight: 'bolder'
      }}>
            About Us!
           </h1>

          <br></br>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
      style={{
        color: 'whitesmoke', fontWeight: "bold"
      }}
      >
            Welcome To TOS-BLOG
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"
          style={{
            color: 'whitesmoke', fontWeight: "normal", fontSize: "20px"
          }}
          
          >
            TOS-BLOG is a Professional Blog Platform. Here we will provide you only interesting content, which you will like very much.
             We're dedicated to providing you the best Blog, with focus on dependability and Articles. We're working to turn our passion for Blog 
             into a booming online website. We hope you enjoy our Blog as much as we enjoy offering them to you.           
             </p>     
      </div>
      <div className='flex flex-col text-center w-full mb-12'
                style={{
                    color: 'whitesmoke', fontWeight: "normal", fontSize: "20px"
                  }}
      >
          We will keep posting more important posts on our Website for all of you. Please give your support and love.
      </div>
      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900 text-center"
      style={{
        color: 'whitesmoke', fontWeight: 'bolder'
      }}
      >For queries: bizzmeiin@gmail.com</h1>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            </div>
      </section>
    </div>
  )
}

export default About