import { Button, FormControl, Grid, IconButton, InputLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ResumeForm() {
    const [name , setName] = useState({firstName:"",lastName:""})
    const [addEducation , setAddEducation] = useState(false)
    const edu = {educationName:"",educationStart:"",educationCompletion:""}
    const [education , setEducation] = useState([edu])
    
    function handleEducation(index,e){

        const updatedEducation = education.map((item , i)=>index==i ? Object.assign(item,{[e.target.name]:e.target.value}):item)
        setEducation(updatedEducation)
        // const temp = [...education];
        // temp[index][event.target.name] = event.target.value;
        // setEducation(temp);
        // console.log(education)
    } 

    function handleAddMoreEdu(){
        setEducation([...education,edu])
    }

    function handleRemoveEdu(index){
        if(education.length===1){
            setEducation([edu])
            setAddEducation(false)
            return 
        }
        const values = [...education];
        values.splice(index,1);
        setEducation(values)
    }

    
  return (
    <Grid container spacing={2} sx={{mt:5}}>
        <Grid item sx={{mx:'auto'}} md={8}>
            <Box>
                <>
                <InputLabel>Name</InputLabel>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="First name"
                                variant="filled"
                                onChange={(e)=>setName({...name,firstName:e.target.value})}
                                value={name.firstName}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="First name"
                                variant="filled"
                                onChange={(e)=>setName({...name,firstName:e.target.value})}
                                value={name.firstName}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </>
            </Box>

            <Box sx={{mt:2 }}>
                <Button sx={{mb:2}} onClick={()=>setAddEducation(true)} variant="contained" color="primary">Add Educatin</Button>
                {
                    addEducation 
                    &&
                    <>
                    {
                        education.map((item , i)=>(
                            <>
                                <InputLabel>Education</InputLabel>
                                <Grid container spacing={2} key={i}>
                                    <Grid item md={4}>
                                        <FormControl fullWidth >
                                            <TextField
                                            label="Education"
                                            variant="filled"
                                            name="educationName"
                                            onChange={(e)=>handleEducation(i,e)}
                                            value={item.educationtName}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={3}>
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
                                    <Grid item md={3}>
                                        <FormControl fullWidth>
                                            <TextField
                                            variant="filled"
                                            name="educationCompletion"
                                            type="date"
                                            helperText="education completion"
                                            onChange={(e)=>handleEducation(i,e)}
                                            value={item.educationCompletion}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={2} sx={{my:'auto'}}>
                                        <IconButton onClick={()=>handleRemoveEdu(i)} color="error">
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </>
                        ))
                    }
                    <Button onClick={handleAddMoreEdu} color="success" variant="contained">Add More</Button>
                    </>
                }

            </Box>
            
        </Grid>
    </Grid>
  )
}

export default ResumeForm