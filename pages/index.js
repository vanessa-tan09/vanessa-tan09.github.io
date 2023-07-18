import Head from 'next/head'
import {AiFillHome} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'
import {Carousel, IconButton } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanessa Marie Tan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" font-body px-10 pb-10 bg-palette-beige min-h-screen">
        <nav className="w-full fixed bg-palette-beige top-0 z-50 pt-5 mb-5 flex justify-between flex-wrap gap-y-2">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="text-2xl hover:text-palette-blue-700"><AiFillHome /></a>
            </li>
            <li>
              <a href="#about-me" className=" hover:border-b-2 hover:border-palette-blue-700 font-bold py-2">About Me</a>
            </li>
            <li>
              <a href="#my-projects" className=" hover:border-b-2 hover:border-palette-blue-700 font-bold py-2 ">Projects</a>
            </li>
            <li>
              <a href="#contacts" className=" hover:border-b-2 hover:border-palette-blue-700 font-bold py-2 ">Contact</a>
            </li>
            {/* <li>
              <a href="Vanessa_Resume.pdf" target="_blank" rel="nooppener noreferrer" className=" bg-palette-blue-500 hover:bg-palette-blue-700 px-4 py-2 rounded-md text-white border-none">Download Résumé</a>
            </li> */}
          </ul>
        </nav>

        <section id="about-me" className=' text-center pt-20 max-w-screen-lg  mx-auto'>
          <h2 className=" text-5xl my-2 font-heading text-palette-pink">Vanessa Marie Tan</h2>
          <h3 className=" text-2xl mb-2 font-heading text-palette-pink">Computer Scientist and Certified Public Accountant.</h3>
          <div className='flex justify-center gap-x-10 gap-y-2.5 text-3xl mb-10 text-palette-blue-500'>
            <a href="https://github.com/vanessa-tan09" target="_blank" rel="nooppener noreferrer"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/vanessa-marie-tan/" target="_blank" rel="nooppener noreferrer"><AiFillLinkedin /></a>
          </div>
          <p className=' text-gray-900 font-bold'>
            Passionate and diligent computer scientist and a Certified Public Accountant with 1 year experience at a large accounting firm. Seeking to use my software engineering and finance skills to implement innovative solutions and expand my knowledge of emerging technologies.
          </p>
          <hr className="h-1 my-10 bg-palette-pink border-0 rounded dark:bg-gray-700"/>
        </section>

        <section id="my-projects" className='mt-10 max-w-screen-lg mx-auto'>
          <h2 className=" text-3xl my-5 font-heading text-palette-pink">Projects</h2>

          {/* Brewcipe */}
          <div className=" pl-5 relative w-full">
            <h3 className=" text-xl mb-1 font-heading text-palette-blue-700">Brewcipe (Fullstack Developer)</h3>
            <p className=' text-gray-900 font-bold'>
            Brewcipe is a coffee recipe sharing app. Try out new recipes from fellow coffee aficionados. Or share your own delicious recipe for others to try out.</p>
            <ul className=" pl-5 text-gray-900">
              <li><text className="font-bold">Search:</text> Search for recipes or users by entering keywords in the search bar.</li>
              <li><text className="font-bold">Share recipe:</text> Make your own recipe and share it to fellow coffee enthusiasts.</li>
              <li><text className="font-bold">Bookmark recipe:</text> Found a good recipe you want to try out? Bookmark it to easily find it later.</li>
              <li><text className="font-bold">Comment:</text> Share your thoughts about the recipe to the community.</li>
              <li><text className="font-bold">Like and dislike:</text> Show your approval (or disapproval) for the recipe or comment.</li>
            </ul>
            <Carousel className="rounded-xl w-full"
              prevArrow={({ handlePrev }) => (
              <IconButton variant="text" size="lg" onClick={handlePrev} className="!absolute top-2/4 -translate-y-2/4 left-4 text-palette-gray"> 
                <HiArrowSmLeft className="w-6 h-6"/>
              </IconButton>)}
              
              nextArrow={({ handleNext }) => (
              <IconButton variant="text" size="lg" onClick={handleNext} className="!absolute top-2/4 -translate-y-2/4 !right-4 text-palette-gray"> 
                <HiArrowSmRight className="w-6 h-6"/>
              </IconButton>)}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? "bg-palette-blue-500 w-8" : " bg-palette-gray w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                          /> ))}
                      </div> )}
            >
              <img src="project_images/Brewcipe_1.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Brewcipe_2.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Brewcipe_3.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Brewcipe_4.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Brewcipe_5.png" alt="Budget Builder" className="w-full object-cover"/>
            </Carousel>
            <hr className="h-1 my-10 bg-palette-pink border-0 rounded dark:bg-gray-700"/>
          </div>

          {/* Budget Builder */}
          <div className=" pl-5 relative w-full">
            <h3 className=" text-xl mb-1 font-heading text-palette-blue-700">Budget Builder (Fullstack Developer)</h3>
            <p className=' text-gray-900 font-bold'>
            Budget Builder is a gamified budgeting app. Build and decorate your in-app room by meeting your daily budgeting target.</p>
            <ul className=" pl-5 text-gray-900">
              <li><text className="font-bold">Set Budget:</text> The user is able to set a minimum amount of money deemed as the budget for a timeframe they choose. These timeframes are DAILY and MONTHLY.</li>
              <li><text className="font-bold">Add Expense:</text> Within a day, a user can take note of their expenses and record it into the app.</li>
              <li><text className="font-bold">See Charts:</text> Various charts (such as pie charts) will be shown to give the user a clear visual on their spending habits.</li>
              <li><text className="font-bold">Decorate Rooms:</text> Upon reaching a budget goal, the user is awarded in-game coins. These coins can be used to acquire furniture to decorate the virtual room.</li>
            </ul>
            <Carousel className="rounded-xl w-full"
              
              prevArrow={({ handlePrev }) => (
              <IconButton variant="text" size="lg" onClick={handlePrev} className="!absolute top-2/4 -translate-y-2/4 left-4 text-palette-gray"> 
                <HiArrowSmLeft className="w-6 h-6"/>
              </IconButton>)}
              
              nextArrow={({ handleNext }) => (
              <IconButton variant="text" size="lg" onClick={handleNext} className="!absolute top-2/4 -translate-y-2/4 !right-4 text-palette-gray"> 
                <HiArrowSmRight className="w-6 h-6"/>
              </IconButton>)}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? "bg-palette-blue-500 w-8" : " bg-palette-gray w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                          /> ))}
                      </div> )}
            >
              <img src="project_images/Budget_Builder_1.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Budget_Builder_2.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Budget_Builder_3.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/Budget_Builder_4.png" alt="Budget Builder" className="w-full object-cover"/>
            </Carousel>
            <hr className="h-1 my-10 bg-palette-pink border-0 rounded dark:bg-gray-700"/>
          </div>

          {/* DCC Digital Archives */}
          <div className=" pl-5 relative w-full">
            <h3 className=" text-xl mb-1 font-heading text-palette-blue-700">DCC Digital Archives (Quality Assurance Lead)</h3>
            <p className=' text-gray-900 font-bold'>
            DCC Digital Archives is a tool that enables the Disciples Christian Church to store their records conveniently and safely. Church administrators are able to easily add and retrieve records with little to no training since the application was designed to closely resemble their manual workflow.
            </p>
            <ul className=" pl-5 text-gray-900">
              <li><text className="font-bold">Security roles:</text> Users are required to log in before they can access the database. Roles for each user and the authorization matrix are determined and created by the administrator. </li>
              <li><text className="font-bold">View records:</text> An authorized user can view membership, wedding, dedication, and baptism records.</li>
              <li><text className="font-bold">Add, edit, delete records:</text> An authorized user can add, edit, and delete membership, wedding, dedication, and baptism records. </li>
              <li><text className="font-bold">Search records:</text> An authorized user can search existing records in the database using advanced search fields.</li>
              <li><text className="font-bold">Export records:</text> An authorized user can export existing records into excel, csv, or pdf formats.</li>
            </ul>
            <Carousel className="rounded-xl w-full"
              
              prevArrow={({ handlePrev }) => (
              <IconButton variant="text" size="lg" onClick={handlePrev} className="!absolute top-2/4 -translate-y-2/4 left-4 text-palette-gray"> 
                <HiArrowSmLeft className="w-6 h-6"/>
              </IconButton>)}
              
              nextArrow={({ handleNext }) => (
              <IconButton variant="text" size="lg" onClick={handleNext} className="!absolute top-2/4 -translate-y-2/4 !right-4 text-palette-gray"> 
                <HiArrowSmRight className="w-6 h-6"/>
              </IconButton>)}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? "bg-palette-blue-500 w-8" : " bg-palette-gray w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                          /> ))}
                      </div> )}
            >
              <img src="project_images/DCC_1.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/DCC_2.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/DCC_3.png" alt="Budget Builder" className="w-full object-cover"/>
              <img src="project_images/DCC_4.png" alt="Budget Builder" className="w-full object-cover"/>
            </Carousel>
            <hr className="h-1 my-10 bg-palette-pink border-0 rounded dark:bg-gray-700"/>
          </div>
        </section>

        

        <section id="contacts" className='mt-10 max-w-screen-lg mx-auto'>
          <h2 className=" text-3xl my-5 font-heading text-palette-pink">Contact Me</h2>
          <div className='flex items-center justify-left gap-x-2 gap-y-2.5 text-2xl pl-5 mb-10 text-palette-blue-500'>
            <AiFillMail/>
            <text className=' text-base'>vanessa.tan.cs@gmail.com</text>
          </div>
        </section>


      </main>
    </>
  )
}
