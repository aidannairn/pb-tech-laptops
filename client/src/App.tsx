import React from "react";
import Test from "./components/Test";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        laptops: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_DEV_APOLLO_URI,
  cache,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello World</h1>
      <Router>
        <Routes>
          <Route path="/graphql" element={<Test />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
