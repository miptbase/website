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
                      name={donor.Donor}
                      description= {`${donor.Department != "" &&  donor.Department != "-" ? donor.Department : ''} ${donor.Year != "" &&  donor.Year != "-" ? `(${donor.Year})` : ''}`}
                      company={donor.Company}
                      text={donor.Text}
                      img={`media/donors/${donor.ID}.png`}
                  />
              ))}
          </div>

        </div>
    )
}

export default DonorsList