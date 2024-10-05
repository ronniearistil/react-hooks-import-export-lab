import React from "react";
import { username, city } from '../data/user';  // Named imports

function Home() {
  return (
    <div id="home">
      <h1>{username} lives in {city}</h1>
    </div>
  );
}

export default Home;


