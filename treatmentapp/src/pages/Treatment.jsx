import { useState } from "react";
import {Navbar} from "../components/navbar";
import { Treatmentlist } from "../featuers/treatments/TreatmentList";
import AddTreatmentModal from "../featuers/treatments/addtreatmentmodel";
export default function TreatmentPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Treatments</h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <Treatmentlist />
      </div>

      {open && <AddTreatmentModal onClose={() => setOpen(false)} />}
    </div>
  );
}
