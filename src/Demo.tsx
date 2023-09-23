import axios from "axios";
import React from "react";

export default function Demo() {
  const [data, setData] = React.useState(null);
  const [apiURL, setApiURL] = React.useState("/api");
  return (
    <>
    <h1 className='text-4xl text-center text-gray-700 pt-4'>Webpack Sample App</h1>
    <div className="mx-32 my-8">
      <section className="mt-4 px-4">
        <h2 className="text-2xl text-gray-700">
          Useful documentation for development
        </h2>
        <ul className="mx-8">
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              className="text-blue-500 hover:text-blue-700"
            >
              React Docs
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/docs"
              className="text-blue-500 hover:text-blue-700"
            >
              Tailwind Docs
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/docs/"
              className="text-blue-500 hover:text-blue-700"
            >
              TypeScript Docs
            </a>
          </li>
        </ul>
      </section>
      <div className="py-2 border-b-2 border-black"></div>
      <section className="mt-4 px-4">
        <h2 className="text-2xl text-gray-700">API Test</h2>
        <div className="mt-4">
          <input
            className="border border-gray-400 rounded py-2 px-4 mb-4"
            type="text"
            value={apiURL}
            onChange={(e) => setApiURL(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            await axios
              .get(apiURL)
              .then((res) => setData(res.data))
              .catch((err) => setData(err.message));
          }}
        >
          Fetch Data
        </button>
        <div className="mt-4">
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            "Click the button to fetch data"
          )}
        </div>
      </section>
      <div className="py-2 border-b-2 border-black"></div>
    </div>
    </>
  );
}
