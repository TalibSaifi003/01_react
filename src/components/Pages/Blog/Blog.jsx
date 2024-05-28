import React from 'react'
import Blogsec from './Blogsec'
import blog1 from '../../../assets/blogs/thumbnail.svg'
import blog2 from '../../../assets/blogs/img1.png'
import blog3 from '../../../assets/blogs/img2.png'
import blog4 from '../../../assets/blogs/img3.png'


function Blog() {
  return (
    <div id='blogs'>
      <h1 className='text-4xl text-center mt-4'>BLOGS</h1>
      <div className='flex blog-section-main ' >
      <div className='mr-2'><Blogsec Title="Learn JavaScript" Text="Welcome to Learn JavaScript! An in-depth course on the basics of JavaScript." btnText="Click Here" imagePath={blog1} linkText="https://web.dev/learn/javascript" /> </div>
      <div className='mr-2' ><Blogsec  Title="10 Best Frameworks for Web Development" Text="Choosing the top web development frameworks for your website and web apps determines the progress of your web project. Learn what tech stacks are best for different types of products." btnText="Click Here" imagePath={blog2} linkText="https://www.techmagic.co/blog/best-frameworks-for-web-development/" /> </div>
      <div className='mr-2' ><Blogsec  Title="10 Key Reasons Why You Should Use React for Web Development" Text="We are glad that TechMagic is on the list of react.careers - the open-source directory of companies using React.js. We would like to introduce this outstanding JS library, what is React and explain why we are working with React.." btnText="Click Here" imagePath={blog4} linkText="https://www.techmagic.co/blog/best-frameworks-for-web-development/" /> </div>
      
      
      </div>
  
    

    </div>
  )
}

export default Blog
