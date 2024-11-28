import React from "react";
import StudentIDCard from "@/component/studentcard";

const students = [
  { name: "Safwan Mughal", age: 20, rollNumber: "0049110", studentClass: "1" },
  { name: "Maaz Khan", age: 18, rollNumber: "0049114", studentClass: "1" },
  { name: "Zain Malik", age: 21, rollNumber: "0049116", studentClass: "1" },
];

const App: React.FC = () => {
  return (
    <div className="bg-dark-blue-900 min-h-screen flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-light-blue-400 text-4xl font-bold mb-8">Student ID Cards</h1>
      {students.map((student, index) => (
        <StudentIDCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
        />
      ))}
    </div>
  );
};

export default App;
