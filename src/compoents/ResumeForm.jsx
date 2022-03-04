import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'


function ResumeForm({basic,setBasic,education,setEducation,skill,setSkill,workSample,setWorkSample}) {
    const elevationValue = 5    

    //education
    const edu = {educationName:"",educationStart:"",educationCompletion:""}

    //skill
    const skl = {skillName:"",skillStatus:""}
    const skillStatusItem = ['Beginner','intermediate','Advance']
    

    function handleEducation(index,e){
        const temp = [...education];
        temp[index][e.target.name] = e.target.value;
        setEducation(temp);
        console.log(education)
    } 

    function handleAddMoreEdu(){
        setEducation([...education,edu])
    }

    function handleRemoveEdu(index){
        if(education.length===1){
            setEducation([edu])
            // setAddEducation(false)
            return 
        }
        const values = [...education];
        values.splice(index,1);
        setEducation(values)
    }

    function handleSkill(i,e){
        const {name , value} = e.target;
        skill[i][name] = value;
        setSkill([...skill]);
    }
    
    function handleRemoveSkill(index){
        if(skill.length===1){
            setSkill([skl])
        }
        const updatedSkill = skill.filter((item,i)=>i!==index)
        setSkill(updatedSkill);
    }

    function handleAddMoreSkill(){
        setSkill([...skill,skl])
    }

    function handleWorkSample(i,e){
        const {name , value} = e.target;
        workSample[i][name] = value;
        setWorkSample([...workSample]);
    }

    function handleRemoveWorkSample(index){
        if(workSample.length===1){
            setWorkSample([{workSampleTitle:"",workSampleDes:""}])
        }
        const updatedWorkSample = workSample.filter((item,i)=>i!==index)
        setWorkSample(updatedWorkSample);
    }

    function handleAddMoreWorkSample(){
        setWorkSample([...workSample,{workSampleTitle:"",workSampleDes:""}])
    }

    
  return (
    <Grid container spacing={2} sx={{mt:5,pb:10}}>
        <Grid item sx={{mx:'auto'}} md={8}>
            <Box  elevation={elevationValue} sx={{p:2}} component={Paper} >
                <>
                <InputLabel>Basic Details</InputLabel>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="First Name"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,firstName:e.target.value})}
                                value={basic.firstName}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Last Name"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,lastName:e.target.value})}
                                value={basic.lastName}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Email"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,email:e.target.value})}
                                value={basic.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Phone no."
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,phone:e.target.value})}
                                value={basic.phone}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="State"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,state:e.target.value})}
                                value={basic.state}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="City"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,city:e.target.value})}
                                value={basic.city}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </>
            </Box>

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                {
                    education.map((item , i)=>(
                        <>
                            <InputLabel>Education</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={5}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Education"
                                        variant="filled"
                                        name="educationName"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Education"
                                        variant="filled"
                                        name="educationFrom"
                                        helperText="education From"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationFrom}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5}>
                                    <FormControl fullWidth>
                                        <TextField
                                        variant="filled"
                                        name="educationStart"
                                        type="date"
                                        helperText="education start"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationStart}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5}>
                                    <FormControl fullWidth>
                                        <TextField
                                        size="small"
                                        variant="filled"
                                        name="educationCompletion"
                                        type="date"
                                        helperText="education completion"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationCompletion}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={1} sx={{my:'auto'}}>
                                    {
                                        education.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveEdu(i)} color="error">
                                        <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button onClick={handleAddMoreEdu} color="success" variant="contained">Add More</Button>
   
            </Box>
            

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
                {
                    skill.map((item , i)=>(
                        <>
                            <InputLabel>Skill {i+1}</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={5}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Skill"
                                        variant="filled"
                                        name="skillName"
                                        onChange={(e)=>handleSkill(i,e)}
                                        value={item.skillName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5}>
                                    <FormControl fullWidth>
                                    <InputLabel id="demo-multiple-name-label">Status</InputLabel>
                                    <Select
                                        value={item.skillStatus}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Status"
                                        variant="filled"
                                        name="skillStatus"
                                        onChange={(e)=>handleSkill(i,e)}
                                        >
                                            {
                                            skillStatusItem.map((item,i)=>(
                                                <MenuItem key={i} value={item}>{item}</MenuItem>
                                            ))
                                        }
                                    </Select>

                                    </FormControl>
                                </Grid>
                                <Grid item md={2} sx={{my:'auto'}}>
                                    {
                                        skill.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveSkill(i)} color="error">
                                        <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button sx={{mt:2}} onClick={handleAddMoreSkill} color="success" variant="contained">Add More </Button>
                

            </Box>
            

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
                {
                    workSample.map((item , i)=>(
                        <>
                            <InputLabel>Work Sample {i+1}</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={4}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Work sample title"
                                        variant="filled"
                                        name="workSampleTitle"
                                        onChange={(e)=>handleWorkSample(i,e)}
                                        value={item.workSampleTitle}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={7}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Work sample description"
                                        variant="filled"
                                        name="workSampleDes"
                                        multiline
                                        rows={4}
                                        onChange={(e)=>handleWorkSample(i,e)}
                                        value={item.workSampleDes}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={1} sx={{my:'auto'}}>
                                    {
                                        workSample.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveWorkSample(i)} color="error">
                                            <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button sx={{mt:2}} onClick={handleAddMoreWorkSample} color="success" variant="contained">Add More </Button>
                

            </Box>
            
        <Button component={Link} to="/preview" fullWidth variant="contained" sx={{mt:5}} color="primary" >View Resume</Button>
        </Grid>
    </Grid>
  )
}

export default ResumeForm