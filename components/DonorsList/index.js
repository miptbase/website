import React, { useState, useCallback } from "react";
import style from "./donors-list_.module.scss"
import { useIsMobile } from '../../hooks/useIsMobile';

import Donor from "../Donor";
import DonorDetails from "../DonorDetails";
import Button from "../ui/Button";

const DonorsList = (props) => {
    const isMobile = useIsMobile();
    const {donors} = props;

    return (
        <div className={style['donors-list']}>
          <div className={style.list}>
              {donors.map((donor) => (
                  <Donor
                      key={donor.ID}
                      donor={donor}
                      name={donor.Donor}
                      description= {`${donor.Department != "" &&  donor.Department != "-" ? donor.Department : ''} ${donor.Year != "" &&  donor.Year != "-" ? `(${donor.Year})` : ''}`}
                      // img={donor.img}
                      company={donor.Company}
                      text={donor.Text}
                      img={`media/${donor.ID}.png`}
                  />
              ))}
          </div>

        </div>
    )
}

export default DonorsList