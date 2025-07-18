import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://moya-planeta.ru/upload/images/xl/26/9c/269c493d6fa180bc490e17f19c74f7a13a56633d.jpg",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const responce = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    console.log("responce CreateProduct", responce);

    onCreate(responce.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
