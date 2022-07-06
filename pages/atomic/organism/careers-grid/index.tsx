import { Career } from "../../../types/career";
import CareerCard from "../career-card";
import styles from "../../../../styles/Home.module.css";

type Props = {
  careers: Career[];
  handleDelete: (career: Career) => void;
  handleEdit: (career: Career) => void;
  populateFieldsToEdit: (career: Career) => void;
  setIsModalOpen: (value: boolean) => void;
};

const CareersGrid: React.FC<Props> = ({
  careers,
  handleDelete,
  populateFieldsToEdit,
  handleEdit,
  setIsModalOpen,
}: Props) => {
  return (
    <>
      <h1>Careers</h1>
      <main className={styles.main}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {careers.map((career: any) => (
            <CareerCard
              key={career._id}
              title={career.title}
              period={career.period}
              location={career.location}
              salary={career.salary}
              responsibilities={career.responsibilities}
              requirements={career.requirements}
              niceToHave={career.niceToHave}
              handleEdit={() => {
                handleEdit(career);
              }}
              handleDelete={() => handleDelete(career)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default CareersGrid;
