import React , {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import ResumeForm from './ResumeForm'
import Starter from './Starter'
import ViewResume from './ViewResume'

export default function Layout() {

  //basic details
  const [basic , setBasic] = useState({firstName:"",lastName:"",email:"",state:"",city:"",phone:""})

  //education
  const [education , setEducation] = useState([{educationName:"",educationFrom:"",educationStart:"",educationCompletion:""}])

  //skill
  const [skill , setSkill] = useState([{skillName:"",skillStatus:""}])

  //worksamplws
  const [workSample , setWorkSample] = useState([{workSampleTitle:"",workSampleDes:""}]);


  return (
    <div sx={{}}>

    <Routes>
      <Route path="/" exact element={<Starter/>} />
      
      <Route path="/form" exact element={
        
         <ResumeForm
         basic={basic} 
         setBasic={setBasic} 
         education={education}
         setEducation={setEducation}
         skill={skill}
         setSkill={setSkill}
         workSample={workSample}
         setWorkSample={setWorkSample}
         /> 

      } />

      <Route path="/preview" exact element={

        <ViewResume
        basic={basic} 
        education={education}
        skill={skill}
        workSample={workSample}
        setBasic={setBasic} 
        setEducation={setEducation}
        setSkill={setSkill}
        setWorkSample={setWorkSample}
        />

      } />

    </Routes>
    </div>
  )
}
