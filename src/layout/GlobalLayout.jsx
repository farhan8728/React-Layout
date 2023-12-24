import BasicExample from "../Navbar"
 
const GlobalLayout = ({children}) => {
  return (
    <>
        <BasicExample />
        {children}
        
    </>
  )
}

export default GlobalLayout