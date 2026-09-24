import { OrderEntity } from '../entities/order.entity';
export declare class OrderPriorityService {
    classify(order: OrderEntity): 'completed' | 'high' | 'medium' | 'normal';
}
