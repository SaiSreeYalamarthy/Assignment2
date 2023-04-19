import { Link } from "react-router-dom";


// Creating a function to create navbar
const Navigate = () =>{
    return( <nav className="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">SE ASSIGNMENT3</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><Link  to={"/"} class="nav-link active">Home</Link></li>
                    <li><Link  to={"/api"} class="nav-link active">Popular Books</Link></li>
                    <li><Link  to={"/about"} class="nav-link active"> About Us</Link></li>
                    <li><Link  to={"/inventory"} class="nav-link active"> Inventory</Link></li>
                    <li><Link  to={"/allusers"} class="nav-link active"> List Of All Users</Link></li>
                    <li><Link  to={"/signup"} class="nav-link active"> Signup</Link></li>
                    <li><Link  to={"/login"} class="nav-link active"> Login</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
};
export default Navigate;

