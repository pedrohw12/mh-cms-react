import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { CareerRepository } from "../../../../repository/careerRepository";
import { Career } from "../../../types/career";
import CareersGrid from "../careers-grid";
import CareersModal from "../careers-modal";
import Page from "../../molecules/page";

const Careers: NextPage = () => {
  const careerRepository = new CareerRepository();
  const [careers, setCareers] = useState<Career[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState<string>("");
  const [niceToHave, setNiceToHave] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMemberToEdit, setSelectedCareerToEdit] = useState<Career>(
    {} as Career
  );

  useEffect(() => {
    careerRepository
      .getCareers()
      .then(setCareers)
      .catch((err) => console.log("err", err));
  }, []);

  function handleDelete(career: Career) {
    careerRepository.deleteCareer(career._id);
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

  return (
    <Page>
      <CareersModal
        selectedMemberToEdit={selectedMemberToEdit}
        isEditing={isEditing}
        onChangeTitle={(value) => setTitle(value)}
        title={title}
        onChangePeriod={(value) => setPeriod(value)}
        period={period}
        onChangeLocation={(value) => setLocation(value)}
        location={location}
        onChangeSalary={(value) => setSalary(value)}
        salary={salary}
        onChangeResponsibilities={(value) => setResponsibilities(value)}
        responsibilities={responsibilities}
        onChangeRequirements={(value) => setRequirements(value)}
        requirements={requirements}
        onChangeNiceToHave={(value) => setNiceToHave(value)}
        niceToHave={niceToHave}
        isModalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleOpen={() => {
          clearInputs();
          setIsModalOpen(true);
        }}
      />
      <CareersGrid
        careers={careers}
        handleEdit={(career) => {
          populateFieldsToEdit(career);
          setIsModalOpen(true);
        }}
        handleDelete={(career: Career) => handleDelete(career)}
        populateFieldsToEdit={(career: Career) => populateFieldsToEdit(career)}
        setIsModalOpen={(value: boolean) => setIsModalOpen(value)}
      />
    </Page>
  );
};

export default Careers;
