import React from "react";

function Page2() {
  return (
    <div className=" flex flex-col justify-top items-center mt-3">
      <div className="max-w-7xl w-1/2 p-8 text-left">
        <div className="text-3xl font-light my-3">
          Tell us a little more about yourself
        </div>
        <div className="text-sm">
          <p className="my-10">
            Your answers will help us build an experience to match your needs.
          </p>
          <form>
            <label htmlFor="question" className="block mt-3 mb-2">
              Do you currently run an online business?
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">No, just exploring!</option>
              <option value="Option 2">Yes, I own a buisness</option>
            </select>
            <label htmlFor="question" className="block mt-3 mb-2">
              I primarily identify as a:
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">
                Freelancer or consultant(project-based work)
              </option>
              <option value="Option 2">salaried </option>
              <option value="Option 2">none of the options</option>
            </select>
            <label htmlFor="question" className="block mb-2 mt-3">
              Are you already teaching or offering content online?
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">
                No,I am just getting started sharing my knowledge
              </option>
              <option value="Option 2">Yes ,I do teach part-time online</option>
              <option value="Option 3">Yes,I teach online full-time</option>
            </select>
            <label htmlFor="question" className="block mb-2 mt-3">
              How big is your current audience (email list, social media
              followers, subscribers, etc.)?
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">1-1,000 people</option>
              <option value="Option 2">1,000-10,000 people</option>
              <option value="Option 3">10,000-25,000 people</option>
              <option value="Option 3">more then 25,000 people</option>
            </select>
            <label htmlFor="question" className="block mb-2 mt-3">
              Which topic is most relevant to your business or content?
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">Photo & Video</option>
              <option value="Option 2">Network</option>
              <option value="Option 3">Champaign</option>
            </select>
            <label htmlFor="question" className="block mb-2 mt-3">
              Approximately how much money do you make charging for your
              knowledge today (in courses, consulting, books, speaking, etc.)?
              We ask this so that we can provide you with relevant resources for
              the size and stage of your business.
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">I prefer not to answer</option>
              <option value="Option 2">around 20,000</option>
              <option value="Option 3">around 25,000</option>
              <option value="Option 3">around 30,000</option>
              <option value="Option 3">more than 30,000</option>
            </select>
            <label htmlFor="options" className="block mb-2">
              What are you hoping to do first on Teachable? (Select up to 3 to
              get started as quickly as possible)
            </label>
            <div id="options">
              <label htmlFor="option1" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  className="mr-2"
                />
                Create an online course
              </label>
              <br></br>
              <label htmlFor="option2" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  className="mr-2"
                />
                Create a coaching program
              </label>
              <br></br>
              <label htmlFor="option3" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  className="mr-2"
                />
                Create a digital download (ebook, article, template, worksheet,
                etc.)
              </label>
              <br></br>
              <label htmlFor="option3" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  className="mr-2"
                />
                Create a community or forum
              </label>
              <br></br>
              <label htmlFor="option3" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  className="mr-2"
                />
                Create a pre-sell
              </label>
              <br></br>
              <label htmlFor="option3" className="inline-block mb-2">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  className="mr-2"
                />
                I'm not sure yet
              </label>
              <br></br>
            </div>
            <label htmlFor="question" className="block mb-2 mt-3">
              How much content or training material (videos, worksheets,
              downloads, etc.) have you already prepared?
            </label>
            <select
              id="question"
              name="question"
              className="border border-gray-300 p-2 mb-4 w-full text-gray-500"
            >
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="Option 1">None, I am just getting started</option>
              <option value="Option 2">Few videos and worksheets</option>
              <option value="Option 3">A lot of material</option>
            </select>
           <div className="text-right"> <button
              type="submit"
              className="bg-white border border-black text-black py-2 px-4 rounded w-28 mt-6"
            >
              Next
            </button></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page2;
