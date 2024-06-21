import {BookCreatedFlagContext} from "@/context/BookCreatedFlagContext";
import {createBooking, getCarLocation, getStoreLocations} from "@/services";
import React, {useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";

function Form({car, locations}: any) {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const {showToastMsg, setShowToastMsg} = useContext(BookCreatedFlagContext);
    const [formValue, setFormValue] = useState({
        userName: 'ahmed',
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
        carId: ""
    });
    const today: any = new Date().toISOString().split('T')[0];

    useEffect(() => {
        if (car) {
            console.log(car?.id, "****************************");
            setFormValue((prevFormValue) => ({
                ...prevFormValue,
                carId: car.id
            }));
            getStoreLocation_(car.id);
        }
    }, [car]);

    const getStoreLocation_ = async (id: any) => {
        console.log(id);
        const resp: any = await getCarLocation(id);
        console.log(resp);
        setStoreLocation(resp?.carLists[0]);
    };

    const handleChange = (event: any) => {
        const {name, value} = event.target;

        setFormValue((prevFormValue) => {
            const updatedFormValue = {...prevFormValue, [name]: value};

            if (name === 'pickUpDate' && updatedFormValue.dropOffDate && new Date(updatedFormValue.dropOffDate) < new Date(value)) {
                updatedFormValue.dropOffDate = value;
            }

            if (name === 'pickUpTime' && updatedFormValue.dropOffTime && new Date(`1970-01-01T${updatedFormValue.dropOffTime}:00`) < new Date(`1970-01-01T${value}:00`)) {
                updatedFormValue.dropOffTime = value;
            }

            return updatedFormValue;
        });
    };

    const handleSubmit = async () => {
        console.log(formValue);
        const resp = await createBooking(formValue);
        console.log(resp);
        if (resp) {
            toast.success("Reservation successfully completed");
        }
    };

    return (
        <div>
            <div className="flex flex-col w-full mb-5 bg">
                <label className="text-white">PickUp Location</label>
                <select className="select select-bordered w-full max-w-lg text-white"
                        name="location"
                        onChange={handleChange}
                >
                    <option value="PickUp" style={{color: 'gray'}}>PickUp Location?</option>
                    {storeLocation?.address && storeLocation.address.map((object: any, index: number) => (
                        <option className="text-white" key={index}>{object.address}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-5 mb-5 text-white">
                <div className="flex flex-col w-full ">
                    <label className="text-white">Pick Up Date</label>
                    <input
                        type="date"
                        min={today}
                        value={formValue.pickUpDate} // Controlled input
                        onChange={handleChange}
                        name="pickUpDate"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-white">Drop Off Date</label>
                    <input
                        type="date"
                        min={formValue.pickUpDate || today} // Dynamic minimum date
                        value={formValue.dropOffDate} // Controlled input
                        onChange={handleChange}
                        name="dropOffDate"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex gap-5 ">
                <div className="flex flex-col w-full mb-5 text-white">
                    <label className="text-white">Pick Up Time</label>
                    <input
                        type="time"
                        value={formValue.pickUpTime} // Controlled input
                        onChange={handleChange}
                        name="pickUpTime"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full mb-5 text-white">
                    <label className="text-white">Drop Off Time</label>
                    <input
                        type="time"
                        value={formValue.dropOffTime} // Controlled input
                        onChange={handleChange}
                        name="dropOffTime"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mb-5 text-white">
                <label className="text-white">Contact Number</label>
                <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    name="contactNumber"
                    pattern="[0-9+]*"
                    title="Please enter numbers and the plus sign only"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>

            <div className="flex flex-col w-full mb-5 text-white">
                <label className="text-white">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>

            <div className="modal-action">
                <button className="btn">Close</button>
                <button
                    className="btn bg-red-500 text-white hover:bg-red-800"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;
