import { OrderEntity } from '../entities/order.entity';
import { OrderPriorityService } from './order-priority.service';
import { describe, it, expect } from '@jest/globals';

describe('OrderPriorityServiceTest', () => {
  const service = new OrderPriorityService();

  it('classifies a pending order with quantity 1 as normal', () => {
    const orderMock = {
      status: 'pending',
      quantity: 1,
    } as OrderEntity;

    expect(service.classify(orderMock)).toBe('normal');
  });

  it('classifies a pending order with quantity 3 as medium', () => {
    const orderMock = {
      status: 'pending',
      quantity: 3,
    } as OrderEntity;

    expect(service.classify(orderMock)).toBe('medium');
  });

  it('classifies a pending order with quantity 4 as high', () => {
    const orderMock = {
      status: 'pending',
      quantity: 4,
    } as OrderEntity;

    expect(service.classify(orderMock)).toBe('high');
  });

  it('classifies a ready order with quantity 5 as completed', () => {
    const orderMock = {
      status: 'ready',
      quantity: 5,
    } as OrderEntity;

    expect(service.classify(orderMock)).toBe('completed');
  });
});
