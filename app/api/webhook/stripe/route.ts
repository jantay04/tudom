import { createOrder } from '@/lib/actions/order.actions'
import { NextResponse } from 'next/server'
import stripe from 'stripe'

export async function POST(request: Request) {
	const body = await request.text()

	const sig = request.headers.get('stripe-signature') as string
	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

	let lessons

	try {
		lessons = stripe.webhooks.constructLessons(body, sig, endpointSecret)
	} catch (err) {
		return NextResponse.json({ message: 'Webhook error', error: err })
	}

	// Get the ID and type
	const lessonsType = lessons.type

	// CREATE
	if (lessonsType === 'checkout.session.completed') {
		const { id, amount_total, metadata } = lessons.data.object

		const order = {
			stripeId: id,
			lessonsId: metadata?.lessonsId || '',
			buyerId: metadata?.buyerId || '',
			totalAmount: amount_total ? (amount_total / 100).toString() : '0',
			createdAt: new Date(),
		}

		const newOrder = await createOrder(order)
		return NextResponse.json({ message: 'OK', order: newOrder })
	}

	return new Response('', { status: 200 })
}
