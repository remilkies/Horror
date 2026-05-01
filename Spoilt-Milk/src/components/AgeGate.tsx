import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AgeGate() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const isVerified = localStorage.getItem("spoiltMilkAgeVerified");

        if (!isVerified) {
            setShow(true);
        }
    }, []);

    const verifyAge = (age: number) => {
        if (age >= 18) {
            console.log("yayy, you can access this website");

            localStorage.setItem("spoiltMilkAgeVerified", "true");
            setShow(false);
        } else {
            alert("Sorry, you can't enter this website. Lie about your age next time.");
        }
    };

    //render Bootstrap react modal thingy
    return(

<div className="modal fade" id="verifyAge" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Verify Age</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h3>Greetings Mortal To Mine Webpage</h3>
        <p>I dont wanna be one of THOSE websites but shit here is intense and i gotta be respnosible with the power i wield to tigger/cause nightmares</p>
        <input id="age" type="number" name="age" placeholder="Age" required/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn">Understood</button>
      </div>
    </div>
  </div>
</div>
    )
}