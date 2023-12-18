import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProgramCard from "../ProgramCard/ProgramCard";

const FeaturedProgram = () => {
  const { allPrograms } = useSelector((state) => state.programs);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Felkapott események</h1>
        </div>
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4
        lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0"
        >
          {allPrograms && allPrograms.length !== 0 && (
            <>
              {allPrograms &&
                allPrograms.map((i, index) => (
                  <ProgramCard data={i} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProgram;
