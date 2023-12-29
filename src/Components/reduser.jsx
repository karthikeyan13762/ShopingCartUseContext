export const reduser = (state, action) => {
  if (action.type === "Remove") {
    return {
      ...state,
      item: state.item.filter((elem) => {
        return elem.id !== action.payload;
      }),
    };
  }
  if (action.type === "Clear") {
    return { ...state, item: [] };
  }
  if (action.type === "Incremunt") {
    let update = state.item.map((curel) => {
      if (curel.id === action.payload) {
        return { ...curel, quantity: curel.quantity + 1 };
      }
      return curel;
    });
    return { ...state, item: update };
  }
  if (action.type === "Decrement") {
    let update = state.item
      .map((curel) => {
        if (curel.id === action.payload) {
          return { ...curel, quantity: curel.quantity - 1 };
        }
        return curel;
      })
      .filter((curel) => {
        return curel.quantity !== -1;
      });
    return { ...state, item: update };
  }
  if (action.type === "Total") {
    let { totalItem, totalAmount } = state.item.reduce(
      (aucu, curr) => {
        let { price, quantity } = curr;
        let TotalAmount = price * quantity;
        aucu.totalAmount += TotalAmount;
        aucu.totalItem += quantity;
        return aucu; //return accumulatation
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
