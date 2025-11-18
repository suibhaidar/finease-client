import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext);

    const nameRef = useRef();
    const photoRef = useRef();

    const handleUpdateProfile = async () => {
        const updatedData = {
            displayName: nameRef.current.value,
            photoURL: photoRef.current.value,
        };

        try {
            await updateProfile(user, updatedData);

            setUser({ ...user, ...updatedData });

            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error("Failed to update profile: " + error.message);
        }
    };

    return (
        <div className="flex justify-center w-96 mx-auto mt-14 px-4">
            <div className="w-full max-w-xl bg-base-200 shadow-xl rounded-2xl p-8 border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-[#1C352D] mb-8">
                    My Profile
                </h1>
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/100"}
                        alt="profile"
                        className="w-35 h-35 rounded-full border-4 border-[#3b82f6] shadow-md object-cover"
                    />
                    <p className="mt-3 text-gray-700 font-medium">{user?.email}</p>
                </div>
                <div className="space-y-5">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            ref={nameRef}
                            defaultValue={user?.displayName}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Photo URL
                        </label>
                        <input
                            ref={photoRef}
                            defaultValue={user?.photoURL}
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition"
                        />
                    </div>
                    <button
                        onClick={handleUpdateProfile}
                        className="bg-gradient-to-r from-[#1C352D] to-[#6AA97B] w-full text-white font-semibold py-2 rounded-lg hover:bg-[#2563eb] transition shadow-md"
                    >
                        Update Profile
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;
