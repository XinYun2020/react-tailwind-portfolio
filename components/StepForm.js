/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useMultistepForm } from "../utils/hooks/useMultistepForm";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
export default function StepForm() {
  const [data, setDate] = useState(INITIAL_DATA);

  // Partial<> all attributes are optional (we dont want the full initial form data )
  function updateFields(fields) {
    // function updateFields(fields: Partial<FormData>) {
    setDate((prev) => {
      return { ...prev, ...fields }; // take all current value and add in all new values
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm
        {...data}
        updateFields={updateFields}
      />,
      <AddressForm
        {...data}
        updateFields={updateFields}
      />,
      <AccountForm
        {...data}
        updateFields={updateFields}
      />,
    ]);

  // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="absolute top-4 right-4">
        {currentStepIndex + 1}/{steps.length}
      </div>
      {step}
      <div className=" mt-1 flex gap-0.5 justify-end">
        {!isFirstStep && (
          <button
            type="button"
            onClick={back}
            className=" flex flex-row my-auto border border-gray-200 rounded-md px-2 py-1 
          bg-gradient-to-b from-white to-gray-100 cursor-pointer hover:to-gray-200"
          >
            <BiLeftArrow className=" justify-center mt-1 pr-1" />
            Back
          </button>
        )}
        <button
          type="submit"
          onClick={next}
          className={`  flex flex-row my-auto border border-gray-200 rounded-md px-2 py-1 
          bg-gradient-to-b from-white to-gray-100 cursor-pointer hover:to-gray-200 ${
            isLastStep
              ? "transition-all duration-100 ease-linear ring ring-orange-400 ring-offset-1 ring-opacity-50 hover:ring-0"
              : ""
          }`}
        >
          {isLastStep ? (
            "Finish"
          ) : (
            <>
              Next <BiRightArrow className=" justify-center mt-1 pl-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
