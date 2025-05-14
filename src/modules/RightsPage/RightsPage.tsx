import { useTranslation } from 'react-i18next';

const RightsPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="rights-page"
      className="min-h-screen bg-[#0F111A] px-4 sm:px-10 py-10 text-[#F1F2F9] flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl sm:text-4xl font-[montBold] mb-4">
        PlugMeHard<span className="text-[#905BFF]">©</span> Team
      </h1>
      <p id="righs-page-text" className="text-base sm:text-lg max-w-xl">
        {t('rightsPage.message')}
        <br className="hidden sm:block" />
        {t('rightsPage.reserved')}
      </p>
    </div>
  );
};

export default RightsPage;
