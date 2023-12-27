import { TradingRepository } from './trading.repository';

describe('TradingRepository', () => {
  it('should be defined', () => {
    expect(new TradingRepository()).toBeDefined();
  });
});
