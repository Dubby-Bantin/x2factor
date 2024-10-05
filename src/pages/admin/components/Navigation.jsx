import { motion, useAnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";
import NavigationLink from "./NavigationLink";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../../contexts/AuthContext"; // Import your AuthContext
import { useNavigate } from "react-router-dom"; // Import useNavigate

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const { logout } = useAuth(); // Get the logout function from context
  const navigate = useNavigate(); // Create navigate function

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, containerControls, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/auth/admin/login"); // Redirect to the auth page after logging out
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-[#201e43] flex flex-col z-10 gap-20 p-5 fixed top-0 left-0 h-full"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div className="overflow-hidden w-full navbar-left">X2FACTOR</div>
          <button className="p-1 rounded-full flex" onClick={handleOpenClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200 stroke-[0.75] min-w-8"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Dashboard" path={"/admin/dashboard"}>
            <ChartBarIcon className="stroke-[0.75] min-w-8 w-8 text-white" />
          </NavigationLink>
          <NavigationLink name="Projects">
            <Square2StackIcon className="stroke-[0.75] min-w-8  w-8" />
          </NavigationLink>
          <NavigationLink name="Tasks">
            <DocumentCheckIcon className="stroke-[0.75] min-w-8  w-8" />
          </NavigationLink>
          <NavigationLink name="Amount Setup" path={"/admin/amount-setup"}>
            {/* <ChartPieIcon className="stroke-[0.75] min-w-8  w-8" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-[0.75] min-w-8  w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </NavigationLink>
          <NavigationLink name="Users" path={"/admin/users"}>
            <UsersIcon className="stroke-[0.75] min-w-8  w-8" />
          </NavigationLink>
        </div>
        {/* Logout as a Navigation Link */}
        <NavigationLink
          name="Logout"
          onClick={handleLogout}
          path={"/auth/admin/login"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-[0.75] min-w-8  w-8 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </NavigationLink>
      </motion.nav>
    </>
  );
};

export default Navigation;
