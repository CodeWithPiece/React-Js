import React, { useEffect } from "react";
import { itemsActions } from "../redux/slices/itemsSlice";
import { useDispatch } from "react-redux";
import { progressAction } from "../redux/slices/progressSlice";

const Loader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(progressAction.setProgress());
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(progressAction.setProgress());
        dispatch(itemsActions.allInitialItems(items));
      });

    return () => {
      controller.abort();
      dispatch(progressAction.setProgress());
    };
  }, []);

  return <></>;
};

export default Loader;
