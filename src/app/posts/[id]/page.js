import React from "react";
import { app } from "../../../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function PostPage({ params }) {
  const db = getFirestore(app);
  let data = {};
  const querySnapshot = await getDoc(doc(db, "posts", params.id));
  data = { ...querySnapshot.data(), id: querySnapshot.id };
  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.text}</p>
    </div>
  );
}
