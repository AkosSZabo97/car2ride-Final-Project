import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../features/Auth/Auth";
import "../../components/Styles/cardsImg.css";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [style, setStyle] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [price3, setPrice3] = useState("");
  const [price4, setPrice4] = useState("");
  const [price5, setPrice5] = useState("");
  const [price6, setPrice6] = useState("");

  const [vehicles, setVehicles] = useState([]);
  const [file, setFile] = useState(null);

  const db = firebase.firestore();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      db.collection("vehicles")
        .where("userId", "==", user.uid)
        .onSnapshot((res) => {
          const vehicleList = [];
          res.forEach((doc) => {
            vehicleList.push({ id: doc.id, ...doc.data() });
          });
          setVehicles(vehicleList);
        });
    }
  }, [db, user]);

  async function handleAddForm(e) {
    e.preventDefault();

    if (user) {
      try {
        let imageUrl = "";

        if (file) {
          const imageRef = firebase
            .storage()
            .ref()
            .child(`images/${Math.floor(Math.random() * 10000) + file.name}`);
          const snapshot = await imageRef.put(file);
          imageUrl = await snapshot.ref.getDownloadURL();
        }

        const docRef = await db.collection("vehicles").add({
          carName: title,
          carYear: year,
          carStyle: style,
          carEngine: engine,
          carTransmission: transmission,
          carPrice1: price1,
          carPrice2: price2,
          carPrice3: price3,
          carPrice4: price4,
          carPrice5: price5,
          carPrice6: price6,
          userId: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
      setTitle("");
      setYear("");
      setStyle("");
      setEngine("");
      setTransmission("");
      setPrice1("");
      setPrice2("");
      setPrice3("");
      setPrice4("");
      setPrice5("");
      setPrice6("");
    }
  }

  async function handleDelete(toDelete) {
    try {
      await db.collection("vehicles").doc(toDelete.id).delete();
      if (toDelete.imageUrl) {
        await firebase.storage().refFromURL(toDelete.imageUrl).delete();
        console.log("Image deleted");
      }
    } catch (error) {
      alert("Error removing document: ", error);
    }

    setVehicles(vehicles.filter((vehicle) => vehicle !== toDelete));
  }

  function handleFileUpload(e) {
    setFile(e.target.files[0]);
  }

  return (
    <>
      <div className="container pt-1">
        <h1>Rent your vehicle</h1>
        <div className="form pt-4 border border-secondary rounded-lg p-4">
          <form>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Car Name"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="year"
                className="form-control"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                requiered
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="style"
                className="form-control"
                placeholder="Car Body"
                onChange={(e) => setStyle(e.target.value)}
                value={style}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="engine"
                placeholder="Engine"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="transmission"
                className="form-control"
                placeholder="Transmission"
                onChange={(e) => setTransmission(e.target.value)}
                value={transmission}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price1"
                className="form-control"
                placeholder="Price for 1 day (€)"
                onChange={(e) => setPrice1(e.target.value)}
                value={price1}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price2"
                className="form-control"
                placeholder="Price for 2-3 days (€/day)"
                onChange={(e) => setPrice2(e.target.value)}
                value={price2}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price3"
                className="form-control"
                placeholder="Price for 4-7 days (€/day)"
                onChange={(e) => setPrice3(e.target.value)}
                value={price3}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price4"
                className="form-control"
                placeholder="Price for 8-14 days (€/day)"
                onChange={(e) => setPrice4(e.target.value)}
                value={price4}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price5"
                className="form-control"
                placeholder="Price for 15-30 days (€/day)"
                onChange={(e) => setPrice5(e.target.value)}
                value={price5}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price6"
                className="form-control"
                placeholder="Price for +30 days (€/day)"
                onChange={(e) => setPrice6(e.target.value)}
                value={price6}
                required
              />
            </div>
            <div className="form-group">
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-secondary btn-block"
                  onClick={handleAddForm}
                  required
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card-deck row-cols-3 row-cols-md-4 w-100 pl-5 pt-2">
        {vehicles.map((vehicle) => (
          <div className="p-3">
            <div className="card col" style={{ width: `23rem` }}>
              {vehicle.imageUrl && (
                <div>
                  <img
                    src={vehicle.imageUrl}
                    className="card-img-top pt-3"
                    alt=""
                    width="300"
                  />
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{vehicle.carName}</h5>
                <div className="row">
                  <div className="col-sm ">
                    <ul>
                      <li>Year: {vehicle.carYear}</li>
                      <li>Engine: {vehicle.carEngine}</li>
                      <li>Transmission: {vehicle.carTransmission}</li>
                      <li>Style: {vehicle.carStyle}</li>
                    </ul>
                  </div>
                  <div className="col-sm">
                    <ul>
                      <li>0-1 day: {vehicle.carPrice1} €/day</li>
                      <li>2-3 days: {vehicle.carPrice2} €/day</li>
                      <li>4-7 days: {vehicle.carPrice3} €/day</li>
                      <li>8-14 days: {vehicle.carPrice4} €/day</li>
                      <li>15-30 days: {vehicle.carPrice5} €/day</li>
                      <li>+30 days: {vehicle.carPrice6} €/day</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleDelete(vehicle)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
