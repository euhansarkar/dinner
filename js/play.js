const loadMeal = (search = `cake`) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    let getMealContainer = document.getElementById(`meal-container`);
    getMealContainer.innerText = ``;
    meals.forEach(meal => {
        let createNewDiv = document.createElement(`div`);
        createNewDiv.classList.add(`card`);
        createNewDiv.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card-body">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 190)}</p>
                <button href="#" class="btn btn-danger w-100 text-capitalize">buy now</button>
            </div>
        `
        getMealContainer.appendChild(createNewDiv);
    })
}

let searchKeyword = () => {
    let getTheField = document.getElementById(`search-field`);
    let getvalue = getTheField.value;
    loadMeal(getvalue);
}
loadMeal();


let loadMealDetails = mealDetails => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}


let displayMealDetails = mealDetails => {
    let getMealDetailContainer = document.getElementById(`meal-detail-container`);
    getMealDetailContainer.innerHTML = ``;
    let createDiv = document.createElement(`div`);
    createDiv.classList.add(`card`);
    createDiv.innerHTML = `
        <div class="card-body">
            <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
            <h5 class="card-title">${mealDetails.strMeal}</h5>
            <p class="card-text">${mealDetails.strInstructions.slice(0, 190)}</p>
            <button href="#" class="btn btn-warning w-100">buy now</button>
        </div>
    `
    getMealDetailContainer.appendChild(createDiv);
}