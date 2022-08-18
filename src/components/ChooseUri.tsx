import {FC} from "react";
import {NavLink} from "react-router-dom";

const ChooseUrl: FC = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/works"}>URI works (localhost:8001/recv_redirect)</NavLink>
      </li>
      <li>
        <NavLink to={"/fails"}>URI fails (localhost:8001/new_report)</NavLink>
      </li>
    </ul>
  )
}

export default ChooseUrl;
