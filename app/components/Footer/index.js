import { connect } from 'react-redux';
import Footer from './presenter';

const mapStateToProps = (state) => {
  const documents = state.documents;

  return {
    locked: documents.current.isReadOnly(),
  };
};

export default connect(mapStateToProps)(Footer);
