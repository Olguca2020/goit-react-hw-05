import { Link } from "react-router-dom";
import { GoBack } from "../../components/GoBack/GoBack";

export default function NotFound() {
  return (
    <div>
      <Link to="/home">{<GoBack />}</Link>
      <p>Not Found page</p>
    </div>
  );
}
