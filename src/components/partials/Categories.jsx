import HomeSectionsContainer from "../container/HomeSectionsContainer"

const CategoryCard = (props) => {
  const { img, category } = props.image
  return (
    <div className="w-full h-52 overflow-hidden space-y-2 md:h-60">
      <div className="w-full h-[80%] p-3 bg-grey rounded-md">
        <img src={img} alt="" className="object-contain w-full h-full mix-blend-darken" />
      </div>
      <p className="capitalize text-center p-2 text-sm">{category}</p>
    </div>
  )
}

const Categories = () => {
  const images = [
		{ 
      img: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', 
      category: 'Electronics'
    },
		{ 
      img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 
      category: 'Jewelry'
    },
    {
      img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      category: 'Mens clothing'
    },
		{
      img: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      category: 'Womens clothing'
    }
	]

  return (
    <HomeSectionsContainer
      sectionTitle1={'Products '}
      sectionTitle2={'Categories'}
      pathName={'/products'}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <CategoryCard image={image} key={index} />
        ))}
      </div>
    </HomeSectionsContainer>
  )
}

export default Categories
