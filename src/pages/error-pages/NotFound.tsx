import { Box, Typography } from "@mui/material"

const NotFound = () => {
  return (
    <Box sx={{display:"flex",justifyContent:'center',alignContent:'center',height:'',width:'100vw'}}>
      <Typography component={'h1'} >Error: 404 page not found.</Typography>
      <Typography component={'h5'}> Sorry, the page you're looking for cannot be accessed</Typography>
    </Box>
  )
}

export default NotFound
