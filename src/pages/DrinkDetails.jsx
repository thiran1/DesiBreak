import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share2 } from 'lucide-react'

export function DrinkDetails() {
  const { slug } = useParams()

  const drinks = {
    'masala-chai': {
      name: 'Masala Chai',
      price: 3.99,
      image: '🍵',
      category: 'Hot Drinks',
      description: 'Aromatic blend of black tea with traditional Indian spices',
      fullDescription: 'Our signature Masala Chai is prepared using a traditional recipe passed down through generations. Made with premium black tea leaves and a carefully balanced blend of ginger, cardamom, cloves, and cinnamon, this warming beverage is perfect for any time of day.',
      ingredients: ['Black Tea', 'Ginger', 'Cardamom', 'Cloves', 'Cinnamon', 'Milk', 'Sugar'],
      benefits: ['Boosts Digestion', 'Anti-inflammatory', 'Energizing', 'Aids Immunity'],
      servingSize: '8 oz',
      calories: 45,
      prepTime: '5 mins'
    },
    'lassi': {
      name: 'Lassi',
      price: 4.99,
      image: '🥛',
      category: 'Cold Drinks',
      description: 'Creamy yogurt-based traditional drink with cardamom',
      fullDescription: 'A refreshing and creamy yogurt-based drink that has been enjoyed in South Asia for centuries. Our Lassi is made with fresh yogurt, blended until smooth, and flavored with cardamom for an authentic taste.',
      ingredients: ['Fresh Yogurt', 'Cardamom', 'Rose Water', 'Sugar', 'Water'],
      benefits: ['Probiotic Rich', 'Cooling Effect', 'Aids Digestion', 'Hydrating'],
      servingSize: '10 oz',
      calories: 120,
      prepTime: '2 mins'
    },
    'nimbu-pani': {
      name: 'Nimbu Pani',
      price: 2.99,
      image: '🍋',
      category: 'Cold Drinks',
      description: 'Refreshing lime juice with mint and spices',
      fullDescription: 'A tangy and refreshing drink made with fresh lime juice, mint, and a special blend of spices. Perfect for hot days, this traditional Indian drink is both delicious and health-promoting.',
      ingredients: ['Fresh Lime Juice', 'Mint Leaves', 'Cumin', 'Salt', 'Black Salt', 'Water'],
      benefits: ['Rich in Vitamin C', 'Cooling', 'Aids Digestion', 'Anti-inflammatory'],
      servingSize: '12 oz',
      calories: 15,
      prepTime: '3 mins'
    },
    'turmeric-milk': {
      name: 'Turmeric Milk',
      price: 4.49,
      image: '🥛',
      category: 'Hot Drinks',
      description: 'Golden milk with turmeric, ginger, and warming spices',
      fullDescription: 'Also known as Golden Milk, this ancient wellness drink combines the power of turmeric with other warming spices. Perfect for relaxation and overall wellness.',
      ingredients: ['Milk', 'Turmeric', 'Ginger', 'Cinnamon', 'Black Pepper', 'Honey'],
      benefits: ['Anti-inflammatory', 'Boosts Immunity', 'Aids Sleep', 'Anti-oxidant'],
      servingSize: '8 oz',
      calories: 65,
      prepTime: '5 mins'
    },
    'mango-lassi': {
      name: 'Mango Lassi',
      price: 5.49,
      image: '🥭',
      category: 'Cold Drinks',
      description: 'Sweet mango blended with yogurt and cardamom',
      fullDescription: 'Indulge in the sweetness of ripe mangoes blended with creamy yogurt and aromatic cardamom. This summer favorite is both refreshing and nutritious.',
      ingredients: ['Fresh Mango', 'Yogurt', 'Cardamom', 'Rose Water', 'Sugar'],
      benefits: ['Vitamin Rich', 'Probiotic', 'Cooling', 'Energy Boosting'],
      servingSize: '10 oz',
      calories: 180,
      prepTime: '3 mins'
    },
    'jaljeera': {
      name: 'Jaljeera',
      price: 3.49,
      image: '💧',
      category: 'Cold Drinks',
      description: 'Tangy cumin drink with mint and pomegranate seeds',
      fullDescription: 'A street-style favorite from India, Jaljeera is a tangy and spiced drink that aids digestion. Made with cumin, mint, and pomegranate seeds for a burst of flavor.',
      ingredients: ['Water', 'Roasted Cumin', 'Mint', 'Pomegranate Seeds', 'Lime Juice', 'Spices'],
      benefits: ['Aids Digestion', 'Cooling', 'Rich in Antioxidants', 'Improves Appetite'],
      servingSize: '10 oz',
      calories: 25,
      prepTime: '2 mins'
    }
  }

  const drink = drinks[slug] || drinks['masala-chai']
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-forest-green text-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/explore" className="inline-flex items-center gap-2 hover:text-mustard transition-colors mb-4">
            <ArrowLeft size={20} />
            Back to Drinks
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="bg-gradient-to-br from-forest-green to-muted-brown rounded-lg p-12 text-center h-96 flex items-center justify-center">
              <div className="text-9xl">{drink.image}</div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <span className="bg-mustard text-forest-green px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {drink.category}
                </span>
                <h1 className="font-serif text-5xl font-bold text-forest-green mb-4">
                  {drink.name}
                </h1>
                <p className="text-xl text-muted-brown mb-6">
                  {drink.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-white p-6 rounded-lg mb-6 border-2 border-forest-green/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-forest-green">${drink.price}</span>
                  <span className="text-muted-brown/60 line-through">${(drink.price * 1.2).toFixed(2)}</span>
                </div>
                <button className="w-full bg-forest-green text-cream py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors mb-3">
                  Add to Cart
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-bold transition-colors ${
                      isFavorite
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-muted-brown hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                    {isFavorite ? 'Saved' : 'Save'}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-bold bg-gray-100 text-muted-brown hover:bg-gray-200 transition-colors">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center border border-forest-green/10">
                  <div className="text-muted-brown/60 text-sm mb-1">Prep Time</div>
                  <div className="font-bold text-forest-green">{drink.prepTime}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-forest-green/10">
                  <div className="text-muted-brown/60 text-sm mb-1">Serving</div>
                  <div className="font-bold text-forest-green">{drink.servingSize}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-forest-green/10">
                  <div className="text-muted-brown/60 text-sm mb-1">Calories</div>
                  <div className="font-bold text-forest-green">{drink.calories}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg border border-forest-green/10">
              <h2 className="font-serif text-2xl font-bold text-forest-green mb-4">About This Drink</h2>
              <p className="text-muted-brown/80 leading-relaxed mb-6">
                {drink.fullDescription}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-forest-green/10">
              <h2 className="font-serif text-2xl font-bold text-forest-green mb-4">Health Benefits</h2>
              <ul className="space-y-3">
                {drink.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-brown/80">
                    <span className="flex-shrink-0 w-6 h-6 bg-mustard text-forest-green rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mt-8 bg-white p-8 rounded-lg border border-forest-green/10">
            <h2 className="font-serif text-2xl font-bold text-forest-green mb-4">Ingredients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {drink.ingredients.map((ingredient, index) => (
                <div key={index} className="bg-cream p-4 rounded-lg text-center border border-forest-green/10">
                  <p className="text-muted-brown font-semibold">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
