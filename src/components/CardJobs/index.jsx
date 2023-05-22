import PropTypes from "prop-types";

// CardJobs.PropTypes = {
//   company: PropTypes.string.isRequired,
// };
CardJobs.propTypes = {
  jobs: PropTypes.object,
  addFilter: PropTypes.func,
  filters: PropTypes.array,
};

export default function CardJobs({ jobs, filters, addFilter }) {
  const {
    company,
    logo,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
  } = jobs;

  return (
    <li
      className={`relative grid bg-white rounded-md shadow-lg p-4 items-center md:grid-cols-[120px_auto_1fr] lg:px-8 ${
        featured && "border-DesaturatedDarkCyan-100 border-l-4"
      }`}
    >
      <img
        src={`./src/assets/${logo}`}
        alt="User Logo"
        className="absolute w-12 -top-5 left-2 md:relative md:top-0 md:w-20"
      />
      <div>
        <div className="flex py-4 gap-4 items-center">
          <h2 className="text-DesaturatedDarkCyan-100 font-semibold">
            {company}
          </h2>

          {jobs.new && (
            <span className="bg-DesaturatedDarkCyan-100 rounded-2xl px-2 py-1">
              <p className="uppercase">NEW!</p>
            </span>
          )}
          {featured && (
            <span className="bg-VeryDarkGrayishCyan rounded-2xl px-2 py-1">
              <p className="uppercase">FEATURED</p>
            </span>
          )}
        </div>
        <div className=" border-b border-gray-400 md:border-none">
          <h2 className="text-VeryDarkGrayishCyan font-semibold text-left mb-2">
            {position}
          </h2>
          <ul className="flex text-gray-400 list-disc gap-8 my-4">
            <li className="list-none">{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
          {/* <p>{`${postedAt}, ${contract}, ${location}`}</p> */}
        </div>
      </div>
      <ul className="flex flex-wrap text-DesaturatedDarkCyan-100 font-semibold pt-4 gap-5 md:p-0 md: md:justify-end">
        <li
          className={`${
            filters.includes(role)
              ? " bg-DesaturatedDarkCyan-100 text-white"
              : "bg - LightGrayishCyan"
          } rounded-md px-2 py-1 cursor-pointer hover:bg-DesaturatedDarkCyan-100 hover:text-white`}
          onClick={() => addFilter(role)}
        >
          {role}
        </li>
        <li
          className={`${
            filters.includes(level)
              ? " bg-DesaturatedDarkCyan-100 text-white"
              : "bg - LightGrayishCyan"
          } rounded-md px-2 py-1 cursor-pointer hover:bg-DesaturatedDarkCyan-100 hover:text-white`}
          onClick={() => addFilter(level)}
        >
          {level}
        </li>
        {languages.map((elem, i) => (
          <li
            key={`${elem + i}`}
            className={`${
              filters.includes(elem)
                ? " bg-DesaturatedDarkCyan-100 text-white"
                : "bg - LightGrayishCyan"
            } rounded-md px-2 py-1 cursor-pointer hover:bg-DesaturatedDarkCyan-100 hover:text-white`}
            onClick={() => addFilter(elem)}
          >
            {elem}
          </li>
        ))}
      </ul>
    </li>
  );
}
