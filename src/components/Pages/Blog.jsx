import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh-146px] my-16">
      <h1 className="uppercase text-xl font-bold mb-6 text-center">
        relevant questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-xl border-2">
          <h1 className="text-2xl font-bold mb-4">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="mt-3 text-gray-500">
            As the name may suggest, an ID token is an artifact that client
            applications can use to consume the identity of a user. For example,
            the ID token can contain information about the name, email, and
            profile picture of a user.
          </p>

          <p className="mt-3 text-gray-500">
            As mentioned, for security purposes, access tokens may be valid for
            a short amount of time. Once they expire, client applications can
            use a refresh token to "refresh" the access token.
          </p>
        </div>

        <div className="p-5 rounded-xl border-2">
          <h1 className="text-2xl font-bold mb-4">
            2. Compare SQL and NoSQL databases?
          </h1>
          <p className="mt-3 text-gray-500">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>

        <div className="p-5 rounded-xl border-2">
          <h1 className="text-2xl font-bold mb-4">
            3. What is express js? What is Nest JS?
          </h1>
          <p className="mt-3 text-gray-500">
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
        <div className="p-5 rounded-xl border-2">
          <h1 className="text-2xl font-bold mb-4">
            4. What is MongoDB aggregate and how does it work?
          </h1>
          <p className="mt-3 text-gray-500">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
