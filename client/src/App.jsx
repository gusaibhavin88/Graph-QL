import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditUser from "./components/editUser";
import Userlists from "./components/Userlists";
import AddUser from "./components/addUser";
import { MyContextProvider } from "./components/myContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <MyContextProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Userlists />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
          </MyContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
