import React from "react";

export default {
  state: {
    data: [],
  },

  /**
   * Reducers
   */
  reducers: {
    setData(state, data) {
      return {
        ...state,
        data: data,
      };
    },

    resetData(state) {
      return {
        ...state,
        data: [],
      };
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Updates async storage and auth store with given data (*only string values are stored)
     * @param {*} data
     */
    /**
     * FIRST clears async storage then does api call, then navigates user to login page
     * @param {string} phone optional
     */
    /**
     * Fetches details of user from and if token present
     */
  }),
};
