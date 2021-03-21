export default function FeaturedProject(props) {

    

    return (
        <div className="row">
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <div className="card mb-3;">
                        <div className="card bg-dark text-black zoom">
                            <img className="card-img project-image" src={props.img}
                                alt={props.name} />
                            <div className="card-img-overlay">
                                <div className="box radius-small scheme-main text-black text-center">
                                    <h5 className="card-title"><a href={props.url}>{props.name}</a>
                                    <span className="icon">
                                        <a href={props.github}>
                                    <img className="icon-is-small pl-2" src="img/GitHub-Mark-32px.png" alt="github link"></img></a>
                                  </span></h5>
                                    <p className="card-text text-muted">{props.tech}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}