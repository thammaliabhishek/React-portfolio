import React from 'react'
import backtracking from '../screenshots/back.png'
import todoui from '../screenshots/todoui.png'
import todomob from '../screenshots/todomob.png'
import digital from '../screenshots/digital.png'
import todoapp from '../screenshots/todoapp.png'
import reactblog from '../screenshots/react-blog.png'


const Projects = () => {
  return (
    <>
    <div className="card cardsone">
      <div className="portfolio">
              <h1 className="portheading">My Portfolio</h1>
              <div className="container link">
               <a href="https://thammaliabhishek.github.io/project/project%20one%20.html" target="blank"><img src={backtracking} alt='' className="projectone"/></a>
               <a href="https://thammaliabhishek.github.io/CSS-PROJECT/TodoList-UX.html" target="blank"><img src={todoui} className="projectone"/></a> 
               <a href="https://thammaliabhishek.github.io/CSS-PROJECT/Todomob.html" traget="blank"><img src={todomob}  className="projectone"/></a>
               <a href="https://thammaliabhishek.github.io/javascript-projects/digital%20clock.html" traget="blank"><img src={digital} className="projectone"/></a>
               <a href="https://thammaliabhishek.github.io/javascript-projects/todo1.html" target="blank"><img src={todoapp} className="projectone"/></a>
               <a href="https://visionary-gaufre-4cdb63.netlify.app/" target="blank"><img src={reactblog}  className="projectone"/></a>
              </div>
          </div>
    </div>
    </>
  )
}

export default Projects