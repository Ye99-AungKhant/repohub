import Home_img from "../../assets/img/Home_img.jpg";

const Home = (props) => {
    return (
        <div>
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
        </div>
    )
}

export default Home;