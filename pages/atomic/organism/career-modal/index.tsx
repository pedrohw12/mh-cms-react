import { useState } from "react";
import { Career } from "../../../types/career";
import axios from "axios";
import BasicModal from "../modal";

type Props = {
  isModalOpenProp: boolean;
};

const CareerModal: React.FC<Props> = ({ isModalOpenProp }: Props) => {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState<string>("");
  const [niceToHave, setNiceToHave] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMemberToEdit, setSelectedCareerToEdit] = useState<Career>(
    {} as Career
  );

  function registerCareer() {
    if (!title || !period || !location || !salary || !responsibilities) {
      alert("Please fill all the inputs.");
      return;
    }
    axios
      .post("http://localhost:3333/careers", {
        title,
        period,
        location,
        salary,
        responsibilities,
        requirements,
        niceToHave,
      })
      .then((response) => {
        console.log(response);
        alert("Career successfully registered!");
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  }

  function handleEdit() {
    const requerimentsFormat =
      typeof requirements === "string"
        ? requirements
            .split('"')
            .filter(
              (el: string) =>
                el.length > 0 ||
                el.trim().indexOf("@") !== -1 ||
                el.trim().indexOf("@") !== -1
            )
            .filter((element: string) => element.indexOf("@") === -1)
        : requirements;

    const responsibilitiesFormat =
      typeof responsibilities === "string"
        ? responsibilities
            .trim()
            .split("@")
            .filter((el: string) => el.length > 0)
            .filter((element: string) => element.indexOf("@") === -1)
        : responsibilities;

    console.log("responsibilities", responsibilities);
    console.log("responsibilitiesFormat", responsibilitiesFormat);

    axios
      .put(`http://localhost:3333/careers/${selectedMemberToEdit._id}`, {
        title,
        period,
        location,
        salary,
        responsibilities: responsibilitiesFormat,
        requirements: requerimentsFormat,
        niceToHave,
      })
      .then((response) => {
        console.log(response);
        alert("Career successfully updated!");
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  }
  function handleSubmit() {
    if (!isEditing) {
      registerCareer();
      return;
    }
    handleEdit();
  }
  function handleChangeRequirement(e: any) {
    setRequirements(e.trim());
  }
  function clearInputs() {
    setIsEditing(false);
    setTitle("");
    setPeriod("");
    setLocation("");
    setSalary("");
    setResponsibilities("");
    setRequirements("");
    setNiceToHave("");
  }
  return (
    <BasicModal
      modalTitle="ADD"
      handleClose={() => setIsModalOpen(false)}
      handleOpen={() => {
        clearInputs();
        setIsModalOpen(true);
      }}
      isModalOpen={isModalOpen}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
        {/* <TextEditor /> */}
        {/* <input
        style={{
          height: 40,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
        {/* <input
        style={{
          height: 40,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      /> */}
        {/* <input
        style={{
          height: 40,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      /> */}
        {/* <input
        style={{
          height: 40,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      /> */}
        {/* <TextEditor /> */}
        {/* <textarea
        style={{
          height: 300,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Requiriments"
        value={requirements}
        onChange={(e) => handleChangeRequirement(e.target.value)}
      /> */}
        {/* <textarea
        style={{
          height: 300,
          borderRadius: 10,
          marginBottom: 5,
          padding: 10,
        }}
        placeholder="Nice to have"
        value={niceToHave}
        onChange={(e) => setNiceToHave(e.target.value)}
      /> */}
      </div>
    </BasicModal>
  );
};

export default CareerModal;
