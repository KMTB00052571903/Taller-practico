import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderPriorityService {
  classify(order: OrderEntity): 'completed' | 'high' | 'medium' | 'normal' {
    if (order.status === 'ready') {
      return 'completed';
    }

    if (order.quantity >= 4) {
      return 'high';
    }

    if (order.quantity >= 2) {
      return 'medium';
    }

    return 'normal';
  }
}
