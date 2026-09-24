import { CreateOrderDto } from './dto/create-order.dto';
import { CustomerEntity } from './entities/customer.entity';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRulesService } from './order-rules/order-rules.service';
import { OrderPreparationEstimateService } from './order-preparation-estimate/order-preparation-estimate.service';
import { OrderPriorityService } from './order-priority/order-priority.service';
export declare class OrdersService {
    private readonly ordersRepository;
    private readonly customersRepository;
    private readonly orderRulesService;
    private readonly orderPreparationEstimateService;
    private readonly orderPriorityService;
    constructor(ordersRepository: Repository<OrderEntity>, customersRepository: Repository<CustomerEntity>, orderRulesService: OrderRulesService, orderPreparationEstimateService: OrderPreparationEstimateService, orderPriorityService: OrderPriorityService);
    create(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
    findAll(): Promise<OrderEntity[]>;
    findOne(id: number): Promise<OrderEntity>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<OrderEntity>;
    markAsReady(id: number): Promise<OrderEntity>;
    estimatePreparationTime(id: number): Promise<{
        orderId: number;
        status: string;
        estimatedMinutes: number;
    }>;
    getPriority(id: number): Promise<{
        orderId: number;
        status: string;
        priority: 'completed' | 'high' | 'medium' | 'normal';
    }>;
    findRecentPending(): Promise<OrderEntity[]>;
    findPendingQueue(): Promise<{
        totalPending: number;
        showing: number;
        orders: OrderEntity[];
    }>;
}
