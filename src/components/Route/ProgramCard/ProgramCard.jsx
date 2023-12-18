import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../../Programs/Ratings";

const ProgramCard = ({ data,isEvent }) => {
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`${isEvent === true ? `/program/${data._id}?isEvent=true` : `/program/${data._id}`}`}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/admin/preview/${data?.admin._id}`}>
          <h5 className={`${styles.admin_name}`}>{data.admin.name}</h5>
        </Link>
        <Link to={`${isEvent === true ? `/program/${data._id}?isEvent=true` : `/program/${data._id}`}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
          <Ratings rating={data?.ratings} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProgramCard;
