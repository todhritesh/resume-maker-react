import { Button, FormControl, Grid, IconButton, InputLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"

function ResumeForm() {
    const [name , setName] = useState({firstName:"",lastName:""})
    const [addEducation , setAddEducation] = useState(false)
    const [education , setEducation] = useState([{educationName:"",educationStart:"",educationCompletion:""}])
    
    function handleEducation(index,event){
        const temp = [...education];
        temp[index][event.target.name] = event.target.value;
        setEducation(temp);
    } 

    function handleAddMoreEdu(){
        setEducation([...education,{educationName:"",educationStart:"",educationCompletion:""}])
    }

    function handleRemoveEdu(index){
        education.splice(index,1);
        setEducation([...education]);        
    }

    
  return (
    <Grid container spacing={2} sx={{mt:5}}>
        <Grid item sx={{mx:'auto'}} md={8}>
            <Box>
                <InputLabel>Name</InputLabel>
                <FormControl fullWidth sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <TextField
                    sx={{width:"45%"}}
                    id="filled-helperText"
                    label="First name"
                    variant="filled"
                    onChange={(e)=>setName({...name,firstName:e.target.value})}
                    value={name.firstName}
                    />
                    <TextField
                    sx={{width:"45%"}}
                    id="filled-helperText"
                    label="last name"
                    variant="filled"
                    onChange={(e)=>setName({...name,lastName:e.target.value})}
                    value={name.lastName}
                    />
                </FormControl>
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
                                <FormControl fullWidth sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                    <TextField
                                    sx={{width:"30%"}}
                                    label="Education"
                                    variant="filled"
                                    name="educationName"
                                    onChange={(e)=>handleEducation(i,e)}
                                    value={item.educationtName}
                                    />
                                    <TextField
                                    sx={{width:"25%"}}
                                    variant="filled"
                                    name="educationStart"
                                    type="date"
                                    helperText="education start"
                                    onChange={(e)=>handleEducation(i,e)}
                                    value={item.educationstart}
                                    />
                                    <TextField
                                    sx={{width:"25%"}}
                                    variant="filled"
                                    name="educationCompletion"
                                    type="date"
                                    helperText="education completion"
                                    onChange={(e)=>handleEducation(i,e)}
                                    value={item.educationCompletion}
                                    />
                                    <Box sx={{display:"flex" , flexDirection:"row"}}>
                                        <IconButton onClick={handleAddMoreEdu} color="success">
                                            <AddIcon  color="success"/>
                                        </IconButton>
                                        <IconButton onClick={()=>handleRemoveEdu(i)} color="error">
                                            <RemoveIcon color="error"/>
                                        </IconButton>
                                    </Box>
                                </FormControl>
                            </>
                        ))
                    }
                    </>
                }

            </Box>
            
        </Grid>
    </Grid>
  )
}

export default ResumeForm