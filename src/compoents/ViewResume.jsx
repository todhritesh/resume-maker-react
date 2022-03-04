import { Button, Grid, Typography } from '@mui/material'
import React,{useRef} from 'react'
import { jsPDF } from "jspdf";
import {useNavigate, ussNavigate} from "react-router-dom"
import { Box } from '@mui/system';

function ViewResume({basic,education,skill,workSample,setBasic,setEducation,setSkill,setWorkSample}) {
  const resumeRef = useRef();
  const navigate = useNavigate()
  function generatePdf(){

      let pdf = new jsPDF('p', 'pt', 'letter');
      pdf.html(document.getElementById('resume'), {
          callback: function () {
              pdf.save('myDocument.pdf');
          }
      });

      setBasic({firstName:"",lastName:"",email:"",state:"",city:"",phone:""})
      setEducation([{educationName:"",educationFrom:"",educationStart:"",educationCompletion:""}])
      setSkill([{skillName:"",skillStatus:""}])
      setWorkSample([{workSampleTitle:"",workSampleDes:""}]);

      navigate("/form")

  }

  function goBack(){
    navigate("/form")
  }


  return (
  <Grid container spacing={2} sx={{mt:4}}>
    <Grid sx={{mb:2}} container={true} item  xs={8}>
      <Box  sx={{ml:"auto"}}/>
      <Button onClick={goBack}  sx={{mr:2}} variant="contained" color="warning">Go back</Button>
      <Button onClick={generatePdf} variant="contained" color="success">Download</Button>
    </Grid>
    <Grid id="resume" ref={resumeRef} sx={{ml:2,p:5}} item xs={8}>
      <Grid container={true} spacing={5} item xs={12}>
        <Grid item xs={6}>
          <div >
            <Typography variant="h4" component="span">{`${basic.firstName} ${basic.lastName}`}</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <span>
            <Typography sx={{textAlign:"right"}} variant="h6" component="div">{`${basic.email}`}</Typography>
            <Typography sx={{textAlign:"right"}} variant="body2" component="div">{`${basic.phone}`}</Typography>
            <Typography sx={{textAlign:"right"}} variant="body2" component="div">{`${basic.city}, ${basic.state}`}</Typography>
          </span>
        </Grid>
      </Grid>


      <Grid container={true} spacing={5} item xs={12} sx={{mt:1}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="subtitle2" component="span">Education</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} rowSpacing={2}>
          {
            education.map((element,i)=>(

            <Grid item xs={12}>
              <Typography variant="body1" component="div">{`${element.educationName}`}</Typography>
              <Typography variant="body2" component="div">{`${element.educationFrom}`}</Typography>
              <Typography variant="body2" component="div">{`${element.educationStart} to ${element.educationCompletion}`}</Typography>
            </Grid>

            ))
          }
        </Grid>
      </Grid>


      <Grid container={true} spacing={5} item xs={12} sx={{mt:1}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="subtitle2" component="span">Skills</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} spacing={2.4}>
          {
            skill.map((element,i)=>(

            <Grid item xs={6}>
              <Typography variant="body1" sx={{borderBottom:"2px solid grey",mb:2}} component="span">{`${element.skillName}`}</Typography>
              <Typography variant="body2" component="div">{`${element.skillStatus}`}</Typography>
            </Grid>

            ))
          }

        </Grid>
      </Grid>


      <Grid container={true} spacing={5} item xs={12} sx={{mt:1}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="subtitle2" component="span">Work Samples</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} spacing={2.4}>
          {
            workSample.map((element,i)=>(

            <Grid item xs={8}>
              <Typography variant="body1" sx={{borderBottom:"2px solid grey",mb:2}} component="span">{`${element.workSampleTitle}`}</Typography>
              <Typography variant="body2" component="div"> {`${element.workSampleDes}`}</Typography>
            </Grid>

            ))
          }
        </Grid>

      </Grid>

    </Grid>
  </Grid>
  )
}

export default ViewResume