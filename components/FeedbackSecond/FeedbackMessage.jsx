import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import sendMessageFromWaterCooler from "@/app/utils/api/telegramFormCoolers";

export const FeedbackMessage = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleChange = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        break;

      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (comments === "") return;
    setName("");
    setComments("");
    sendMessageFromWaterCooler({ feedback: true, name, comments });
    setFeedbackSent(true);
  };

  return (
    <div className="w-full mt-[170px] md:mt-20">
      <div className="block   px-4 pb-10 md:flex h-fit md:h-[800px] justify-center items-center gap-20">
        <div className="max-w-md  md:min-w-[500px] mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-6 ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Напишіть свій відгук!
            </h2>

            {feedbackSent ? (
              <div className="custom-animation">Дякую!</div>
            ) : (
              <div>
                <input
                  value={name}
                  onChange={(e) => handleChange(e.target.value, "name")}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                  placeholder="Ім'я"
                />
                <textarea
                  className="textComment"
                  name="comments"
                  rows="4"
                  value={comments}
                  placeholder="Ваше повідомлення"
                  onChange={(e) => handleChange(e.target.value, "comments")}
                ></textarea>

                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  text="Відпавити відгук"
                  className=" w-full h-12 text-  py-2 px-4 rounded-md  transition-colors duration-300"
                ></Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
