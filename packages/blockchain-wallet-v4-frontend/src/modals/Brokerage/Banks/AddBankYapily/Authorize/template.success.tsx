import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { Button, Icon, Image, Text } from 'blockchain-info-components'
import { FlyoutWrapper, Row, Title } from 'components/Flyout'
import { AddBankStepType } from 'data/types'

import { Props as _P } from '.'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const BackContainer = styled(Text)`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
`
const DropdownTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  /* chevorn icon rotation */
  > span:last-child {
    size: 10px;
    transition: transform 0.2s;
    color: ${props => props.theme.grey600};
    &.active {
      transform: rotate(180deg);
    }
  }
`
const InfoTitle = styled(Title)`
  font-weight: 600px;
  line-height: 1.5;
  color: ${props => props.theme.grey900};
`

const InfoDropdown = styled.div`
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  transition: max-height, margin-top 0.3s;
  &.isToggled {
    max-height: 100%;
    margin-top: 12px;
  }
`
const InfoText = styled(Title)`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.grey600};
  line-height: 1.5;
`
const Bottom = styled(FlyoutWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`
const DropdownItem = ({ bodyText, titleText }) => {
  const [isToggled, handleToggle] = useState(false)
  return (
    <Row>
      <DropdownTitleRow onClick={() => handleToggle(!isToggled)}>
        <InfoTitle>{titleText}</InfoTitle>
        <Icon name='chevron-down' className={isToggled ? 'active' : ''} />
      </DropdownTitleRow>
      <InfoDropdown className={isToggled ? 'isToggled' : ''}>
        <InfoText>{bodyText}</InfoText>
      </InfoDropdown>
    </Row>
  )
}

const Success = (props: Props) => {
  const { entity } = props
  const entityName = entity === 'Fintecture (EU)' ? 'Fintecture' : 'SafeConnect'

  return (
    <Wrapper>
      <FlyoutWrapper style={{ paddingBottom: '24px' }}>
        <BackContainer>
          <Image
            name={entityName === 'Fintecture' ? 'fintecture' : 'safe-connect'}
            size='20px'
            style={{ marginRight: '28px' }}
          />
          <FormattedMessage
            id='modals.brokerage.authorize.title'
            defaultMessage='{entityName}'
            values={{ entityName }}
          />
        </BackContainer>
      </FlyoutWrapper>
      <DropdownItem
        bodyText={
          <FormattedMessage
            id='modals.brokertitleage.authorize.data_sharing'
            defaultMessage='{entityName} will retrieve your bank data based on your request and provide this information to Blockchain.'
            values={{ entityName }}
          />
        }
        titleText={
          <FormattedMessage
            id='modals.brokerage.authorize.data_sharing'
            defaultMessage='Data Sharing'
          />
        }
      />
      <DropdownItem
        bodyText={
          <FormattedMessage
            id='modals.brokerage.authorize.secure_connection'
            defaultMessage='Data is securely retrieved in read-only format and only for the duration agreed with you. You have the right to withdraw your consent at any time.'
          />
        }
        titleText={
          <FormattedMessage
            id='modals.brokerage.authorize.secure_connection.title'
            defaultMessage='Secure Connection'
          />
        }
      />
      <DropdownItem
        bodyText={
          <FormattedMessage
            id='modals.brokerage.authorize.fca'
            defaultMessage='Blockchain is an agent of {entityName} Ltd. {entityName} Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 [827001] for the provision of Account Information and Payment Initiation services.'
            values={{ entityName }}
          />
        }
        titleText={
          <FormattedMessage
            id='modals.brokerage.authorize.fca.title'
            defaultMessage='FCA Authorisation'
          />
        }
      />
      <Row>
        <InfoText>
          <FormattedMessage
            id='modals.brokerage.authorize.data'
            defaultMessage='In order to share your bank account data with Blockchain, you will now be securely redirected to your bank to confirm your consent for {entityName} to read the following information:'
            values={{ entityName }}
          />
        </InfoText>
        <InfoText style={{ margin: '15px 0' }}>
          {'•'}{' '}
          <FormattedMessage
            id='modals.brokerage.authorize.identification_details'
            defaultMessage='Identification details'
          />
        </InfoText>
        <InfoText>
          {'•'}{' '}
          <FormattedMessage
            id='modals.brokerage.authorize.account_details'
            defaultMessage='Account(s) details'
          />
        </InfoText>
      </Row>
      <DropdownItem
        bodyText={
          <FormattedMessage
            id='modals.brokerage.authorize.about_access'
            defaultMessage='{entityName} will then use these details with Blockchain solely for the purposes of buying cryptocurrencies. This access is valid until 24th of January 2021, you can cancel consent at any time via the Blockchain settings or via your bank. This request is not a one-off, you will continue to receive consent requests as older versions expire.'
            values={{ entityName }}
          />
        }
        titleText={
          <FormattedMessage
            id='modals.brokerage.authorize.about_access.title'
            defaultMessage='About the Access'
          />
        }
      />
      <Row />
      <Bottom>
        <Button
          nature='primary'
          data-e2e='obApprove'
          type='submit'
          fullwidth
          height='48px'
          onClick={() =>
            props.brokerageActions.setAddBankStep({
              addBankStep: AddBankStepType.ADD_BANK_CONNECT
            })
          }
        >
          <FormattedMessage id='copy.approve' defaultMessage='Approve' />
        </Button>
        <Button
          nature='light-red'
          data-e2e='obDeny'
          type='button'
          fullwidth
          height='48px'
          color='red400'
          style={{ marginTop: '16px' }}
          onClick={() => props.handleClose()}
        >
          <FormattedMessage id='copy.deny' defaultMessage='Deny' />
        </Button>
      </Bottom>
    </Wrapper>
  )
}

type Props = _P

export default Success
