import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* <h1 className="x-large text-primary">Gang Assemble</h1> */}
          <p>
            <img src="https://see.fontimg.com/api/renderfont4/qEn1/eyJyIjoiZnMiLCJoIjoxMDUsInciOjEwMDAsImZzIjoxMDUsImZnYyI6IiM5MTJEOUQiLCJiZ2MiOiIjMzUzRDRCIiwidCI6MX0/R2FuZyBBc3NlbWJsZQ/heroes-assemble-bold-expandtalic.png" alt="Avengers fonts"/>
          </p>
          <p className="lead">
            Yo gang is yo fam, yk what I’m saying?
          </p>
          <p className="lead">
            Create Gangster profile/portfolio, share posts, plan out raids, 
            and check on the fam, yk what I mean? So it’s all good.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
