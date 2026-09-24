"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPriorityService = void 0;
const common_1 = require("@nestjs/common");
let OrderPriorityService = class OrderPriorityService {
    classify(order) {
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
};
exports.OrderPriorityService = OrderPriorityService;
exports.OrderPriorityService = OrderPriorityService = __decorate([
    (0, common_1.Injectable)()
], OrderPriorityService);
//# sourceMappingURL=order-priority.service.js.map