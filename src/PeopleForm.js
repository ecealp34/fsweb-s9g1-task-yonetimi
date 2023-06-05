import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PeopleForm = ({ kisiler, submitFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange"
  });

  function myHandleSubmit(data) {
    submitFn(data.title);
    reset();
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(myHandleSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          {...register("title", { required: "İsim yazmalısınız", validate: { duplicate: (value) => !kisiler.includes(value) || "Bu isim daha önce eklenmiş"},})}
          type="text"
        />
        <p className="input-error">{errors.title?.message}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
