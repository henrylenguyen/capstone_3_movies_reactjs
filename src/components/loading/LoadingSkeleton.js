import React from 'react';

const LoadingSkeleton = ({ height, width, borderRadius,darkClass }) => {
  return (
    <div
      className={`${darkClass?"skeleton-dark":"skeleton"}`}
      style={{
        height: height||"100%",
        width: width||"100%",
        borderRadius: borderRadius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;