import PocketBase from 'pocketbase';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const email    = formData.get('email');
    const password = formData.get('password');

    const pb = new PocketBase("http://127.0.0.1:8090");
    const authData = await pb.collection('users').authWithPassword(email, password);

    const jwt = authData.token;
    const userRecord = authData.record;
    const maxAge = 7 * 24 * 60 * 60; // 7 jours

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: userRecord.id,
          email: userRecord.email,
          username: userRecord.username,
          avatar: userRecord.avatar
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `pb_token=${jwt}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax`
        }
      }
    );
  } catch (err) {
    console.error('[API login error]', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Email ou mot de passe incorrect.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
