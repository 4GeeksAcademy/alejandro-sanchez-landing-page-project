import React from "react";

const Jumbotron = () => {
    return (
        <div className="card container-xxl p-4 mx-auto" style={{ height: "20em", background: "#e6e6e6"}}>
            <div className="card-body px-0" style={{}}>
                <h1 className="card-title display-1">A Warm Welcome!</h1>
                <p className="card-text fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus fugit explicabo sequi quidem tempore, expedita quibusdam ipsa nisi non eum cum ex quod omnis veniam iure in incidunt enim.</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    )
}

export default Jumbotron;