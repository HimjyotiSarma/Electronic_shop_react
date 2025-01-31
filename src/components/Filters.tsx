import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../utils/fetchData'
import Loader from './Loader'
import { Link, useParams } from 'react-router'
import '../styles/filters.scss'

const Filters = () => {
  const { category_name } = useParams()
  const { error, isPending, data } = useQuery({
    queryKey: ['filter_Categories'],
    queryFn: () =>
      getCategories('https://fakestoreapi.com/products/categories'),
  })
  if (error != null) {
    return <div className="error_data">{error.message}</div>
  }
  if (isPending) {
    return <Loader />
  }

  return (
    <div className="filters">
      <h3>Categories</h3>
      <ul>
        {data.map((category) => (
          <li key={category}>
            <Link
              to={`/products/category/${category}`}
              className={category_name == category ? 'active_filter' : ''}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Filters
