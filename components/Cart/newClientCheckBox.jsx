export const NewClientCheckBox = ({ toggleNewClient, newClient }) => {
  return (
    <>
      <div className="flex justify-center md:justify-normal mt-4 items-center border-b-[1px] pb-[24px]">
        <p>Ви новий клієнт?</p>

        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="on"
            data-ripple-dark="true"
          >
            <input
              onChange={() => {
                toggleNewClient();
              }}
              name="type"
              checked={newClient ? true : false}
              type="radio"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#91C81E]  hover:before:opacity-10"
              id="morning"
            />
            <span className="absolute text-[#91C81E] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </span>
          </label>
          <label
            className={`${
              newClient ? "text-[#91C81E]" : "text-gray-700"
            } mt-px font-light  cursor-pointer select-none`}
            htmlFor="morning"
          >
            Так
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="on"
            data-ripple-dark="true"
          >
            <input
              onChange={toggleNewClient}
              name="type"
              checked={newClient ? false : true}
              type="radio"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#91C81E]  hover:before:opacity-10"
              id="morning"
            />
            <span className="absolute text-[#91C81E] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </span>
          </label>
          <label
            className={`${
              !newClient ? "text-[#91C81E]" : "text-gray-700"
            } mt-px font-light  cursor-pointer select-none`}
            htmlFor="morning"
          >
            Ні
          </label>
        </div>
      </div>
    </>
  );
};
