import { Link } from "react-router-dom";

export const CategorySidebar = ({ categories, activeCategory }) => {
  const formatCategoryUrl = (category) => {
    return category.toLowerCase().replace(/['&\s]+/g, '-');
  };

  return (
    <aside className='w-64 flex-shrink-0 hidden md:block'>
      <nav>
        <ul className='space-y-4'>
          <li>
            <Link to='/products' className={`cursor-pointer hover:text-[#DB4444] transition-colors ${activeCategory === 'all' ? 'text-[#DB4444]' : 'text-gray-600'}`}>
              All Products
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/products/category/${formatCategoryUrl(category)}`} className={`cursor-pointer hover:text-[#DB4444] transition-colors ${activeCategory === category ? 'text-[#DB4444]' : 'text-gray-600'}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};