import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu.jsx'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  />
      <div className="user">
        <img src="https://unsplash.com/photos/iEEBWgY_6lA" alt=""  />
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt=""  />
        </Link>
        
        <img src={Delete} alt=""  />
      </div>
      </div>
      <h1>Lorem ipsum dolor ss. audantium os amet!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis impedit obcaecati, delectus itaque esse, velit vero optio minus alias voluptatibus fugiat sint nostrum voluptate molestias dolorum nobis iste fuga, neque amet! Eligendi illo labore, harum corrupti aperiam expedita voluptate ducimus commodi pariatur fugit molestias totam ad molestiae doloremque, nihil numquam incidunt tenetur libero earum, aut suscipit. Minima saepe nostrum officiis porro ad modi, nulla culpa, vel non totam earum, cum nemo explicabo? Ut nostrum repudiandae beatae optio aut, ex reiciendis repellendus excepturi quia expedita, omnis velit ipsa mollitia, magnam dolores tempora eius voluptatum minus perspiciatis quaerat fugit quas quae quam blanditiis! Repellat itaque voluptatem earum sint quo veniam nihil atque mollitia officia assumenda, consequatur ea animi hic sunt odio illo quis nam? Quam sit consequatur eius rerum blanditiis perferendis alias reiciendis dolor ex quidem quia, facilis ullam ipsum voluptates harum dolores. Eaque eius 
        accusamus corporis? Quaerat magnam suscipit, fuga reprehenderit dolore vitae voluptatibus cum eveniet ab quasi corrupti maiores non eum aspernatur voluptatum totam ex molestias sequi ad recusandae distinctio sint quibusdam quam! Cupiditate in, laborum eum fuga suscipit nam dolore! Ad similique quod tenetur ipsum deserunt in deleniti cupiditate reprehenderit eveniet quaerat minus debitis iste, commodi minima autem quasi eligendi nihil tempore, architecto quae. Obcaecati suscipit a numquam reprehenderit similique explicabo praesentium veritatis necessitatibus doloremque est, quaerat earum quis sit autem molestiae. Dignissimos aperiam, ratione dolore possimus repellat inventore quis ipsa itaque placeat aliquid iste ab delectus deserunt exercitationem? Impedit a quidem aliquam ut soluta non architecto rerum libero, molestiae enim maxime. Voluptatum consectetur aliquid sapiente dolore perferendis, perspiciatis et dicta obcaecati nobis quo, atque, cumque doloribus tempore sint odit ratione libero qui autem. Perferendis ipsam vel perspiciatis ducimus sunt possimus iure 
        cupiditate beatae fuga amet saepe commodi, quod dolor repellendus temporibus expedita quos. Dignissimos voluptate necessitatibus laboriosam officia distinctio!</p>
      
      </div>
      <Menu />
    </div>
  )
}

export default Single