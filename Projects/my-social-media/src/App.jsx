import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  const handleSelection = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} handleSelection={handleSelection} />
      <div className="content">
        <Header />
        <div className="p-3 h-100">
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
