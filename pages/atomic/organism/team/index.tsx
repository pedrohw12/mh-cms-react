import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicSpeedDial from "../button";
import BasicButton from "../button";
import BasicModal from "../modal";
import MediaCard from "../member-card";

type Member = {
  _id: string;
  name: string;
  role: string;
  socialMediaUrl: string;
  description: string;
  imgUrl: string;
};

const Home: NextPage = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [socialMediaUrl, setSocialMediaUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMemberToEdit, setSelectedMemberToEdit] = useState<Member>(
    {} as Member
  );

  useEffect(() => {
    axios
      .get("http://localhost:3333/members")
      .then((response) => {
        console.log(response);
        setMembers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function registerMember() {
    if (!name || !role || !socialMediaUrl || !description || !imgUrl) {
      alert("Please fill all the inputs.");
      return;
    }
    axios
      .post("http://localhost:3333/members", {
        name,
        role,
        socialMediaUrl,
        description,
        imgUrl,
      })
      .then((response) => {
        console.log(response);
        alert("Member successfully registered!");
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    if (!isEditing) {
      registerMember();
      return;
    }

    axios
      .put(`http://localhost:3333/members/${selectedMemberToEdit._id}`, {
        name,
        role,
        socialMediaUrl,
        description,
        imgUrl,
      })
      .then((response) => {
        console.log(response);
        alert("Member successfully registered!");
      })
      .catch((err) => console.log(err));
  }

  function handleEdit(member: Member) {
    setIsEditing(true);
    setSelectedMemberToEdit(member);
    setName(member.name);
    setRole(member.role);
    setSocialMediaUrl(member.socialMediaUrl);
    setDescription(member.description);
    setImgUrl(member.imgUrl);
  }

  function clearInputs() {
    setIsEditing(false);
    setName("");
    setRole("");
    setSocialMediaUrl("");
    setDescription("");
    setImgUrl("");
  }

  function handleDelete(member: Member) {
    let confirmAction = confirm("Are you sure to delete this member?");
    if (confirmAction) {
      axios
        .delete(`http://localhost:3333/members/${member._id}`)
        .then((response) => {
          console.log(response);
          alert("Member successfully registered!");
        })
        .catch((err) => console.log(err));
      return;
    } else {
      return;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mouse Haunt CMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <p>Add new member</p>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            placeholder="Social media url"
            value={socialMediaUrl}
            onChange={(e) => setSocialMediaUrl(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Image url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button className="submitButton" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </BasicModal>
      <h1>Members</h1>
      <main className={styles.main}>
        <div style={{ display: "flex" }}>
          {members.map((member: any) => (
            <MediaCard
              key={member._id}
              name={member.name}
              role={member.role}
              socialMediaUrl={member.socialMediaUrl}
              description={member.description}
              handleEdit={() => {
                handleEdit(member);
                setIsModalOpen(true);
              }}
              handleDelete={() => handleDelete(member)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;