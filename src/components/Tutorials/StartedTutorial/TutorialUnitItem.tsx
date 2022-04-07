import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import { UnitListItem } from '../../../styles/Units';
import { UnitWithDataType } from '../../../types/TutorialTypes';

interface Props {
  item: UnitWithDataType;
}

const TutorialUnitItem = ({ item }: Props) => {
  const { t } = useTranslation();
  return (
    <UnitListItem
      width="100%"
      padding="20px 32px"
      justifyContent="space-between"
    >
      <PrimaryTextSpan fontWeight="bold">
        {`${t('Unit')} ${item.unit.unit}. ${t(item.data?.title || '')}`}
      </PrimaryTextSpan>
      <PrimaryTextSpan>{t(item.data?.duration || '')}</PrimaryTextSpan>
    </UnitListItem>
  );
};

export default TutorialUnitItem;
