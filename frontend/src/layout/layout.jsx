import Drawer from './Drawer'
import Header from './Header'

const Layout = (props) => {

  const drawerStyle = {
    backgroundColor: 'lightgrey',
    fontSize: 24,
  }
  return (
    <>
      <div>
        <Header />  
      </div>      

      <div style={drawerStyle}>
        <Drawer />
      </div>      
    </>
  )
}

export default Layout;