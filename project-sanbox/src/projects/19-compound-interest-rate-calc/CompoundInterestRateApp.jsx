import React, { useRef, useEffect, useState } from "react";
import FromGroup from "../components/FormGroup";

import CompoundInterestRateCalc from "./CompoundInterestRateCalc";

export default function CompoundInterestRateApp() {
  let inputPrinciple = useRef(null);
  useEffect(() => {
    inputPrinciple.current.focus();
  }, []);

  const [compound, setCompound] = useState({
    principleAmount: "",
    monthlyContribution: null,
    interestRate: "",
    years: "",
  });

  document.body.style.background = `#2174af`;

  return (
    <div className="container">
      <div
        className="card card-primary bg-warning shadow-md text-dark m-auto mt-4"
        style={{ maxWidth: 300 }}
      >
        <div className="card-body">
          <FromGroup
            labelText={"Prinsiple amount $"}
            inputType={"number"}
            values={compound.principleAmount}
            onChange={(e) =>
              setCompound({ ...compound, principleAmount: e.target.value })
            }
            reference={inputPrinciple}
          />
          <FromGroup
            labelText={"Monthly contribution $"}
            inputType={"number"}
            values={compound.monthlyContribution}
            onChange={(e) =>
                setCompound({ ...compound, monthlyContribution: e.target.value })
            }
          />
          <FromGroup
            labelText={"Interest rate %"}
            inputType={"number"}
            values={compound.interestRate}
            onChange={(e) =>
                setCompound({ ...compound, interestRate: e.target.value })
            }
          />
          <FromGroup
            labelText={"Years of investment"}
            inputType={"number"}
            values={compound.years}
            onChange={(e) =>
                setCompound({ ...compound, years: e.target.value })
            }
          />
        </div>
        <div className="card-footer text-right fs-lg">
            <CompoundInterestRateCalc 
                principleAmount={compound.principleAmount}
                interestRate={compound.interestRate}
                years={compound.years}
                mounthleContribution={compound.monthlyContribution}
            />
        </div>
      </div>
    </div>
  );
}
