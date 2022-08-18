import {FC} from "react";
import {NavLink} from "react-router-dom";

const ChooseUrl: FC = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/works"}>URI works</NavLink>
      </li>
      <li>
        <NavLink to={"/fails"}>URI fails</NavLink>
      </li>
    </ul>
  )
}

export default ChooseUrl;
