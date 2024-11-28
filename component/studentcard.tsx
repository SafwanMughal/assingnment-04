import React from "react";

type StudentProps = {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
};

const StudentIDCard: React.FC<StudentProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="bg-black text-white shadow-lg rounded-lg p-6 max-w-xs mx-auto transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold text-light-blue-400">{name}</h2>
      <p className="text-gray-300">Age: {age}</p>
      <p className="text-gray-300">Roll Number: {rollNumber}</p>
      <p className="text-gray-300">Class: {studentClass}</p>
    </div>
  );
};

export default StudentIDCard;
