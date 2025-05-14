import React from 'react';
import { useTranslation } from 'react-i18next';

interface TechSpecsProps {
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  capacity?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
}

export const TechSpecs: React.FC<TechSpecsProps> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-[22px] font-semibold border-b border-[#3B3E4A] pb-4 mb-8">
        {t('itemCardTemplate.techSpecs.label')}
      </p>
      <ul className="text-[14px] text-[#89939A] space-y-2">
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.screen')}</span>
          <span className="text-white">{screen}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.resolution')}</span>
          <span className="text-white">{resolution}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.processor')}</span>
          <span className="text-white">{processor}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.ram')}</span>
          <span className="text-white">{ram}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.memory')}</span>
          <span className="text-white">{capacity}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.camera')}</span>
          <span className="text-white">{camera}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.zoom')}</span>
          <span className="text-white">{zoom}</span>
        </li>
        <li className="flex justify-between">
          <span>{t('itemCardTemplate.techSpecs.cell')}</span>
          <span className="text-white">{cell?.join(', ')}</span>
        </li>
      </ul>
    </div>
  );
};
