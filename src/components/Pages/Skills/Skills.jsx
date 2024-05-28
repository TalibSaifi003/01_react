import React from 'react'
import './Skills.css'
import { CCard,CRow,CCol,CCardBody,CCardTitle,CCardImage, CCardText} from '@coreui/react'
import Image from "react-bootstrap/Image";


import { skills } from "./dbSkills";




function Skills() {
  return (
    <div id='skills'>
    <div className='mt-6 pt-6 pb-8 bg-gray-500'><h1 className='text-4xl text-center text-black'>TECH SKILLS</h1>
    <div className='skill-content'>
    <CRow className='w-auto' xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
  <CCol xs>
    <CCard className='focus'>
      <CCardImage orientation="top"  />
      <CCardBody>
        <CCardTitle className='text-center text-black-400 font-bold '>Version Control</CCardTitle>
        <hr />
        <CCardText className='card-text d-flex justify-content-start flex-column'>

          <a className='text-dark text-decoration-none flex' href={skills.versionControl[0].link} target='_blank'>
            <Image src={skills.versionControl[0].imgSrc}  alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1" ></Image><span className='text-name'>{skills.versionControl[0].skillName}</span></a>
        </CCardText>
        
      </CCardBody>
      
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className='focus'>
      <CCardImage orientation="top" />
      <CCardBody>
        <CCardTitle className='text-center text-black-400 font-bold'>FrameWorks</CCardTitle>
        <hr/>
        <CCardText className='card-text d-flex justify-content-start flex-column'>
            {skills.frameworks.map((skill,index)=>(
              <span key={index}>
              <a className='text-dark text-decoration-none flex' href={skill.link} target='_blank'>
              <Image src={skill.imgSrc}  alt={skill.imgAltText}  className="image-style m-1" ></Image><span className='text-name'>{skill.skillName}</span></a>
              </span>
            ))}
         
        </CCardText>
        
      </CCardBody>
     
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className='focus'>
      <CCardImage orientation="top"  />
      <CCardBody>
        <CCardTitle className='text-center text-black-400 font-bold'>Hosting Plateform</CCardTitle>
        <hr/>
        <CCardText className='card-text d-flex justify-content-start flex-column'>
          {skills.hostingPlatforms.map((skill,index)=>(
            <span key={index}>
              <a className='text-dark text-decoration-none flex' href={skill.link} target='_blank' >
              <Image src={skill.imgSrc}  alt={skill.imgAltText}  className="image-style m-1" ></Image><span className='text-name'>{skill.skillName}</span></a>
               
            </span>
          ))}
</CCardText>
        
      </CCardBody>
     
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className='focus'>
      <CCardImage orientation="top"  />
      <CCardBody>
        <CCardTitle className='text-center text-black-400 font-bold'>Scripting Language</CCardTitle>
        <hr />
        <CCardText className='card-text d-flex justify-content-start flex-column'>
          {skills.frontend.map((skill,index)=>(
            <span key={index} >
              <a className='text-dark text-decoration-none flex' href={skill.link} target='_blank'>
              <Image src={skill.imgSrc}  alt={skill.imgAltText}  className="image-style m-1" ></Image><span className='text-name'>{skill.skillName}</span></a>
               
            </span>
          ))}
        </CCardText>
      </CCardBody>
      
    </CCard>
  </CCol>
</CRow>
</div>
<hr />
    </div>
  
    </div>
  )
}

export default Skills
