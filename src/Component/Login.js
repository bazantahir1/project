import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Login(props) {
    // API fetching
    const [data, setData]=useState([])

    const fetchData = () => {
      fetch('http://localhost:4000/show')
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setData(response);
        });
      }

      const [exercise,setExercise]=useState({
        name:"",
        description:"",
        activitytype:"",
        duration:"",
        date:""
      })

      const onchange = (event) => {
        setExercise({ ...exercise, [event.target.name]: event.target.value });
      };
      console.log(exercise)

      const [changedata, setChangedata]=useState(false)
      const [idupdate,setIdupdate]=useState("")

      const handlesubmit = (e) => {
        e.preventDefault();
        if (changedata) {
          axios
            .put(`http://localhost:4000/update/${idupdate}`, exercise)
            .then(res => {
              setChangedata(false);
              setExercise({
                name:"",
                description:"",
                activity:"",
                duration:"",
                date:""
              });
              fetchData();
            });
        } else {
          axios
            .post('http://localhost:4000/create', exercise)
            .then(res => {
                setExercise({
                name:"",
                description:"",
                activity:"",
                duration:"",
                date:""
              });
              fetchData();
            });
        }
      };

      const editData = (id) => {
        let newUser = data.find(element => {
          return element._id === id;
        });
        setChangedata(true);
        setIdupdate(id);
        setExercise({
          name: newUser.name,
          description: newUser.description,
          activity: newUser.activity,
          duration:newUser.duration,
          date:newUser.date
        });
      };

      // Delete Data
    const deleteData = (id) => {
      axios
      .delete(`http://localhost:4000/delete/${id}`)
      .then(res => {
      fetchData();
    });
  };

useEffect(()=>{
  fetchData();
},[])
  return (
    <div>
    <form className='image' onSubmit={handlesubmit}>
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-3'></div>
        <div className='col-6'>
          <div className='form-group' >
            <label>Name</label>
            <input type="text" className="form-control" value={exercise.name} name='name' onChange={onchange}/>
          </div>
          <div className='form-group'>
            <label>Description</label>
            <input type="text" className="form-control" value={exercise.description} name='description' onChange={onchange}/>
          </div>
        <div className='form-group'>
            <label>Activity Type</label>
            <div>
            <select className="custom-select" id="inputGroupSelect04" value={exercise.activitytype} name='activitytype' onChange={onchange}>
                <option selected>Choose...</option>
                <option value="run">Run</option>
                <option value="bicycle">Bicycle Ride</option>
                <option value="swim">Swim</option>
                <option value="walk">Walk</option>
                <option value="hike">Hike</option>
            </select>
            </div>
        </div>
        <div className='form-group'>
            <label>Duration</label>
            <input type="time" className="form-control" value={exercise.duration} name='duration' onChange={onchange}/>
        </div>
        <div className='form-group'>
            <label>Date</label>
            <input type="date" className="form-control" value={exercise.date} name='date' onChange={onchange}/>
        </div>

        <div className='form-group'>
            <input type="submit" className='btn btn-success'/>
        </div>
      </div>
      </div>

    </div>
    </form>
    <div className='col-3'></div>
    <div className='bc'>
    <div className="container-fluid row">
      <div className='card-deck mt-3 ml-3 mb-3 mr-3'>
      {
      data.map((u,i)=>(
        <div className="col-4" key={i}>
          <div className="card mb-2 buttonbc">
            <div className="card-body">
              <p className="card-title">Name: {u.name}</p>
              <p>Activity: {u.activitytype}</p>
              <p>Duration: {u.duration}</p>
              <p>Date: {u.date}</p>
              <p className="card-text">Description: {u.description}</p>
              <button to="#" className="btn btn-primary mr-3" onClick={()=>editData(u._id)}>Edit</button>
              <button to="#" className="btn btn-danger" onClick={()=>deleteData(u._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
      </div>
      </div>
  )
}

export default Login