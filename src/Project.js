export default function Project(props) {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card mb-3;">
                <div className="card bg-dark text-black zoom">
                    <img className="card-img project-image" src={props.img} alt={props.name} 
                        style={{'max-height': '220px'}}/>
                    <div className="card-img-overlay">
                        <div className="box radius-small scheme-main text-black text-center">
                            <h5 className="card-title">
                                <a href={props.url}>{props.name}</a>
                                <span className="icon">
                                    <a href={props.github}>
                                        <img className="icon-is-small pl-2" src="img/GitHub-Mark-32px.png" alt="github link"></img>
                                    </a>
                                </span>
                            </h5>
                            <p className="card-text text-muted">
                                {props.tech}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}