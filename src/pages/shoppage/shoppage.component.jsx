import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
  fetchCollectionsStartAsync();
  }

  render(){
    const {match,isCollectionsLoaded}  = this.props;
    
    return (
      <div className='shop-page'>
        <Route  exact path= {`${match.path}`} render = { props => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props}/> }/>
        <Route path = {`${match.path}/:collectionId`} render = {props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>}/>
      </div>
    )

  }
}
  
const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)