

function Users({details}){
  return(
    <>
    <h1 className="sm:text-4xl text-3xl mb-4 font-xl bolder text-center text-gray-900">About Me</h1>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
        <img class="w-[300px] mb-10 object-cover object-center rounded" alt="hero" src={details.picture?.large}/>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {details.name?.title} {details.name?.first} {details.name?.last}</h1>
          <p class="mb-8 leading-relaxed">Hello there! I'm a {details.dob?.age} Years old {details.gender} from {details.location?.state}, {details.location?.country}. You can contact me at {details.email} </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>
  </>
)}

export default Users;