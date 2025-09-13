import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log("log in success :", auth.currentUser);
      navigate("/dashboard")
    } catch (err) {
      setError("ایمیل یا رمز عبور اشتباه است!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#6a62d2]">
      <form
        onSubmit={handleLogIn}
        className="flex flex-col items-center p-4 rounded-lg bg-white gap-3"
      >
        <h1 className="text-[#252525]">Log In To Your Account</h1>
        <input
          type="email"
          placeholder="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="bg-[#e5e8ed] p-1 rounded-sm outline-none"
        />
        <input
          type="password"
          placeholder="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          className="bg-[#e5e8ed] p-1 rounded-sm outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sm bg-[#665ed1] text-[#e5e8ed]"
        >
          {loading ? "Loading..." : "Log In"}
        </button>
        {error && <h1 className="text-red-600">{error}</h1>}
      </form>
    </div>
  );
};
