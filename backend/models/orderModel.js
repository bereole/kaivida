import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        products: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    },
  ],
  calendar: {
    day1b: {type: String, required: true},
    day1l: {type: String, required: true}, 
    day1s: {type: String, required: true}, 
    day2b: {type: String, required: true},
    day2l: {type: String, required: true}, 
    day2s: {type: String, required: true},
    day3b: {type: String, required: true}, 
    day3l: {type: String, required: true}, 
    day3s: {type: String, required: true},
    day4b: {type: String, required: true},
    day4l: {type: String, required: true}, 
    day4s: {type: String, required: true},
    day5b: {type: String, required: true}, 
    day5l: {type: String, required: true}, 
    day5s: {type: String, required: true},
    day6b: {type: String, required: true}, 
    day6l: {type: String, required: true}, 
    day6s: {type: String, required: true},
    day7b: {type: String, required: true}, 
    day7l: {type: String, required: true}, 
    day7s: {type: String, required: true},
    day8b: {type: String, required: true}, 
    day8l: {type: String, required: true}, 
    day8s: {type: String, required: true},
    day9b: {type: String, required: true}, 
    day9l: {type: String, required: true}, 
    day9s: {type: String, required: true},
    day10b: {type: String, required: true}, 
    day10l: {type: String, required: true}, 
    day10s: {type: String, required: true},
    day11b: {type: String, required: true}, 
    day11l: {type: String, required: true}, 
    day11s: {type: String, required: true},
    day12b: {type: String, required: true}, 
    day12l: {type: String, required: true}, 
    day12s: {type: String, required: true},
    day13b: {type: String, required: true}, 
    day13l: {type: String, required: true}, 
    day13s: {type: String, required: true},
    day14b: {type: String, required: true}, 
    day14l: {type: String, required: true}, 
    day14s: {type: String, required: true},
    day15b: {type: String, required: true}, 
    day15l: {type: String, required: true}, 
    day15s: {type: String, required: true},
    day16b: {type: String, required: true}, 
    day16l: {type: String, required: true}, 
    day16s: {type: String, required: true},
    day17b: {type: String, required: true}, 
    day17l: {type: String, required: true}, 
    day17s: {type: String, required: true},
    day18b: {type: String, required: true}, 
    day18l: {type: String, required: true}, 
    day18s: {type: String, required: true},
    day19b: {type: String, required: true}, 
    day19l: {type: String, required: true}, 
    day19s: {type: String, required: true},
    day20b: {type: String, required: true}, 
    day20l: {type: String, required: true}, 
    day20s: {type: String, required: true},
    day21b: {type: String, required: true}, 
    day21l: {type: String, required: true}, 
    day21s: {type: String, required: true},
    day22b: {type: String, required: true}, 
    day22l: {type: String, required: true}, 
    day22s: {type: String, required: true},
    day23b: {type: String, required: true}, 
    day23l: {type: String, required: true}, 
    day23s: {type: String, required: true},
    day24b: {type: String, required: true}, 
    day24l: {type: String, required: true}, 
    day24s: {type: String, required: true},
    day25b: {type: String, required: true}, 
    day25l: {type: String, required: true}, 
    day25s: {type: String, required: true},
    day26b: {type: String, required: true}, 
    day26l: {type: String, required: true}, 
    day26s: {type: String, required: true},
    day27b: {type: String, required: true}, 
    day27l: {type: String, required: true}, 
    day27s: {type: String, required: true},
    day28b: {type: String, required: true}, 
    day28l: {type: String, required: true}, 
    day28s: {type: String, required: true},
    day29b: {type: String, required: true}, 
    day29l: {type: String, required: true}, 
    day29s: {type: String, required: true},
    day30b: {type: String, required: true}, 
    day30l: {type: String, required: true}, 
    day30s: {type: String, required: true},
    day31b: {type: String, required: true}, 
    day31l: {type: String, required: true},
    day31s: {type: String, required: true},
  },
  paymentMethod: {type: String, required: true},
  itemsPrice: {type: Number, required: true},
  shippingPrice: {type: Number, required: true},
  taxPrice: {type: Number, required: true},
  itemsPrice: {type: Number, required: true},
  totalPrice: {type: Number, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
  isPaid: {type: Boolean, default: false},
  paidAt: {type: Date},
  isDelivered: {type: Boolean, default: false},
  deliveredAt: {type: Date},
}, 
{
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);
export default Order;