import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  //register : is used to connect input fields to the form

  //handleSubmit is a func to handle form submission

  //errors: contains validation errors for the form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password", { required: "password is reqiuired" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button disabled={isSubmitting}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
