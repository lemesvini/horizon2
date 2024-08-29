"use client";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase"; // Adjust the import based on your file structure
import Router from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the Student type
interface Student {
  name: string;
  module: string;
  email: string;
  hourPrice: string;
  weekClasses: string;
  callLink: string;
  role?: string; // Optional field
}

interface ClassRecord {
  name: string;
  date: string; // in DD/MM/YYYY format
  givenClass: string;
  teachersNotes: string;
}

export default function TStudents() {
  const router = useRouter();
  const user = auth.currentUser;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isStudentDetailsDialogOpen, setIsStudentDetailsDialogOpen] =
    useState(false);
  const [isAddStudentDialogOpen, setIsAddStudentDialogOpen] = useState(false);
  const [isStudentAddedConfirmationOpen, setIsStudentAddedConfirmationOpen] =
    useState(false);
  const [isAddClassRecordDialogOpen, setIsAddClassRecordDialogOpen] =
    useState(false);
  const [
    isClassRecordAddedConfirmationOpen,
    setIsClassRecordAddedConfirmationOpen,
  ] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>({
    name: "",
    module: "",
    email: "",
    hourPrice: "",
    weekClasses: "",
    callLink: "",
  });
  const [newClassRecord, setNewClassRecord] = useState<ClassRecord>({
    name: "",
    date: "",
    givenClass: "",
    teachersNotes: "",
  });
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    if (!user?.email) {
      console.log("No user found!");
      router.push("/login");
      return;
    }
    const userEmail = user.email;
    const fetchStudents = async () => {
      try {
        const studentsCollectionRef = collection(
          db,
          "students",
          "user",
          userEmail
        );
        const studentDocs = await getDocs(studentsCollectionRef);
        const studentList = studentDocs.docs.map(
          (doc) => doc.data() as Student
        );

        setStudents(studentList);
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, [router, user?.email]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (student: Student) => {
    setSelectedStudent(student);
    setIsStudentDetailsDialogOpen(true);
  };

  const handleNewStudentChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNewStudent = async () => {
    try {
      if (!user?.email) {
        throw new Error("User is not authenticated");
      }

      const studentDocRef = doc(
        db,
        "students",
        "user",
        user.email,
        newStudent.name
      );
      const studentLoginRef = doc(
        db,
        "students",
        "user",
        "login",
        newStudent.email,
      );

      await setDoc(studentDocRef, newStudent);
      await setDoc(studentLoginRef, newStudent);

      console.log("New Student Added:", newStudent);
      setIsAddStudentDialogOpen(false);
      setIsStudentAddedConfirmationOpen(true);

      setNewStudent({
        name: "",
        module: "",
        email: "",
        hourPrice: "",
        weekClasses: "",
        callLink: "",
      });

      const studentsCollectionRef = collection(
        db,
        "students",
        "user",
        user.email
      );
      const studentDocs = await getDocs(studentsCollectionRef);
      const studentList = studentDocs.docs.map((doc) => doc.data() as Student);

      setStudents(studentList);
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  const handleNewClassRecordChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewClassRecord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClassRecordDialogOpen = () => {
    if (selectedStudent) {
      setNewClassRecord({
        name: selectedStudent.name,
        date: "",
        givenClass: "",
        teachersNotes: "",
      });
      setIsAddClassRecordDialogOpen(true);
    } else {
      console.error("No student selected!");
    }
  };

  const handleAddNewClassRecord = async () => {
    if (!selectedStudent) {
      console.error("No student selected!");
      return;
    }

    try {
      if (!user?.email) {
        throw new Error("User is not authenticated");
      }

      const today = new Date().toISOString();
      const newClassRecordRef = doc(
        db,
        `ClassRecords/${user.email}/records/${today}`
      );

      await setDoc(newClassRecordRef, newClassRecord);

      console.log("New Class Record Added:", newClassRecord);
      setIsAddClassRecordDialogOpen(false);
      setIsClassRecordAddedConfirmationOpen(true);

      setNewClassRecord({
        name: selectedStudent.name,
        date: "",
        givenClass: "",
        teachersNotes: "",
      });
    } catch (error) {
      console.error("Error adding class record: ", error);
    }
  };

  const handleDeleteStudent = async () => {
    if (!selectedStudent) {
      console.error("No student selected!");
      return;
    }

    try {
      if (!user?.email) {
        throw new Error("User is not authenticated");
      }

      const studentDocRef = doc(
        db,
        "students",
        "user",
        user.email,
        selectedStudent.name
      );
      const studentLoginRef = doc(
        db,
        "students",
        "user",
        "login",
        selectedStudent.email
      );

      await deleteDoc(studentDocRef);
      await deleteDoc(studentLoginRef);

      console.log("Student deleted:", selectedStudent.name);
      setIsStudentDetailsDialogOpen(false);

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.name !== selectedStudent.name)
      );

      setSelectedStudent(null);
    } catch (error) {
      console.error("Error deleting student: ", error);
    }
  };

  return (
    <>
      <div className="flex bg-slate-100 h-[100dvh] w-full">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          <div className="w-full mb-4 flex justify-between bg-white py-3 px-4 rounded-xl border drop-shadow items-center">
            <span className="font-bold text-lg tablet:text-2xl">
              Students Table
            </span>
            <input
              type="text"
              placeholder="Search Students..."
              className="border px-3 py-2 rounded-3xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="hidden tablet:flex gap-3">
              <Button
                variant="primary"
                onClick={() => setIsAddStudentDialogOpen(true)}
              >
                Add / Edit Student
              </Button>
            </div>
          </div>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr className="items-center">
                  <th>Name</th>
                  <th>Module</th>
                  <th>Email</th>
                  <th className="hidden">Hourly Price</th>
                  <th className="hidden">Week Classes</th>
                  <th className="hidden">Call Link</th>
                  <th className="hidden">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.email}
                    onClick={() => handleRowClick(student)}
                  >
                    <td>{student.name}</td>
                    <td>{student.module}</td>
                    <td>{student.email}</td>
                    <td className="hidden">{student.hourPrice}</td>
                    <td className="hidden">{student.weekClasses}</td>
                    <td className="hidden">{student.callLink}</td>
                    <td className="hidden">
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteStudent()}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* Student Details Dialog */}
      <AlertDialog
        open={isStudentDetailsDialogOpen}
        onOpenChange={setIsStudentDetailsDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="py-3 text-2xl">
              {selectedStudent?.name}
            </AlertDialogTitle>
            {selectedStudent?.callLink && (
              <div className="border-2 border-blue-300 text-blue-500 py-2 rounded-lg flex flex-row gap-2">
                <div className="border-r-2 border-blue-300 px-2">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <Link href={selectedStudent.callLink} target="_blank">
                  {selectedStudent.callLink}
                </Link>
              </div>
            )}
            <Button
              variant="outline-success"
              onClick={handleAddClassRecordDialogOpen}
            >
              Add Records
            </Button>
            <AlertDialogDescription className="border rounded-lg bg-slate-100">
              <div className="flex flex-col w-full px-6 py-3 gap-3">
                <div className="flex justify-between border-b">
                  <span>
                    <strong>Module:</strong>
                  </span>
                  <span>{selectedStudent?.module}</span>
                </div>
                <div className="flex justify-between border-b">
                  <span>
                    <strong>Email:</strong>
                  </span>
                  <span>{selectedStudent?.email}</span>
                </div>
                <div className="flex justify-between border-b">
                  <span>
                    <strong>Hourly Price:</strong>
                  </span>
                  <span>{selectedStudent?.hourPrice}</span>
                </div>
                <div className="flex justify-between border-b">
                  <span>
                    <strong>Week Classes:</strong>
                  </span>
                  <span>{selectedStudent?.weekClasses}</span>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <hr />
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setIsStudentDetailsDialogOpen(false)}
            >
              Close
            </AlertDialogCancel>
            <Button
              variant="outline-danger"
              onClick={() => handleDeleteStudent()}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add Student Dialog */}
      <AlertDialog
        open={isAddStudentDialogOpen}
        onOpenChange={setIsAddStudentDialogOpen}
      >
        <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg">
          <AlertDialogHeader className="mb-4">
            <AlertDialogTitle className="text-xl font-semibold text-gray-800">
              Add Student
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleNewStudentChange}
                  placeholder="Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <select
                  name="module"
                  value={newStudent.module}
                  onChange={handleNewStudentChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select Module
                  </option>
                  <option value="A1-A2">A1-A2</option>
                  <option value="B1">B1</option>
                  <option value="Conversation">Conversation</option>
                </select>
                <input
                  type="email"
                  name="email"
                  value={newStudent.email}
                  onChange={handleNewStudentChange}
                  placeholder="Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  name="hourPrice"
                  value={newStudent.hourPrice}
                  onChange={handleNewStudentChange}
                  placeholder="Hourly Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  name="weekClasses"
                  value={newStudent.weekClasses}
                  onChange={handleNewStudentChange}
                  placeholder="Week Classes"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  name="callLink"
                  value={newStudent.callLink}
                  onChange={handleNewStudentChange}
                  placeholder="Call Link"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 flex justify-end space-x-2">
            <AlertDialogCancel
              onClick={() => setIsAddStudentDialogOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAddNewStudent}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Student
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add Class Record Dialog */}
      <AlertDialog
        open={isAddClassRecordDialogOpen}
        onOpenChange={setIsAddClassRecordDialogOpen}
      >
        <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg">
          <AlertDialogHeader className="mb-4">
            <AlertDialogTitle className="text-xl font-semibold text-gray-800">
              Add Class Record
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              <div className="bg-slate-100 p-4 rounded-lg">
                <label className="block mb-2">
                  Name:
                  <p className="mt-1 block w-full p-2 text-center border border-gray-300 rounded-md bg-gray-100">
                    {selectedStudent?.name}
                  </p>
                </label>
                <label className="block mb-2">
                  Date:
                  <input
                    type="date"
                    name="date"
                    value={newClassRecord.date}
                    onChange={handleNewClassRecordChange}
                    className="mt-1 block w-full p-2 text-center border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block mb-2">
                  Given Class:
                  <input
                    type="text"
                    name="givenClass"
                    value={newClassRecord.givenClass}
                    onChange={handleNewClassRecordChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block mb-2">
                  Teacher's Notes:
                  <textarea
                    name="teachersNotes"
                    value={newClassRecord.teachersNotes}
                    onChange={handleNewClassRecordChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-end mt-4">
            <AlertDialogCancel
              onClick={() => setIsAddClassRecordDialogOpen(false)}
              className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAddNewClassRecord}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Class Record
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
