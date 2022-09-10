import { useHistory, useLocation } from 'react-router-dom';
import DelegationModal from '../../components/DelegationModal';
import { getAddressFromQueryParams } from '../../utils/getAddressFromQueryParams';

const DelegatePage = () => {
  const { search } = useLocation();
  const delegateTo = getAddressFromQueryParams('to', search);

  const history = useHistory();

  return (
    <>
      <DelegationModal onDismiss={() => history.push('/vote')} delegateTo={delegateTo} />
    </>
  );
};

export default DelegatePage;
