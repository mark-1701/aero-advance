function LoginForm() {
  return (
    <form className="flex flex-col gap-14">
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="input"
        />
        <p className="mt-3 text-sm text-blue-500">¿Olvidaste tu contraseña?</p>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Enviar
        </button>
        <p className="mt-3 text-sm text-right text-blue-500">¿No tienes una cuenta? Registrate</p>
      </div>
    </form>
  );
}

export default LoginForm;
