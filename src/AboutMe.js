export default function AboutMe() {
    return (
        <div className="row" id="about-me">
            <div className="offset-2 col-8 bg-info rounded mt-5">
                <img alt="headshot" className="rounded float-left p-2 m-3 img-thumbnail" src="img/profpic.png" />
                <p className="first-p lead"><strong>Hi, I'm Charli! Thanks for taking a look at my page.</strong></p>
                <p className="mt-4">I'm looking for work as a software developer and am enrolled in the Full Stack Bootcamp at
                    UT.</p>
                <p className="mt-2">I live in Austin, TX (born and raised) with my husband + two dogs + one cat, and am currently
                    employed as an Office Coordinator
                    at a startup insurance company.</p>
                <p className="mt-2">Some years ago, I graduated from UT with a degree in Communications. Although my degree isn't
                    directly
                    related to software engineering, I think my education and skills will contribute greatly to any
                    position. I do consider communication skills, both written and verbal, to be one of my strengths. 
                </p>
                <p className="mt-2">Take a look at my resume and projects and please reach out if you think I would be a good fit for any
                    open positions you have available!
                </p>
                    <a href="img/CharliSpileckiResume.pdf"
                            className="btn btn-primary mt-4">My Resume</a>
            </div>
        </div>
    )
}