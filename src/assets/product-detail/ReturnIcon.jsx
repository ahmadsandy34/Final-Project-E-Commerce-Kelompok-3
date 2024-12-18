import React from "react";

const ReturnIcon = ({ color = "black"} ) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3954_6704)">
        <path
          d="M26.6666 15.1669C26.3406 12.8206 25.2521 10.6465 23.5688 8.97959C21.8856 7.3127 19.701 6.24548 17.3515 5.94233C15.0021 5.63918 12.6181 6.1169 10.5669 7.30192C8.51569 8.48694 6.91098 10.3135 5.99998 12.5003M5.33331 7.16693V12.5003H10.6666"
          stroke={color}
        strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33331 17.834C5.65939 20.1804 6.74789 22.3544 8.43113 24.0213C10.1144 25.6882 12.299 26.7554 14.6484 27.0586C16.9979 27.3617 19.3818 26.884 21.433 25.699C23.4843 24.514 25.089 22.6874 26 20.5007M26.6666 25.834V20.5007H21.3333"
          stroke={color}
        strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3954_6704">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ReturnIcon;
