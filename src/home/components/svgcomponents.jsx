
import React from "react";

import { useNavigate } from "react-router-dom";

export function SvgPhoneComponent({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 469 469.333"
      xmlSpace="preserve"
      class=""
    >
      <g>
        <path
          d="M206.246 0H50.086C22.527.031.196 22.363.168 49.922v369.492c.027 27.559 22.36 49.89 49.918 49.918h156.16c27.559-.027 49.89-22.36 49.922-49.918V49.922C256.137 22.363 233.805.032 206.246 0zm-78.078 426.668c-11.785 0-21.336-9.55-21.336-21.336 0-11.781 9.55-21.332 21.336-21.332 11.781 0 21.332 9.55 21.332 21.332 0 11.785-9.55 21.336-21.332 21.336zm32-362.668h-64C90.278 64 85.5 59.223 85.5 53.332s4.777-10.664 10.668-10.664h64c5.89 0 10.664 4.773 10.664 10.664S166.059 64 160.168 64zm0 0"
          fill={fill ? fill : "white"}
          opacity="1"
          dataoriginal="grey"
          class=""
        ></path>
      </g>
    </svg>
  );
}

export function SvgEmailComponent({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M1 224.336v265.327L171.567 357zM446 155.31v81.576l50.373-39.179zM265.659 3.523a15.003 15.003 0 0 0-19.318 0L206.566 37h98.867zM66 155.31l-50.373 42.397L66 236.886zM201.146 372l-180 140h469.708l-180-140zM340.432 357 511 489.664V224.335zM252.219 179.364c-12.167 0-24.752 11.83-24.752 31.626 0 20.126 12.276 33.646 23.742 33.646 12.074 0 21.975-14.127 22.687-31.889l.019-3.771c-.539-17.524-9.308-29.612-21.696-29.612z"
          fill={fill ? fill : "white"}
          opacity="1"
          dataoriginal="grey"
          class=""
        ></path>
        <path
          d="M310.854 342 416 260.219V82c0-8.284-6.716-15-15-15H111c-8.284 0-15 6.716-15 15v178.22L201.146 342zM150.258 239.908c-7.163-27.235-3.561-55.947 10.144-80.846 13.699-24.89 36.023-43.302 62.86-51.845 28.313-9.015 58.376-6.359 84.647 7.478 26.275 13.838 45.471 37.114 54.05 65.541.047.154.091.31.132.466 5.702 21.36 4.014 41.524-5.474 65.379-6.413 16.124-22.136 33.354-47.031 33.354-9.032 0-17.693-3.704-24.387-10.431a38.39 38.39 0 0 1-4.289-5.163c-8.407 6.838-18.602 10.794-29.7 10.794-14.498 0-28.594-7.038-38.673-19.31-9.718-11.832-15.069-27.577-15.069-44.336 0-16.834 5.694-32.411 16.034-43.86 10.196-11.29 24.309-17.766 38.718-17.766 7.925 0 15.456 1.889 22.223 5.448 1.312-6.953 7.407-12.206 14.726-12.206h.076c8.284.041 14.967 6.79 14.926 15.074l-.413 83.335c-.013 2.559.999 5.111 2.707 6.827.591.595 1.783 1.592 3.121 1.592 12.104 0 17.428-10.099 19.154-14.44 7.007-17.617 8.335-31.488 4.427-46.324-6.273-20.566-20.2-37.405-39.237-47.431-19.104-10.062-40.972-11.991-61.568-5.436-40.599 12.924-63.919 55.3-53.09 96.474 8.992 34.192 39.899 58.753 75.16 59.729 8.28.229 14.809 7.128 14.579 15.409-.225 8.14-6.895 14.585-14.986 14.585-.141 0-.281-.002-.423-.006-23.245-.643-46.191-8.9-64.612-23.252-19.138-14.908-32.53-35.252-38.732-58.833z"
          fill="grey"
          opacity="1"
          dataoriginal="grey"
          className=""
        ></path>
      </g>
    </svg>
  );
}

export function SvgBackButtonComponent() {
  const navigate = useNavigate();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      onClick={() => {
        navigate(-1);
      }}
    >
      <g>
        <path
          fill="white"
          fillRule="evenodd"
          d="M15 4a1 1 0 1 1 1.414 1.414l-5.879 5.879a1 1 0 0 0 0 1.414l5.88 5.879A1 1 0 0 1 15 20l-7.293-7.293a1 1 0 0 1 0-1.414z"
          clipRule="evenodd"
          opacity="1"
          dataoriginal="white"
        ></path>
      </g>
    </svg>
  );
}

