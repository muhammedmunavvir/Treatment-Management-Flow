import { useDispatch, useSelector } from "react-redux";
import { removetreatment } from "./treatmentSlice";
export const Treatmentlist = () => {
  const treatments = useSelector((state) => state.treatments.list);
  const dispatch = useDispatch();

  return (
    <ul className="mt-4 rounded p-2">
      {treatments.length === 0 && <p>No treatments added yet.</p>}
      {treatments.map((t) => (
        <li
          key={t.id}
          className="flex justify-between items-center border-b p-2"
        >
          {t.name}
          <button
            onClick={() => dispatch(removetreatment(t.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
