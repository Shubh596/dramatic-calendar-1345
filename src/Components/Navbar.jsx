import { NavLink } from "react-router-dom";

function Navbar() {

  const link = [
    {
      to:"/home",
      title: 'Home'
    },
    {
      to:"/apponly",
      title: 'AppOnly'
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
      to:"/categories",
      title: 'Categories'
    },
    {
      to:"/clearance",
      title: 'Clearance'
    },
    {
      to:"/deal",
      title: 'Deal'
    },
    
  ]
  return(
      <div>
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