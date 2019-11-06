import { School } from './school.entity';

describe('School', () => {
  it('should be defined', () => {
    expect(new School()).toBeDefined();
  });
});
