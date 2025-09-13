import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log("signUp success :", auth.currentUser);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#6a62d2]">
      <form onSubmit={handleSignUp} className="flex flex-col items-center p-4 rounded-lg bg-white gap-3">
        <h1 className="text-[#252525]">Create Your Account</h1>
        <input
          type="email"
          placeholder="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="bg-[#e5e8ed] p-1 rounded-sm"
        />
        <input
          type="password"
          placeholder="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          className="bg-[#e5e8ed] p-1 rounded-sm"
        />
        <button type="submit" disabled={loading} className="w-full rounded-sm bg-[#665ed1] text-[#e5e8ed]">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {error && <h1 className="text-red-600">{error}</h1>}
      </form>
    </div>
  );
};
