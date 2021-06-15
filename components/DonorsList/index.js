import React from "react";
import style from "./donors-list_.module.scss"

import Donor from "../Donor";

const DonorsList = (props) => {
    const {donors} = props;
    return (
        <div className={style['donors-list']}>
          <div className={style.list}>
              {donors.map((donor, index) => (
                  <Donor
                      key={index}
                      name={donor.Donor}
                      description= {`${donor.Department != ""  ? donor.Department : ''} ${donor.Year != "" ? (donor.Year) : ''}`}
                      // img={donor.img}
                      company={donor.Company}
                  />
              ))}
          </div>
        </div>
    )
}

export default DonorsList