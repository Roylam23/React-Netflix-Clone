import React from "react";
import { Nav } from "../Nav/Nav";
import { Profile } from "./Profile/Profile";

function User() {
  return (
    <div className="user">
      <div className="user-inner">
        <div className="user-inner-title">誰在觀賞影片？</div>
        <div className="user-icon">
          <Profile
            style={{
              backgroundImage:
                "url(https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTXsl8m-9tRBmwa3uyGucipvRQ0f_H89y72N4MzQBxwYoZD0Ln1fC6omL42h8Lq9hoqDULnLRtL6h9JHi1wMfe2eqeBP.png?r=a56)",
            }}
            name="Roy"
          />
          <Profile
            style={{
              backgroundImage:
                "url(https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfbUufzrmfRsdANqSictkngrWowz70xmkZl3xIrEQvQ525x2YSCxRxJxuh54gqa6rarNEothuXQYmIjrcZZLSlKGhs_w.png?r=f80)",
            }}
            name="Winky"
          />
          <Profile
            style={{
              backgroundImage:
                "url(https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS7y6M8hmMkDll4f1ikTU80bIXyygZncIeHT9CkoxSbVBcjYtBALq004ZpLiftf7BjKjosJHUC13sa3Ca3t5p5x2gp5P.png?r=fdd)",
            }}
            name="Fuck Boy"
          />
          <Profile
            style={{
              backgroundImage:
                "url(https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41)",
            }}
            name="Kobe"
          />
          <Profile
            style={{
              backgroundImage:
                "url(https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaJujx7HkolWZhHz-Ec2zG_nT-7oFhqVIvt2gMfgwH-8_-3gjR8sbj4kuTIbaxZi4jjS2oilfJHOUKGYSfSbReTZJXbjbyMO00coeqINlUe29x6pHWQqT3z3MfohdMI8RyO8RvHTO_4.png?r=f71)",
            }}
            name="JFFT"
          />
        </div>
        <button className="btn-manage">管理使用者</button>
      </div>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <User />
      </div>
    );
  }
}

export { Welcome };
