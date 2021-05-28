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
                      name={donor.name}
                      description={donor.description}
                      img={donor.img}
                      company={donor.company}
                  />
              ))}
          </div>
        </div>
    )
}

export default DonorsList