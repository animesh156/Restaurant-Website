import {MenuList} from "../menu"

 export default function Menu() {
  return (
    <>

    <div className="flex flex-row flex-wrap justify-around ">
{
  MenuList.map((menu) => (


    // eslint-disable-next-line react/jsx-key
    <div className="max-w-sm transition hover:shadow-lg bg-white border w-72 border-gray-200 mt-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg h-60 w-[390px] " src={menu.image} alt="" />
        </a>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{menu.name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{menu.description}</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

        
          <svg fill="#fe5a01" className=" w-3.5 h-3.5" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#fe5a01">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"/>

</g>

</svg>
            {menu.price}
            </a>
        </div>
      </div>


  ))
}



    </div>

    
    </>
  )
}
