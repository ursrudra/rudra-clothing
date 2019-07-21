import ShopActionTypes from "./shop.types";

import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase-utils'

export const updateCollections = collectionsMap =>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
});

export const fetchCollectionsStart = ()=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})
export const fetchCollectionsError = errorMessage =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_ERROR,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));

      })
      .catch(error => dispatch(fetchCollectionsError(error.message)));
  };
};
