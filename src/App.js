import React from "react";
import Navbar from "./component/navbar"
import Details from "./component/details"
import data from "./data"

console.log(data)

const App = () => {

      const damn = data.map(item => {
          return (
              < Details
                item = {item}
              />
          )
      })
  return (


        <div>
          <Navbar />
          {/* <Details /> */}
          <section className="cards-list">
                {damn}
            </section>
        </div>
  )
}

export default App 