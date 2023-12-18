import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllAdminPrograms } from "../../redux/actions/program";
import styles from "../../styles/styles";
import ProgramCard from "../Route/ProgramCard/ProgramCard";

const AdminProfileData = ({ isOwner }) => {
  const { programs } = useSelector((state) => state.programs);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdminPrograms(id));
  }, [dispatch, id]);

  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Közösségi események
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Főoldal</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3
        lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0"
        >
          {programs &&
            programs.map((i, index) => (
              <ProgramCard data={i} key={index} isAdmin={true} />
            ))}
        </div>
      )}
    </div>
  );
};

export default AdminProfileData;
