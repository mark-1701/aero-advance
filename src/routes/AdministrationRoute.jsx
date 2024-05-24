import AdministrationLayout from '../pages/Administration/components/AdministrationLayout';
import AdministrationSideBarLinks from '../pages/Administration/components/AdministrationSideBarLinks';

const AdministrationRoute = ({ selectedLink, module }) => {
  return (
    <AdministrationLayout
      sideBarLinks={<AdministrationSideBarLinks selectedLink={selectedLink} />}
      module={module}
    />
  );
};

export default AdministrationRoute;
