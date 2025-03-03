import { useState } from "react"


function App() {
  const [ color, setColor] = useState("olive")

  return (
            <div className="w-full h-screen duration-200"
            
            style={ {backgroundColor : color }}

            >
              <div className="fixed flex flex-wrap justify-center 
              bottom-12 inset-x-0 px-2 ">

                  <div 
                  onClick={ ()=> setColor("red") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "red"}}
                    > Red </button>
                   </div>

                   <div 
                  onClick={ ()=> setColor("green") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("green") }
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "green"}}
                    > Green </button>
                  </div>

                  <div 
                  onClick={ ()=> setColor("blue") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("blue") }
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "blue"}}
                    > Blue </button>
                  </div> 

                  <div 
                  onClick={ ()=> setColor("olive") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Olive") }
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "Olive"}}
                    > Olive </button>
                  </div>

                  <div 
                  onClick={ ()=> setColor("Gray") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Gray") }
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "Gray"}}
                    > Gray </button>
                 </div>

                 <div 
                  onClick={ ()=> setColor("pink") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Pink") }
                    className="outline-none px-4 py-1
                    rounded-full text-black"
                    style={{backgroundColor : "Pink"}}
                    > Pink </button>
                  </div>

                  
                  <div 
                  onClick={ ()=> setColor("Purple") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Purple") }
                    className="outline-none px-4 py-1
                    rounded-full text-black"
                    style={{backgroundColor : "purple"}}
                    > Purple </button>
                  </div>

                  <div 
                  onClick={ ()=> setColor("Lavender") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Lavender") }
                    className="outline-none px-4 py-1
                    rounded-full text-black"
                    style={{backgroundColor : "Lavender"}}
                    > Lavender </button>
                  </div>

                  <div 
                  onClick={ ()=> setColor("white") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("White") }
                    className="outline-none px-4 py-1
                    rounded-full text-black"
                    style={{backgroundColor : "White"}}
                    > White </button>
                  </div>         

                  <div 
                  onClick={ ()=> setColor("black") }
                  className="flex flex-wrap justify-center 
                  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl"> 
                    <button 
                    onClick={ ()=> setColor("Black") }
                    className="outline-none px-4 py-1
                    rounded-full text-white"
                    style={{backgroundColor : "Black"}}
                    > Black </button>
                 </div>
              

              </div>

            </div>
  )
}

export default App
