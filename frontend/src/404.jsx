import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="h4">Страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
