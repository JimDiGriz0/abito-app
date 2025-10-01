import { useNavigate } from 'react-router-dom';

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <section className="error404">
      <img src="/images/Error404.jpg" alt="404" />
      <h2>Страница не найдена</h2>
      <p>Возможно, вы ошиблись адресом или страница была удалена.</p>
      <button
        className="btn btn-primary btn-large btn-error"
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </section>
  );
};
