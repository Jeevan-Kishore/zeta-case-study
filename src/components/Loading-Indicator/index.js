import React from "react";

export const LoadingIndicator = ({
    width = 44,
    height = 44,
    color = "#c3c3c3"
}) => {
  return (
        <svg width={width} height={height} viewBox={` 0 0 ${width } ${height}`} xmlns="http://www.w3.org/2000/svg" stroke={color}>
                <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx={width/2} cy={height/2} r="1">
                <animate attributeName="r"
            begin="0s" dur="1.8s"
            values="1; 20"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.165, 0.84, 0.44, 1"
            repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
            begin="0s" dur="1.8s"
            values="1; 0"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3, 0.61, 0.355, 1"
            repeatCount="indefinite" />
                </circle>
            <circle cx={width/2} cy={height/2} r="1">
                <animate attributeName="r"
                         begin="-0.9s" dur="1.8s"
                         values="1; 20"
                         calcMode="spline"
                         keyTimes="0; 1"
                         keySplines="0.165, 0.84, 0.44, 1"
                         repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                         begin="-0.9s" dur="1.8s"
                         values="1; 0"
                         calcMode="spline"
                         keyTimes="0; 1"
                         keySplines="0.3, 0.61, 0.355, 1"
                         repeatCount="indefinite" />
            </circle>
            </g>
        </svg>
  );
};
