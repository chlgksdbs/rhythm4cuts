import React from "react";
import { Routes, Route } from "react-router-dom"; //Link,

import Home from "./pages/HomePage/Home";
import Join from "./pages/HomePage/Join";

import GameList from "./pages/GamePage/GameList";
import GameWaiting from "./pages/GamePage/GameWaiting";
import GamePlaying from "./pages/GamePage/GamePlaying";
import GameScore from "./pages/GamePage/GameScore";
import GameShot from "./pages/GamePage/GameShot";

import MyPage from "./pages/MyPage/Mypage";
import MyFriend from "./pages/MyPage/MyFriend";
import MyPoint from "./pages/MyPage/MyPoint";
import MyPhoto from "./pages/MyPage/MyPhoto";

function App() {
  return (
    <div>
      {/* <nav> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Join">Join</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/GameList">GameList</Link>
          </li>
          <li>
            <Link to="/GameWaiting">GameWaiting</Link>
          </li>
          <li>
            <Link to="/GamePlaying">GamePlaying</Link>
          </li>
          <li>
            <Link to="/GameScore">GameScore</Link>
          </li>
          <li>
            <Link to="/GameShot">GameShot</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/MyPage">MyPage</Link>
          </li>
          <li>
            <Link to="/MyFriend">MyFriend</Link>
          </li>
          <li>
            <Link to="/MyPoint">MyPoint</Link>
          </li>
          <li>
            <Link to="/MyPhoto">MyPhoto</Link>
          </li>
        </ul>
      </nav>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Join" element={<Join />} />

        <Route path="/GameList" element={<GameList />} />
        <Route path="/GameWaiting" element={<GameWaiting />} />
        <Route path="/GamePlaying" element={<GamePlaying />} />
        <Route path="/GameScore" element={<GameScore />} />
        <Route path="/GameShot" element={<GameShot />} />

        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyFriend" element={<MyFriend />} />
        <Route path="/MyPoint" element={<MyPoint />} />
        <Route path="/MyPhoto" element={<MyPhoto />} />
      </Routes>
    </div>
  );
}

export default App;
