// import remove from "../../assets/images/icon-remove.svg";
import PropTypes from "prop-types";

FilterContainer.propTypes = {
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

const deleteFilter = (filters, keyFilter) => {
  //   let index = filters.indexOf(keyFilter);
  //   let newFilter = filters.slice(index, 1);
  let newFilter = filters.filter((elem) => elem != keyFilter);
  return newFilter;
};

export default function FilterContainer({ filters, setFilters }) {
  return (
    <section className="bg-white w-10/12 py-4 px-4 m-auto rounded-md shadow-lg flex gap-6 justify-between text-DesaturatedDarkCyan-100 relative -top-8">
      <ul className="flex flex-wrap font-semibold gap-1 md:gap-5">
        {filters.map((elem) => (
          <li key={elem} className="px-2 py-1 cursor-pointer flex">
            <p className="bg-LightGrayishCyan rounded-l-md py-1 px-2">{elem}</p>
            <button
              className="bg-DesaturatedDarkCyan-100 rounded-l-none border-none bg-[url(./assets/images/icon-remove.svg)] bg-no-repeat bg-center hover:bg-black"
              onClick={() => setFilters(deleteFilter(filters, elem))}
            ></button>
          </li>
        ))}
      </ul>
      <button
        className=" bg-white font-semibold border-none p-0 hover:underline"
        onClick={() => setFilters([])}
      >
        Clear
      </button>
    </section>
  );
}
