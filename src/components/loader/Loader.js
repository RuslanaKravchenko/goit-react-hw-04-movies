import Loader from 'react-loader-spinner';
import LoaderWrapper from './LoaderStyled';

const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader type="ThreeDots" color="#ff6b09" height={80} width={80} />
    </LoaderWrapper>
  );
};

export default Spinner;
