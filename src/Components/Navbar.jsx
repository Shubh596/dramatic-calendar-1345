import { NavLink } from "react-router-dom";
import './Navbar.module.css';
function Navbar() {

  const link = [
    {
      to:"/home",
      title: 'Home'
    },
    {
      to:"/categories",
      title: 'Categories'
    },
    {
      to:"/new",
      title: 'New'
    },
    {
      to:"/bestselling",
      title: 'BestSelling'
    },
    {
      to:"/brand",
      title: 'Brand'
    },
    {
      to:"/clearance",
      title: 'Clearance'
    },
    {
      to:"/deals",
      title: 'Deals'
    },
    {
      to:"/coupon",
      title: 'Coupon'
    },
    {
      to:"/apponly",
      title: 'AppOnly'
    },
    
  ]
  return(
    
      <div className="nav"
      
      style={{
        // margin:'auto',
        width:'100%',
        height:'150px',
        padding: '18px',
        border:'1px solid',
        fontSize:'16px',
        display:'flex',
        // justifyContent:'right',
        alignItems:"end",
        color:"white",
        fontWeight:'bold',
        gap: '40px',
        backgroundColor: '#318ffb',
        // marginLeft:"200px"
}}
      >
        <div className="search"
        style={{marginBottom:"50px"}}
        >
        <input type="text"
        style={{height:"38px", width:"300%"}}
        />
        <button style={{border:"1px solid", padding:"6px 20px"}}>Search</button>
        </div>
        {link.map((ee)=>(
          <NavLink
          to={ee.to}
          >
            {ee.title}
          </NavLink>
        ))}
        
        

      </div>
  )
};
export default Navbar;