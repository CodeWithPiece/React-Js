import React, { useEffect } from "react";
import { itemsActions } from "../redux/slices/itemsSlice";
import { fetchingActions } from "../redux/slices/fetchingSlice";
import { useSelector, useDispatch } from "react-redux";

const Loader = () => {
  const fetchStatus = useSelector((state) => {
    return state.fetchingReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingActions.markFetchStatus({ status: true }));
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingActions.markFetchStatus({ status: false }));
        dispatch(fetchingActions.markFetchDone());
        dispatch(itemsActions.allInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default Loader;
