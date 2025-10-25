

const navbar = () => {
  return (
    <div className="flex h-12 justify-between  ">
      <div className="h-15">
          <div>
            <img className="rounded-full w-15 h-15 justify-center content-center object-fill" src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="img" /></div>
           </div>
      
      <div className="h-screen w-rel gap-1">
            <button className=" text-2xl text-white underline  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-red-500 rounded-md w-25 m-2 ">Home</button>
            <button className=" text-2xl text-white underline  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-red-500 rounded-md w-25 m-2">Project</button>
            <button className=" text-2xl text-white underline  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-red-500 rounded-md w-25 m-2">Contact</button>
            <button className=" text-2xl text-white underline  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-red-500 rounded-md w-25 m-2">Service</button>
      </div>
    </div>
  )
}

export default navbar