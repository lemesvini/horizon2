"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Dropdown } from "react-bootstrap";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

interface ClassRecord {
  id: string;
  name: string;
  date: string;
  givenClass: string;
  teachersNotes: string;
}

export default function TStudents() {
  
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [records, setRecords] = useState<ClassRecord[]>([]);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<ClassRecord | null>(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    date: "",
    givenClass: "",
    teachersNotes: "",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (!user?.email) {
            router.push("/login");
            return;
          }

          const classRecordsRef = collection(
            db,
            `ClassRecords/${user.email}/records`
          );
          const classRecordsSnapshot = await getDocs(classRecordsRef);

          const fetchedRecords = classRecordsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as ClassRecord[];

          setRecords(fetchedRecords);
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching class records: ", error);
      }
    };

    fetchRecords();
  }, [router]);

  const years = [
    ...new Set(
      records.map((record) =>
        new Date(record.date.split("/").reverse().join("-")).getFullYear()
      )
    ),
  ].sort();

  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date.split("/").reverse().join("-"));
    const recordMonth = recordDate.getMonth();
    const recordYear = recordDate.getFullYear();

    const monthMatches =
      selectedMonth === "" || recordMonth === months.indexOf(selectedMonth);
    const yearMatches =
      selectedYear === "" || recordYear === parseInt(selectedYear, 10);
    const queryMatches =
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.teachersNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.givenClass.toLowerCase().includes(searchQuery.toLowerCase());

    return monthMatches && yearMatches && queryMatches;
  });

  const handleEdit = (record: ClassRecord) => {
    setCurrentRecord(record);
    setUpdatedData(record);
    setEditDialogOpen(true);
  };

  const handleEditSubmit = async () => {
    if (currentRecord) {
      const recordRef = doc(db, `ClassRecords/${auth.currentUser?.email}/records`, currentRecord.id);
      await updateDoc(recordRef, updatedData);
      
      // Update the records state with the edited record
      setRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.id === currentRecord.id ? { ...record, ...updatedData } : record
        )
      );
  
      setEditDialogOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    const recordRef = doc(db, `ClassRecords/${auth.currentUser?.email}/records`, id);
    await deleteDoc(recordRef);
    setRecords(records.filter(record => record.id !== id));
    // Refresh or update your UI accordingly
  };

  return (
    <>
      <div className="flex bg-slate-100 h-[100dvh] w-full">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          <div className="w-full mb-4 flex justify-between bg-white py-3 px-4 rounded-xl border drop-shadow items-center">
            <span className="font-bold text-lg tablet:text-2xl">
              Class Records
            </span>
            <input
              type="text"
              placeholder="Search Records..."
              className="border px-3 py-2 rounded-3xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-row gap-2">
              <Dropdown className="hidden tablet:block">
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {selectedMonth === "" ? "Filter by Month" : selectedMonth}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedMonth("")}>
                    All Months
                  </Dropdown.Item>
                  {months.map((month, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="hidden tablet:block">
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {selectedYear === "" ? "Filter by Year" : selectedYear}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedYear("")}>
                    All Years
                  </Dropdown.Item>
                  {years.map((year, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => setSelectedYear(year.toString())}
                    >
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <Table className="table table-striped">
              <thead>
                <tr className="">
                  <th>Name</th>
                  <th>Date</th>
                  <th>Given Class</th>
                  <th>Teacher's Notes</th>
                  <th className="hidden tablet:table-cell text-center">More</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => (
                  <tr key={record.id}>
                    <td className="w-2/6">{record.name}</td>
                    <td className="w-1/6">{record.date}</td>
                    <td className="w-1/6">{record.givenClass}</td>
                    <td className="break-words">
                      <div
                        className="truncate"
                        style={{ whiteSpace: "normal" }}
                      >
                        {record.teachersNotes}
                      </div>
                    </td>
                    <td className="hidden tablet:table-cell justify-center text-center flex-row">
                      <button
                        onClick={() => handleEdit(record)}
                        className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-700 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-700 rounded-md ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      {isEditDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Class Record</h2>
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
              className="mb-4 px-4 py-2 w-full border rounded-md"
              placeholder="Name"
            />
            <input
              type="text"
              value={updatedData.date}
              onChange={(e) => setUpdatedData({ ...updatedData, date: e.target.value })}
              className="mb-4 px-4 py-2 w-full border rounded-md"
              placeholder="Date"
            />
            <input
              type="text"
              value={updatedData.givenClass}
              onChange={(e) => setUpdatedData({ ...updatedData, givenClass: e.target.value })}
              className="mb-4 px-4 py-2 w-full border rounded-md"
              placeholder="Given Class"
            />
            <textarea
              value={updatedData.teachersNotes}
              onChange={(e) => setUpdatedData({ ...updatedData, teachersNotes: e.target.value })}
              className="mb-4 px-4 py-2 w-full border rounded-md"
              placeholder="Teacher's Notes"
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setEditDialogOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
