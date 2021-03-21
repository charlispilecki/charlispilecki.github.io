export default function AboutMe() {
    return (
        <div className="row" id="contact">
            <div className="column">
                <div className="card mb-3;">
                    <img src="img/oldschoolphone.jpg" className="card-img-top" alt="Old-style phone receiver"
                        style={{height: '425px', width: '100%', display: 'block'}} />
                    <div className="card-body">
                        <h5 className="card-title text-center">By Phone</h5>
                        <p className="card-text text-center">512.968.6703</p>
                        
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card mb-3">
                    <img src="img/linkedin.jpg" className="card-img-top" alt="Linkedin symbol on clear glass door"
                        style={{height: '425px', width: '100%', display: 'block'}} />
                    <div className="card-body text-center">
                        <h5 className="card-title">Via Linkedin</h5>
                        
                        <a href="https://www.linkedin.com/in/charli-spilecki-1270979a/"
                            className="btn btn-primary">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card mb-3">
                    <img src="img/typewriter.jpg" className="card-img-top"
                        alt="Typewriter with 'Send Mail' typed out on page"
                        style={{height: '425px', width: '100%', display: 'block'}} />
                    <div className="card-body">
                        <h5 className="card-title text-center">By Email</h5>
                        <p className="card-text text-center">charlispilecki@gmail.com</p>
                        
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card mb-3">
                    <img src="img/dogatcomputer.jpg" className="card-img-top" alt="Linkedin symbol on clear glass door"
                        style={{height: '425px', width: '100%', display: 'block'}} />
                    <div className="card-body text-center">
                        <h5 className="card-title">Via Github</h5>
                        
                        <a href="https://github.com/charlispilecki"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}