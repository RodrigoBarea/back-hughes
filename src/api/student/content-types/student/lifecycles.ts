import bcrypt from 'bcryptjs';

async function hashIfNeeded(data: any) {
  if (!data?.password) return;
  if (typeof data.password === 'string' && data.password.startsWith('$2')) return;
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
}

const lifecycles = {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (!data) return;
    if (data.email) data.email = String(data.email).toLowerCase().trim();
    await hashIfNeeded(data);
  },
  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (!data) return;
    if (data.email) data.email = String(data.email).toLowerCase().trim();
    await hashIfNeeded(data);
  },
};

export default lifecycles;
