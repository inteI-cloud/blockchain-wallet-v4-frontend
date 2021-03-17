import { Remote } from 'blockchain-wallet-v4/src'
import { SDDEligibleType } from 'blockchain-wallet-v4/src/types'
import { selectors } from 'data'
import { UserDataType } from 'data/modules/types'
import { RootState } from 'data/rootReducer'
import { UserTierType } from 'data/types'

export const getData = (state: RootState) => {
  const userData = selectors.modules.profile.getUserData(state).getOrElse({
    tiers: { current: 0 },
  } as UserDataType)
  // @ts-ignore
  const userTiers = selectors.modules.profile.getTiers(state).getOrElse({} as UserTierType)

  const sddEligible = selectors.components.simpleBuy.getSddEligible(state).getOrElse({
    eligible: false,
    ineligibilityReason: 'KYC_TIER',
    tier: 0,
  } as SDDEligibleType)

  const productsEligibility = selectors.components.settings
    .getProductsEligibility(state)
    .getOrElse([])

  return Remote.Success({
    userData,
    userTiers,
    sddEligible,
    productsEligibility,
  })
}
