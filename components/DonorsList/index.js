import React from "react";
import style from "./donors-list_.module.scss"
import Donor from "../Donor";

const DonorsList = (props) => {
    const {donors} = props;
    return (
        <div className={style['donors-list']}>
          <div className={style.list}>
              {donors.map((donor) => (
                  <Donor
                      key={donor.ID}
                      donor={donor}
                      name={donor['Name']}
                      description= {donor['Description']}
                      company={donor['Top company']}
                      img={`media/donors/${donor.ID}.png`}
                  />
              ))}
          </div>

        </div>
    )
}

export default DonorsList