export function SvgNigerianFlagComponent() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <clipPath id="a">
            <path
              d="M256.009 536.39a250.016 250.016 0 1 1 0 500.032 250.016 250.016 0 1 1 0-500.032z"
              fill="#000000"
              opacity="1"
              dataoriginal="#000000"
            ></path>
          </clipPath>
          <g clipPath="url(#a)" transform="matrix(0 .96 -.96 0 1010.908 10.24)">
            <path
              fill="#27ae60"
              d="M506 536.362v166.667H6V536.362z"
              opacity="1"
              dataoriginal="#27ae60"
            ></path>
            <path
              fill="#ffffff"
              d="M506 703.029v166.667H6V703.029z"
              opacity="1"
              dataoriginal="#ffffff"
            ></path>
            <path
              fill="#27ae60"
              d="M506 869.696v166.667H6V869.696z"
              opacity="1"
              dataoriginal="#27ae60"
            ></path>
          </g>
        </g>
      </svg>
      <span>EN</span>
    </div>
  );
}

export function SvgPasswordComponent({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32A10.66 10.66 0 0 0 64 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667A10.66 10.66 0 0 0 437.333 192zM287.938 414.823a10.67 10.67 0 0 1-10.604 11.844h-42.667a10.67 10.67 0 0 1-10.604-11.844l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z"
          fill={fill ? fill : "white"}
          opacity="1"
          dataOriginal="#000000"
        ></path>
      </g>
    </svg>
  );
}

export function SvgCustomerServiceComponent({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M64.782 57.331c-.096 4.439-6.676 8.024-14.782 8.024s-14.687-3.585-14.783-8.024c-12.4 1.134-22.114 11.557-22.114 24.25C13.104 95.033 24.008 95 37.458 95h25.085c13.449 0 24.354.033 24.354-13.419-.001-12.693-9.71-23.116-22.115-24.25z"
          fill={fill ? fill : "white"}
          opacity="1"
          dataoriginal="#000000"
        ></path>
        <path
          d="M29.531 40.467a6.447 6.447 0 0 0 1.674.224h1.148l.014-.001C34.776 51.556 41.759 59.414 50 59.414c7.399 0 13.769-6.348 16.74-15.507 1.397-.99 2.554-2.125 3.406-3.372.067-.014.138-.022.206-.038 2.624-.648 4.562-2.884 4.562-5.555V30.43c0-2.668-1.938-4.907-4.562-5.553v-.7C70.353 13.602 61.192 5 49.939 5s-20.408 8.603-20.408 19.178v.727c-2.563.685-4.443 2.897-4.443 5.526v4.511c0 2.629 1.88 4.841 4.443 5.525zM50 56.564c-8.246 0-15.058-8.956-16.128-20.572.725.182 1.616.534 2.586 1.211 0-.002-1.841-10.932 2.047-12.466 0 0 5.363 2.605 11.494 2.772 6.132-.167 11.497-2.772 11.497-2.772 3.886 1.534 2.043 12.464 2.043 12.466.958-.668 1.833-1.017 2.552-1.201v.263a32.549 32.549 0 0 1-.551 3.54c-2.538 2.296-6.899 3.951-11.906 4.258a2.63 2.63 0 0 0-1.712-.639h-3.54a2.666 2.666 0 1 0 0 5.332h3.54c.719 0 1.367-.287 1.848-.75 3.707-.207 7.091-1.039 9.9-2.334-2.895 6.55-7.932 10.892-13.67 10.892zm-.061-47.561c8.195 0 14.963 5.763 16 13.199-3.266-5.677-9.172-9.481-15.938-9.481-6.875 0-12.872 3.926-16.102 9.758.902-7.57 7.748-13.476 16.04-13.476z"
          fill={fill ? fill : "white"}
          opacity="1"
          dataoriginal="#000000"
        ></path>
      </g>
    </svg>
  );
}
export function OpenEyes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 488.85 488.85"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
          fill="white"
          opacity="1"
          dataoriginal="#000000"
        ></path>
      </g>
    </svg>
  );
}

export function ClosedEyes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      class=""
    >
      <g>
        <g dataname="Layer 16">
          <path
            d="M419.72 419.72 92.26 92.27l-.07-.08a19 19 0 0 0-26.78 27l28.67 28.67a332.64 332.64 0 0 0-88.19 89 34.22 34.22 0 0 0 0 38.38C65.86 364 160.93 416 256 415.35a271.6 271.6 0 0 0 90.46-15.16l46.41 46.41a19 19 0 0 0 26.94-26.79zM256 363.74a107.78 107.78 0 0 1-98.17-152.18l29.95 29.95a69.75 69.75 0 0 0 82.71 82.71l29.95 29.95a107.23 107.23 0 0 1-44.44 9.57zM506.11 236.81C446.14 148 351.07 96 256 96.65a271.6 271.6 0 0 0-90.46 15.16l46 46a107.78 107.78 0 0 1 142.63 142.63l63.74 63.74a332.49 332.49 0 0 0 88.2-89 34.22 34.22 0 0 0 0-38.37z"
            fill="white"
            opacity="1"
            dataOriginal="#000000"
          ></path>
          <path
            d="M256 186.26a69.91 69.91 0 0 0-14.49 1.52l82.71 82.7A69.74 69.74 0 0 0 256 186.26z"
            fill="white"
            opacity="1"
            dataoriginal="#000000"
          ></path>
        </g>
      </g>
    </svg>
  );
}
