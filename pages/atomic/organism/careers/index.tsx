import type { NextPage } from "next";
import styles from "../../../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import BasicModal from "../modal";
import TextEditor from "../../molecules/quill";
import TextField from "@mui/material/TextField";
import { CareerRepository } from "../../../../repository/careerRepository";
import { Career } from "../../../types/career";
import CareersGrid from "../careers-grid";

const Careers: NextPage = () => {
  const careerRepository = new CareerRepository();
  const [careers, setCareers] = useState<Career[]>([]);
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

  useEffect(() => {
    careerRepository
      .getCareers()
      .then(setCareers)
      .catch((err) => console.log("err", err));
  }, []);

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
      .then(() => {
        setIsModalOpen(false);
      })
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
      .then(() => setIsModalOpen(false))
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    if (!isEditing) {
      registerCareer();
      return;
    }
    handleEdit();
  }

  function populateFieldsToEdit(career: Career) {
    setIsEditing(true);
    setSelectedCareerToEdit(career);
    setTitle(career.title);
    setPeriod(career.period);
    setLocation(career.location);
    setSalary(career.salary);
    setResponsibilities(career.responsibilities);
    setRequirements(career.requirements);
    setNiceToHave(career.niceToHave);
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

  function handleDelete(career: Career) {
    careerRepository.deleteCareer(career._id);
  }

  return (
    <div className={styles.container}>
      <BasicModal
        modalTitle="ADD"
        handleClose={() => setIsModalOpen(false)}
        handleOpen={() => {
          clearInputs();
          setIsModalOpen(true);
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
              onChange={(e) => setTitle(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              id="outlined-basic"
              label="Period"
              variant="outlined"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              id="outlined-basic"
              label="Salary"
              variant="outlined"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              sx={{ marginBottom: 5 }}
            />
            <b style={{ color: "#000", zIndex: 50 }}>Responsibilities</b>
            <TextEditor
              value={responsibilities}
              onChange={(e) => setResponsibilities(e)}
            />
            <b style={{ color: "#000", zIndex: 50, marginTop: 100 }}>
              Requirements
            </b>
            <TextEditor
              value={requirements}
              onChange={(e) => setRequirements(e)}
            />
            <b style={{ color: "#000", zIndex: 50, marginTop: 100 }}>
              Nice to have
            </b>
            <TextEditor value={niceToHave} onChange={(e) => setNiceToHave(e)} />
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
      <CareersGrid
        careers={careers}
        handleDelete={(career: Career) => handleDelete(career)}
        populateFieldsToEdit={(career: Career) => populateFieldsToEdit(career)}
        setIsModalOpen={(value: boolean) => setIsModalOpen(value)}
      />
    </div>
  );
};

export default Careers;
