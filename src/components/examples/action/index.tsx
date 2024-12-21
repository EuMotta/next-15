'use client';

const handleFormAction = async (formData: FormData): Promise<void> => {
  const newUser = {
    username: formData.get('username'),
    email: formData.get('email')
  };

  console.log('Novo Usuário:', newUser);

  try {
    console.log('Exemplo');
  } catch (error) {
    console.error('Erro ao obter exemplos:', error);
  }
};

const Action = () => {
  return (
    <>
      <span>action</span>
      <form action={handleFormAction}>
        <div>
          <label>Nome de Usuário</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Action;
