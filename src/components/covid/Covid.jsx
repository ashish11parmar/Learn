import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Covid = () => {
  const [Data, setData] = useState([]);

  const getCoviddata = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    console.log(data.statewise[0]);
    setData(data.statewise[0]);
  };

  useEffect(() => {
    getCoviddata();
  });

  return (
    <>

    <h1 className="text-center my-2">Covid 19</h1>
      <div class="container my-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">India</h5>
              <div class="card-body">
                <h5 class="card-title">India Covid</h5>
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Active Cases</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.active}</h5>
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Confirmed Cases</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.confirmed}</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Deaths</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.deaths}</h5>
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Recovered</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.recovered}</h5>
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Updated Time</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.lastupdatedtime}</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Deltaconfirmed</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.deltaconfirmed}</h5>
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Deltadeaths</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.deltadeaths}</h5>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <h5 class="card-header">Migratedother
</h5>
              <div class="card-body">
                <h5 class="card-title">{Data.migratedother}</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-5">
  <NavLink  to="/" className="btn btn-outline-primary">Go to Home</NavLink>
</div>
    </>
  );
};

export default Covid;
