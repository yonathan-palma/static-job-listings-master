//hook
import { useState, useEffect } from "react";
// import { Provider, useStore } from "react-redux";
// import { createStoreHook } from "react-redux";
// import ReactReduxContext from "react-redux";
// import { createStore } from "redux";

//componets
import Header from "./components/Header";
import CardJobs from "./components/CardJobs";
import FilterContainer from "./components/filterContainer";

//data
import initialValues from "./data.json";

import "./App.css";

function App() {
  const [filters, setFilters] = useState([]);
  // const [jobs, setJobs] = useState([...initialValues]);
  // const filters = ["array"];
  // const store = createStore(rootReducer);

  // use useMemo para calculos constosos
  const generateFiltersJobs = () => {
    if (filters.length > 0) {
      const newJobs = initialValues.filter((job) => {
        if (filters.includes(job.role)) return true;
        if (filters.includes(job.level)) return true;
        return job.languages.some((elem) => filters.includes(elem));
      });
      // console.log(newJobs);
      return [...newJobs];
    } else {
      // console.log(jobs);
      return [...initialValues];
    }
  };
  const visibleJobs = generateFiltersJobs();

  const handleFilter = (item) => {
    if (filters.includes(item)) {
      return false;
    } else {
      let newFilters = [...filters, item];
      setFilters(newFilters);
    }
  };

  return (
    <>
      <Header />
      {/* <Provider store={filters}> */}
      {Boolean(filters.length) && (
        <FilterContainer filters={filters} setFilters={setFilters} />
      )}
      <main className="grid place-items-center relative py-16">
        <section className="jobsCard w-10/12">
          <ul className="space-y-8 w-full">
            {visibleJobs.map((elem) => (
              //probar destructurar los props
              <CardJobs
                key={elem.id}
                jobs={elem}
                addFilter={handleFilter}
                filters={filters}
              />
            ))}
          </ul>
        </section>
      </main>
      {/* </Provider> */}
    </>
  );
}

export default App;
