import React, { useEffect } from "react";
import s from "./HW12.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeId } from "./bll/themeReducer";
import { AppStoreType, useAppSelector } from "../hw10/bll/store";

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes: Array<{ id: number; value: string }> = [
  { id: 1, value: "Default" },
  { id: 2, value: "Blue" },
  { id: 3, value: "Dark" },
];

const HW12 = () => {
  const themeId = useSelector<AppStoreType, number>(
    (state) => state.theme.themeId
  );
  const dispatch = useDispatch();
  // взять ид темы из редакса

  const change = (id: string) => {
    // дописать функцию
    dispatch(changeThemeId(parseInt(id)));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div id={"hw12"}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>

      <div className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          value={themeId}
          onChangeOption={change}
          options={themes}
        />
      </div>
    </div>
  );
};

export default HW12;
