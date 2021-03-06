import React,{useEffect} from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import CollectionContainer from '../collection/collection.container';


const ShopPage = ( { fetchCollectionsStart, match } ) => {
  
  useEffect(()=>{
      fetchCollectionsStart();
    },[fetchCollectionsStart])

    return (
      <div className='shop-page'>
        <Route  exact path= {`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path = {`${match.path}/:collectionId`} component={CollectionContainer}/>
      </div>
    )

  }

  
const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)