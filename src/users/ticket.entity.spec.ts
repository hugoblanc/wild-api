import { Ticket.Entity } from './ticket.entity';

describe('Ticket.Entity', () => {
  it('should be defined', () => {
    expect(new Ticket.Entity()).toBeDefined();
  });
});
