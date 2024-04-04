import React, { useEffect, useState } from 'react'
import { Grid,Container,Box,Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch,useSelector } from 'react-redux';
import { addTasks,setTasksFilter,clearPersist } from '../redux/registerSlice'


function Important() {
    const [text, setText] = useState('')
    const [textList, setTextList] = useState([])
    const dispatch = useDispatch();
    const {selector} = useSelector(state =>state.register)
    console.log(selector);

    useEffect(() => {
        const savedData = localStorage.getItem('savedTasks');
        if (savedData) {
            setTextList(JSON.parse(savedData));
        }
    }, []);

  
    useEffect(() => {
        localStorage.setItem('savedTasks', JSON.stringify(textList));
    }, [textList]);
    const handleChange = (event) =>{
      setText(event.target.value)
        
    }
    const handleSubmit = (event)=>{
       event.preventDefault()
       setTextList([...textList,text])
       setText('')
       dispatch(addTasks(textList));
        
        
    }
  return (
    <>
    <div className='relative blur-2xl'>
  
        <div className='absolute bg-[#27CDF1] h-[546px] w-[556px] top-[5px] left-[100px]'></div>
        <div className='absolute bg-[#F7AE1F] w-[365px] h-[365px] top-[-55px] right-[156px]'></div>
        <div className='absolute bg-[#B0EE2C] w-[297px] h-[297px] bottom-[-700px] left-[300px]'></div>
        <div className='absolute bg-[#EE3DDD] w-[241px] h-[241px] bottom-[-680px] right-[316px]'></div>
    </div>
    <div className='p-6'>

    <Grid container spacing={2}>
        <Grid item lg={4}>
            <Box sx={{border:'1px solid black',borderRadius:'16px',height:'700px',position:'relative',backgroundColor:'#ffffff54'}}>
                <Box sx={{display:'flex', justifyContent:'flex-start',alignItems:'center'}}>
                
                    <Stack><AccountCircleIcon sx={{fontSize:'70px',color:'grey'}}/></Stack>
                    <h1 className='font-display text-2xl font-bold'>Rufat Rasulov</h1>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'30px'}}>
                    <div className='mb-2 w-[100%] h-10 rounded-lg p-2 bg-[#FFFFFF]' > Search <SearchIcon sx={{marginLeft:'285px',color:'grey'}}/></div>
                    <div className='mb-2 w-[100%] h-10 rounded-lg p-2 bg-[#FFFFFF]' ><Link to='/home'>My Day</Link></div>
                    
                   
                    <div className='mb-2 w-[100%] h-10 rounded-lg p-2 bg-[#FFFFFF]' ><Link to='/important'>Important</Link></div>
                  
                    <div className='mb-2 w-[100%] h-10 rounded-lg p-2 bg-[#FFFFFF]' ><Link to='/planned'>Planned</Link></div>
                    
                   
                    <div className='mb-2 w-[100%] h-10 rounded-lg p-2 bg-[#FFFFFF]' ><Link to='/assigned'>Assigned to me</Link></div>
                  
                    
                </Box>
            </Box>

        </Grid>
        <Grid item lg={8}>
            <Box sx={{border:'1px solid black',position:'relative',borderRadius:'16px',height:'700px',backgroundColor:'#ffffff54',padding:'10px', overflowY:textList.length > 12 ? 'scroll' : 'vsible'}}>
                <div className='font-display text-2xl font-bold'>Important</div>
                <div className='flex justify-center'>
                <input type='text' className='mb-2 w-[90%] h-10 rounded-lg p-2 bg-[#FFFFFF]  border border-black outline-none' placeholder='Text Enter ...' onChange={handleChange} value={text} /> 
                <button onClick={handleSubmit} className='w-[10%] h-10 rounded-lg p-2 bg-green-500 text-white ml-2'>Enter</button>
                </div>
 
                    
                {textList.map((todo,index)=>(
                        <div className='flex justify-center'>
                            <div className='mb-2 w-[90%] h-10 rounded-lg p-2 bg-[#FFFFFF]  border border-black outline-none'>

                            <p key={index}>{todo}</p>
                            </div>
                            <div className='w-[10%] h-10 rounded-lg p-2 bg-red-500 text-white ml-2 text-center'>
                                <DeleteIcon/>
                            </div>
                        </div>
                    ))}
            </Box>

        </Grid>

    </Grid>
    </div>

    
    </>
  )
}

export default Important