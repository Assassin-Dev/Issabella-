import { Link } from "react-router-dom"
function Navbar(){
    return (
        <nav className="navbar">


<div className="navbar-container">
<Link to="/" className="nav-brand">
IssaBella
</Link>

<div className="navbar-links">
    <Link to={"/"}>Home</Link>
    <Link to={"/checkout"}>Cart</Link>
</div>

<div className="navbar-auth">
    <div className="navbar-auth-links">
        <Link to={"/auth"} className="btn-primary">Login</Link>
        <Link to={"/auth"} className="btn-secondary">Sign Up</Link>
    </div>
</div>

</div>
        </nav>
    )
}

export default Navbar