import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'

export function ExploreDrinks() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const drinks = [
    {
      id: 1,
      name: 'Masala Chai',
      slug: 'masala-chai',
      category: 'hot',
      price: 3.99,
      image: '🍵',
      description: 'Aromatic blend of black tea with traditional Indian spices'
    },
    {
      id: 2,
      name: 'Lassi',
      slug: 'lassi',
      category: 'cold',
      price: 4.99,
      image: '🥛',
      description: 'Creamy yogurt-based traditional drink with cardamom'
    },
    {
      id: 3,
      name: 'Nimbu Pani',
      slug: 'nimbu-pani',
      category: 'cold',
      price: 2.99,
      image: '🍋',
      description: 'Refreshing lime juice with mint and spices'
    },
    {
      id: 4,
      name: 'Turmeric Milk',
      slug: 'turmeric-milk',
      category: 'hot',
      price: 4.49,
      image: '🥛',
      description: 'Golden milk with turmeric, ginger, and warming spices'
    },
    {
      id: 5,
      name: 'Mango Lassi',
      slug: 'mango-lassi',
      category: 'cold',
      price: 5.49,
      image: '🥭',
      description: 'Sweet mango blended with yogurt and cardamom'
    },
    {
      id: 6,
      name: 'Jaljeera',
      slug: 'jaljeera',
      category: 'cold',
      price: 3.49,
      image: '💧',
      description: 'Tangy cumin drink with mint and pomegranate seeds'
    },
    {
      id: 7,
      name: 'Chai Latte',
      slug: 'chai-latte',
      category: 'hot',
      price: 5.99,
      image: '☕',
      description: 'Creamy chai with steamed milk and latte art'
    },
    {
      id: 8,
      name: 'Sherbet',
      slug: 'sherbet',
      category: 'cold',
      price: 4.99,
      image: '🍹',
      description: 'Traditional sweet drink with fruit juice and spices'
    },
  ]

  const categories = [
    { value: 'all', label: 'All Drinks' },
    { value: 'hot', label: 'Hot Drinks' },
    { value: 'cold', label: 'Cold Drinks' },
  ]

  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drink.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || drink.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-forest-green text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Explore Our Drinks</h1>
          <p className="text-lg text-cream/90">Discover authentic South Asian beverages</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-cream-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-brown/60" size={20} />
              <input
                type="text"
                placeholder="Search drinks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green"
                aria-label="Search drinks"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-brown" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green"
                aria-label="Filter by category"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDrinks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDrinks.map(drink => (
                <Link
                  key={drink.id}
                  to={`/drinks/${drink.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-forest-green to-muted-brown text-cream p-8 text-center">
                    <div className="text-5xl mb-4">{drink.image}</div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg font-bold text-forest-green flex-1">
                        {drink.name}
                      </h3>
                      <span className="bg-mustard text-forest-green px-3 py-1 rounded-full text-sm font-bold">
                        ${drink.price}
                      </span>
                    </div>
                    <p className="text-muted-brown/80 text-sm line-clamp-2 mb-3">
                      {drink.description}
                    </p>
                    <button className="w-full bg-forest-green text-cream py-2 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-muted-brown mb-4">No drinks found</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="bg-forest-green text-cream px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
