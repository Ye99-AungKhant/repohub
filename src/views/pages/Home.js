import Home_img from "../../assets/img/Home_img.jpg";

const Home = (props) => {

    const work = [
        { id: 1, src: Home_img, subtitle: "Rewind", desc: "Lorem ipsum dolor sit amet consectetur" },
        { id: 2, src: Home_img, subtitle: "Rewind", desc: "Lorem ipsum dolor sit amet consectetur" },
        { id: 3, src: Home_img, subtitle: "Rewind", desc: "Lorem ipsum dolor sit amet consectetur" },
        { id: 5, src: Home_img, subtitle: "Rewind", desc: "Lorem ipsum dolor sit amet consectetur" },
        { id: 6, src: Home_img, subtitle: "Rewind", desc: "Lorem ipsum dolor sit amet consectetur" }
    ]

    return (
        <div>
            {/* Home section */}
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="my-5">
                            <h3 className="fw-light">Digital Agency</h3>
                            <h3 className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <img src={Home_img} className="img-fluid" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Work section */}
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="my-5">
                            <h3 className="text-center">Our Work Select Projects</h3>
                            <div className="row row-cols-2 g-5">

                                {work.map((work_ud) => {
                                    return (
                                        <div className="col" key={work_ud.id}>
                                            <div className="card">
                                                <img src={work_ud.src} className="card-img-top" alt="card" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{work_ud.subtitle}</h5>
                                                    <p className="card-text">{work_ud.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;