import Home_img from "../../assets/img/Home_img.jpg";
import { NavLink } from "react-router-dom";


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
            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
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
                    </div>
                </div>
            </div>

            {/* service section */}
            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit minus illum et itaque blanditiis id facilis voluptatum ipsum mollitia, iure sunt doloremque praesentium, ratione porro modi tenetur. Magni, autem.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


            {/* story section */}
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="text-center py-5 my-5">
                                        <p>next</p>
                                        <h4>Our story</h4>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer section */}
            <div className="border-top py-5">
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Home</NavLink>
                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Story</NavLink>
                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Work</NavLink>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center">
                                            <h4>Repohub</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-end">
                                            <NavLink to="/" className="text-decoration-none text-secondary">Careers</NavLink>
                                            <NavLink to="/" className="text-decoration-none text-secondary ms-4">Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;