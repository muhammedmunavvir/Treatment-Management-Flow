import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtreatment } from "./treatmentSlice";
import toast from "react-hot-toast";

export default function AddTreatmentModal({ onClose }) {
  const [name, setName] = useState("");
  const treatments = useSelector((state) => state.treatments.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name.trim()) {
      toast.error("Please enter a treatment name");
      return;
    }
    const exists = treatments.find((t) => t.name === name);
    if (exists) {
      toast.error("Treatment already exists!");
      return;
    }
    dispatch(addtreatment({ id: Date.now(), name }));
    toast.success("Treatment added!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="font-bold text-lg mb-2">Add Treatment</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter treatment name"
          className="border p-2 w-full mb-2"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border">Cancel</button>
          <button onClick={handleAdd} className="px-3 py-1 bg-amber-950 text-white">Add</button>
        </div>
      </div>
    </div>
  );
}
