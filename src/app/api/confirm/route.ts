import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { type NextRequest } from "next/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id") as string;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;

    if (session.status === "complete") {
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
        },
      });
    }

    await db.cart.delete({
      where: {
        id: cartId,
      },
    });
  } catch (error) {
    return Response.json(null, {
      status: 500,
      statusText: "Erro interno do Servidor.",
    });
  }
  redirect("/orders");
};
