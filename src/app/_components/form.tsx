"use client";

import React, { useState } from "react";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    const response = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Failed to submit form");
    }
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white rounded-md px-12 py-9"
      onSubmit={onSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        className="mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="name"
        type="text"
        placeholder="Doe"
        onChange={handleNameChange}
        required
      />
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="select_file"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="select_file"
        type="file"
        accept=".sgf"
        onChange={handleFileChange}
        required
      />
      <button
        type="submit"
        className="ring rounded-md px-4 py-2 mt-3 hover:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
