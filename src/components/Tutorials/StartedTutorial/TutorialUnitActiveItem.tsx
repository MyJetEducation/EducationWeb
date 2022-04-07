import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AccentButton } from '../../../styles/Buttons';
import { ButtonWithoutStyles } from '../../../styles/ButtonWithoutStyles';
import { FlexContainer } from '../../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import { UnitListItem, UnitListMArker } from '../../../styles/Units';
import { UnitWithDataType } from '../../../types/TutorialTypes';
import TutorialTaskItem from './TutorialTaskItem';

interface Props {
  item: UnitWithDataType;
  isActive: boolean;
  isFirstItem: boolean;
}
const TutorialUnitActiveItem = ({ item, isActive, isFirstItem }: Props) => {
  const { t } = useTranslation();

  const [isOpenUnitList, setIsOpenUnitList] = useState(false);

  const handleClickOpenList = () => {
    setIsOpenUnitList(!isOpenUnitList);
  };

  return (
    <UnitListItem
      width="100%"
      padding="20px 32px"
      flexDirection="column"
      isActive={isActive}
      isFirstItem={isFirstItem}
    >
      <ButtonWithoutStyles onClick={handleClickOpenList}>
        <FlexContainer justifyContent="space-between">
          <FlexContainer alignItems="center">
            <UnitListMArker isOpen={isOpenUnitList} />
            <PrimaryTextSpan fontWeight="bold" color="#000">
              {`${t('Unit')} ${item.unit.unit} ${t(item.data?.title || '')}`}
            </PrimaryTextSpan>
          </FlexContainer>
          <PrimaryTextSpan>{t(item.data?.duration || '')}</PrimaryTextSpan>
        </FlexContainer>
      </ButtonWithoutStyles>

      {/* tasks */}
      {isOpenUnitList && (
        <FlexContainer flexDirection="column" padding="8px 0 0 22px">
          {item.unit.tasks.map((task) => (
            <TutorialTaskItem key={task.task} item={task} unit={item.unit.unit} />
          ))}
        </FlexContainer>
      )}
      {/* tasks */}
      {/* is active unit */}
      <FlexContainer justifyContent="center" padding="24px 0 0">
        <AccentButton width="300px">{`${t('Start')} Unit ${
          item.unit.unit
        }`}</AccentButton>
      </FlexContainer>
    </UnitListItem>
  );
};

export default TutorialUnitActiveItem;
