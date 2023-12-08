import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as L from "../Layout/Layout.styles";
import * as S from "./Contact.styles";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters")
      .max(30, "You full name cannot be longer than 30 characters")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Your subject must be at least three characters")
      .max(30, "You full name cannot be longer than 30 characters")
      .required("Please enter your subject"),
    email: yup
      .string()
      .min(3, "Your email address must be at least three characters")
      .matches(/^(?!.*@[^,]*,)/, "This is not a valid email address")
      .required("Please enter a valid email address"),
    body: yup.string().min(3, "Your message needs to be a minimum of three characters").max(1000).required("Please enter a message"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <L.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact us</h1>
        <S.Input placeholder="Full name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <S.Input placeholder="Subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
        <S.Input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <S.Textarea placeholder="Body" {...register("body")} />
        <p>{errors.body?.message}</p>
        <S.Button type="submit">Submit</S.Button>
      </S.Form>
    </L.Container>
  );
}
