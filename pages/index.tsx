import Head from "next/head";
import { useEffect, useState } from "react";

import jwt from "jsonwebtoken";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("You are not logged in");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());

    const token = res.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin!"
        }`
      );
    } else {
      setMessage("Something went wrong");
    }
  };

  return (
    <div>
      <Link href="/sahil/activities">
        <a>surf</a>
      </Link>
      <h1>{message}</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="LOGIN" onClick={submitForm} />
      </form>
    </div>
  );
}
