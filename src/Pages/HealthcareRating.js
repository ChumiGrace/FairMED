import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../Components/Navbar/Header";
import Placeholder from "../Components/Assets/placeholder.png";
import Footer from "../Components/Footer/Footer";

function HealthcareRating() {
  const url = `http://localhost:8000/hcs_reviews_rates/`;
  const [query, setQuery] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          const data = await res.json();
          setFetchedData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  console.log(fetchedData);

  const sendSearch = async () => {
    const res = await fetch(
      `http://localhost:8000/hcs_reviews_rates/?search=${query}`
    );
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    } else {
      const data = await res.json();
      setFetchedData(data);
    }
  };
  console.log(fetchedData);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    sendSearch();
  };

  const identifyUser = async (event) => {
    localStorage.setItem("profileId", event.name);
  };

  const Card = ({ user }) => (
    <section className="container d-flex p-4 gap-5 healthcareProfile-container">
      <div>
        <img src={Placeholder} alt="Profile Picture" />
      </div>
      <div>
        <div className="healthcareName pt-4">
          <h2>{user.name}</h2>
          <div>
            <i className="fa fa-star font fs-5"></i>{" "}
            <a className="text-black text-decoration-none">
              {user.av_rate} rating
            </a>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger  btn-lg mt-3 w-100 rounded"
          >
            <a
              className="text-decoration-none text-black"
              href={`/view-healthcare/${user.id}`}
            >
              View Profile
            </a>
          </button>
        </div>
      </div>
    </section>
  );

  // Component that maps over the fetchedData and renders Card components
  const CardComponent = () => {
    return (
      <div>
        {fetchedData.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="search container d-flex gap-5">
        <div className="searchBar-container">
          <i className="fa fa-search" id="searchIcon" />
          <form onSubmit={handleSearch}>
            <input
              className="searchInput"
              onChange={handleSearchChange}
              placeholder="Type to search...."
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="advertiseHealthcare">
          <a href="/contact">Advertise your healthcare</a>
        </div>
      </div>
      <CardComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HealthcareRating;
