import { Document, Schema, model, models } from 'mongoose'

export interface IOrder extends Document {
	createdAt: Date
	stripeId: string
	totalAmount: string
	lessons: {
		_id: string
		title: string
	}
	buyer: {
		_id: string
		firstName: string
		lastName: string
	}
}

export type IOrderItem = {
	_id: string
	totalAmount: string
	createdAt: Date
	lessonsTitle: string
	lessonsId: string
	buyer: string
}

const OrderSchema = new Schema({
	createdAt: {
		type: Date,
		default: Date.now,
	},
	stripeId: {
		type: String,
		required: true,
		unique: true,
	},
	totalAmount: {
		type: String,
	},
	lessons: {
		type: Schema.Types.ObjectId,
		ref: 'Lessons',
	},
	buyer: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
})

const Order = models.Order || model('Order', OrderSchema)

export default Order
