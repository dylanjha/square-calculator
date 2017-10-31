/* eslint-env jest */

import { roundTwo } from './mathUtils'

describe('mathUtils', () => {
  describe('roundTwo', () => {
    it('should round to two decimals', () => {
      expect(roundTwo(10)).toEqual('10.00')
      expect(roundTwo(10.1234)).toEqual('10.12')
      expect(roundTwo(10.1264)).toEqual('10.13')
      expect(roundTwo(10.12)).toEqual('10.12')
      expect(roundTwo(310.1)).toEqual('310.10')
    })
  })
})
