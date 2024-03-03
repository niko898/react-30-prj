import React from "react";

export default function CompoundInterestRateCalc({
  principleAmount,
  interestRate,
  years,
  mounthleContribution,
}) {
  const A = {
    P: principleAmount,
    r: interestRate / 100,
    n: 12,
    t: years,
    PMT: mounthleContribution,
  };

  return (
    <div>
      ${" "}
      {A.PMT === null
        ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)
        : (
            A.P * Math.pow(1 + A.r / A.n, A.n * A.t) + 
            (A.PMT * (Math.pow(1 + A.r / A.n, A.n * A.t)-1))/(A.r/A.n)
            ).toFixed(2)
      }
    </div>
  );
}
