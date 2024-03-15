import React, { Fragment, useState } from 'react';

function EditData({ record }) {
    const [customer_name, setCustomer_name] = useState(record.customer_name);
    const [age, setAge] = useState(record.age);
    const [phone, setPhone] = useState(record.phone);
    const [location, setLocation] = useState(record.location);

    const setData = async () => {
        try {
            const body = { customer_name, age, phone, location };
            const data = await fetch(`http://localhost:5000/editData/${record.sno}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    const closebutton=()=>{
        setCustomer_name(record.customer_name)
        setAge(record.age)
        setPhone(record.phone)
        setLocation(record.location)
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${record.sno}`}>
                Edit
            </button>

            <div className="modal" id={`id${record.sno}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit the records</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="">Customer Name</label>
                            <input type="text" value={customer_name} onChange={e => setCustomer_name(e.target.value)} />
                            <br />
                            <label htmlFor="">Age</label>
                            <input type="text" value={age} onChange={e => setAge(e.target.value)} />
                            <br />
                            <label htmlFor="">Phone</label>
                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                            <br />
                            <label htmlFor="">Location</label>
                            <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={setData}>Set</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closebutton}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditData;
