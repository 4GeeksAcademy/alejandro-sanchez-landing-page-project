import React from "react";

const Card = () => {
    return (
        <div className="card text-center my-3 mx-0">
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde ex magni, inventore quae cumque doloribus officia saepe amet nam aliquid, atque expedita aperiam adipisci molestias molestiae delectus. Nemo, laborum.</p>
            </div>
            <div className="card-footer text-muted">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;