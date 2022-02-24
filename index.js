     
     
    //  api connect 
     
     const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   searchField.value = "" ;
   if(searchText == ''){
     alert('please search by name');
   }
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displaySearchResult(data.meals));

} 

const loadMealDetail = mealId => {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]));
  }
  const displayMealDetail = meal =>{
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary"> Go Somewhere </a>
    </div>
    
    
    `
    mealDetails.appendChild(div);
    }

  const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML ="";
   if(meals == null ){
     alert('there is no food matched with your search result ');
   }
   
    
     for (const meal of meals){

     const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML =`
     
     <div onclick="loadMealDetail('${meal.idMeal}')"  class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
     </div>
   </div>
     
     `;
     searchResult.appendChild(div);
   
    };
    
   }
   


