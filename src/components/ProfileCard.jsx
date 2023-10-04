import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { UpdateProfile } from "../redux/userSlice";
import { BsPersonFillAdd, BsBriefcase, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";

const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispath = useDispatch();
  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4">
        <div className="w-full flex items-center justify-between border-b pb-5   border-[#66666645]">
          <Link to={"/profile" + user?._id} className="flex gap-2">
            <img
              src={
                user?.profileUrl ??
                "https://i0.wp.com/vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?fit=860%2C681&ssl=1"
              }
              alt={user?.email}
              className="w-14 h-14 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-ascent-1">
                {user?.firstName} {user?.lastName}
              </p>
              <span className="text-ascent-2">
                {user?.profession ?? "Profession"}
              </span>
            </div>
          </Link>

          <div className="">
            {user?._id === data?._id ? (
              <FaEdit
                size={22}
                className=" text-blue cursor-pointer"
                onClick={() => dispath(UpdateProfile(true))}
              />
            ) : (
              <button
                className="bg-[#0444a430] text-sm text-white p-1 rounded"
                onClick={() => {}}
              >
                <BsPersonFillAdd />
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div className="flex gap-2 items-center text-ascent-2">
            <CiLocationOn className="text-xl text-ascent-1" />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          <div className="flex gap-2 items-center text-ascent-2">
            <BsBriefcase className="text-lg text-ascent-1" />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Friends</span>
            <span className="text-ascent-1 text-lg">
              {" "}
              {user?.friends?.length}{" "}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Who Viewed Your Profile</span>
            <span className="text-ascent-1 text-lg">{user?.views?.length}</span>
          </div>
          <span className="text-base text-blue">
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Joined</span>
            <span className="text-ascent-1 text-base">
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 py-4 pb-6">
            <p className="text-ascent-1 text-lg font-semibold">Social Profile</p>
            <div className="flex gap-2 items-center text-ascent-2">
                <BsInstagram className="text-xl text-ascent-1"/>
                <span>Instagram</span>
            </div>
            <div className="flex gap-2 items-center text-ascent-2">
                <BsTwitter className="text-xl text-ascent-1"/>
                <span>Twitter</span>
            </div>
            <div className="flex gap-2 items-center text-ascent-2">
                <BsFacebook className="text-xl text-ascent-1"/>
                <span>Facebook</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
