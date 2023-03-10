import { NavLink } from "react-router-dom";


const Navbar = (props) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand">Repohub</a>
                    <button className="btn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                </div>
            </nav>

            <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Repohub</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0"> <NavLink to="/" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Home</NavLink> </li>
                        <li className="list-group-item border-0"> <NavLink to="/story" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Story</NavLink> </li>
                        <li className="list-group-item border-0"> <NavLink to="/services" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Services</NavLink> </li>
                        <li className="list-group-item border-0"> <NavLink to="/contact" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Contact</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;