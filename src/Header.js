import {
    Link
  } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="" className="navbar-brand">Charli Spilecki</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="about">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact</Link>
                </li>
            </ul>
        </div>
      </nav>
    )
}
