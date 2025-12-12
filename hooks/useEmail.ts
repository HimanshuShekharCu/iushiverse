import React from "react";
export const useEmail = () => {
  const [result, setResult] = React.useState("");
  const accessKey = "9107a7f6-0b41-4b30-913a-582874f1cac5";
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return { result, onSubmit };
};
