
import PlacesList from './PlacesList'
import TemporaryDrawer from './TemporaryDrawer'
import "./AdminHome.css"

const AdminHome = () => {
  return (
    <div className='main-div'>
        <p>Blog Places</p>
      <div className='drawer'><TemporaryDrawer/></div>
      <div className='placecard'><PlacesList/></div>
      
    </div>
  )
}

export default AdminHome
