import Potato from "./Potato"


const FoodLike = [
  {
    name : "gobchang",
    image: "http://th2.tmon.kr/thumbs/image/46b/303/d46/fe4e3add6_700x700_95_FIT.jpg"
  },
  {
    name : "pizza",
    image : "https://w.namu.la/s/8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41be9b22db6d0ce58f59fd1ac01912436c928605cd86974e360258a66ac0374662e70b0ae73"
  }
]

// function renderFood(dish) {
//   return (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }

const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  console.log(FoodLike.map(renderFood));
  return( 
    <div>
      {
        FoodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}){
  
  return (
  <div>
    <h1>I like {name} </h1>
    <image src={picture} />

  </div>
  )
}

export default App;
