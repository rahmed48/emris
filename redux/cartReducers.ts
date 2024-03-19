import {createSlice} from '@reduxjs/toolkit';

type VariantProps = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type CartState = {
  id: number;
  name: string;
  image: string;
  category: string;
  isHaveVariant: boolean;
  price: VariantProps[] | number;
  qtyTotal: number;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartState[],
  reducers: {
    itemAdded(state, action) {
      const {id, name, qtyTotal, image, category, isHaveVariant, price} =
        action.payload;

      if (isHaveVariant) {
        state.push({
          id: id,
          name: name,
          qtyTotal: qtyTotal,
          image: image,
          category: category,
          isHaveVariant: isHaveVariant,
          price: [
            {
              id: price.id,
              name: price.name,
              price: price.price,
              qty: 1,
            },
          ],
        });
      } else {
        state.push({
          id: id,
          name: name,
          qtyTotal: qtyTotal,
          image: image,
          category: category,
          isHaveVariant: isHaveVariant,
          price: price,
        });
      }
    },
    itemRemoved(state, action) {
      const {id, variantId, type} = action.payload;
      const item = state.find(item => item.id === id);
      if (type === 'delete') {
        return state.filter(item => item.id !== id);
      } else if (type === 'deleteVariant') {
        if (item) {
          if (item.isHaveVariant) {
            // @ts-ignore
            if (item.price.length === 1) {
              return state.filter(item => item.id !== id);
            }
            // @ts-ignore
            const variant = item.price.find(price => price.id === variantId);
            if (variant) {
              // @ts-ignore
              item.price = item.price.filter(price => price.id !== variantId);
            }
          }
        }
      }
      // if (item) {
      //   if (item.isHaveVariant) {
      //     // @ts-ignore
      //     const variant = item.price.find(price => price.id === variantId);
      //     if (variant) {
      //       // @ts-ignore
      //       item.price = item.price.filter(price => price.id !== variantId);
      //     }
      //   } else {
      //     return state.filter(item => item.id !== id);
      //   }
      // }
    },
    quantityUpdated(state, action) {
      const {id, qtyTotal} = action.payload;
      const sendVariant: VariantProps = action.payload.sendVariant;
      const item = state.find(item => item.id === id);

      if (item) {
        item.qtyTotal = qtyTotal;
        if (item.isHaveVariant) {
          // @ts-ignore
          const variant = item.price.find(price => price.id === sendVariant.id);
          if (variant) {
            variant.qty = sendVariant.qty;
          } else {
            // @ts-ignore
            item.price.push({
              id: sendVariant.id,
              name: sendVariant.name,
              price: sendVariant.price,
              qty: sendVariant.qty,
            });
          }
        }
      }
    },
  },
});

export const {itemAdded, itemRemoved, quantityUpdated} = cartSlice.actions;
// export const {itemAdded, itemRemoved} = cartSlice.actions;
export default cartSlice.reducer;
