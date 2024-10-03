import React from "react";
import upi from "../../../../assets/upload.png";
import downi from "../../../../assets/down-arrow.png";
import none from "../../../../assets/up-down.png";

// добавить в проект иконки и импортировать
const downIcon = downi;
const upIcon = upi;
const noneIcon = none;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

  if (sort === down) {
    return up;
  } else if (sort === up) {
    return "";
  } else {
    return down;
  }
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img
        id={id + "-icon-" + sort}
        src={icon}
        style={{ width: "10px", marginLeft: "5px" }}
      />
    </span>
  );
};

export default SuperSort;
