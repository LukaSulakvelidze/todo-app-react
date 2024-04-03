import React from "react";

const Input = ({
  border,
  form_className,
  onclick,
  radio_input_className,
  create_input_className,
  onKeyDown,
  onchange,
  value,
  error_span,
}) => {
  return (
    <>
      <form className={form_className} style={{ border: border }}>
        <div className="checkbox_cont">
          <input
            onClick={onclick}
            className={radio_input_className}
            type="button"
          />
        </div>
        <input
          className={create_input_className}
          type="text"
          placeholder="Create a new todo…"
          onKeyDown={onKeyDown}
          onChange={onchange}
          value={value}
        />
      </form>

      {error_span}
    </>
  );
};

export default Input;
