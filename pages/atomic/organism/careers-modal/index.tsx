import BasicModal from "../modal";
import TextEditor from "../../molecules/quill";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Career } from "../../../types/career";
import { CareerRepository } from "../../../../repository/careerRepository";

type Props = {
  handleOpen: () => void;
  handleClose: () => void;
  onChangeTitle: (e: string) => void;
  title: string;
  onChangePeriod: (e: string) => void;
  period: string;
  onChangeLocation: (e: string) => void;
  location: string;
  onChangeSalary: (e: string) => void;
  salary: string;
  onChangeResponsibilities: (e: string) => void;
  responsibilities: string;
  onChangeRequirements: (e: string) => void;
  requirements: string;
  onChangeNiceToHave: (e: string) => void;
  niceToHave: string;
  isModalOpen: boolean;
};

const CareersModal: React.FC<Props> = ({
  handleOpen,
  handleClose,
  onChangeTitle,
  title,
  onChangePeriod,
  period,
  onChangeLocation,
  location,
  onChangeSalary,
  salary,
  onChangeResponsibilities,
  responsibilities,
  onChangeRequirements,
  requirements,
  onChangeNiceToHave,
  niceToHave,
  isModalOpen,
}: Props) => {
  const careerRepository = new CareerRepository();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMemberToEdit, setSelectedCareerToEdit] = useState<Career>(
    {} as Career
  );

  function registerCareer() {
    careerRepository
      .registerCareer(
        title,
        period,
        location,
        salary,
        responsibilities,
        requirements,
        niceToHave
      )
      .then(handleClose)
      .catch((err) => console.log(err));
  }

  function handleEdit() {
    careerRepository
      .updateCareer(
        selectedMemberToEdit._id,
        title,
        period,
        location,
        salary,
        responsibilities,
        requirements,
        niceToHave
      )
      .then(handleClose)
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    if (!isEditing) {
      registerCareer();
      return;
    }
    handleEdit();
  }
  return (
    <BasicModal
      modalTitle="ADD"
      handleClose={handleClose}
      handleOpen={() => {
        handleOpen();
      }}
      isModalOpen={isModalOpen}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            id="outlined-basic"
            label="Period"
            variant="outlined"
            value={period}
            onChange={(e) => onChangePeriod(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => onChangeLocation(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            id="outlined-basic"
            label="Salary"
            variant="outlined"
            value={salary}
            onChange={(e) => onChangeSalary(e.target.value)}
            sx={{ marginBottom: 5 }}
          />
          <b style={{ color: "#000", zIndex: 50 }}>Responsibilities</b>
          <TextEditor
            value={responsibilities}
            onChange={(e) => onChangeResponsibilities(e)}
          />
          <b style={{ color: "#000", zIndex: 50, marginTop: 100 }}>
            Requirements
          </b>
          <TextEditor
            value={requirements}
            onChange={(e) => onChangeRequirements(e)}
          />
          <b style={{ color: "#000", zIndex: 50, marginTop: 100 }}>
            Nice to have
          </b>
          <TextEditor
            value={niceToHave}
            onChange={(e) => onChangeNiceToHave(e)}
          />
        </div>
        <button
          style={{
            marginTop: 100,
            marginBottom: 20,
            height: 40,
            borderRadius: 8,
            width: "100%",
            zIndex: 50,
          }}
          className="submitButton"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </BasicModal>
  );
};

export default CareersModal;
