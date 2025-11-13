'use server';

import { sql } from '@vercel/postgres';

type FormState = {
  success?: boolean;
  error?: string;
  id?: number;
} | null;

export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const mobile = formData.get('mobile') as string;
  const qty = parseInt(formData.get('qty') as string, 10) || 1;

  if (!name || !email || !mobile) {
    return { error: 'All fields are required.' };
  }

  if (qty < 1 || qty > 3) {
    return { error: 'Quantity must be between 1 and 3.' };
  }

  try {
    // Insert new user or update existing user's data
    const result = await sql`
      INSERT INTO voucher_register (name, email, mobile, qty)
      VALUES (${name}, ${email}, ${mobile}, ${qty})
      ON CONFLICT (email) 
      DO UPDATE SET name = EXCLUDED.name, mobile = EXCLUDED.mobile, qty = EXCLUDED.qty
      RETURNING id;
    `;

    const userId = result.rows[0]?.id;

    if (!userId) {
      return { error: 'Could not retrieve user ID after registration.' };
    }

    return { success: true, id: userId };
  } catch (err) {
    console.error('Registration error:', err);
    return { error: 'Registration failed. Please try again.' };
  }
}
