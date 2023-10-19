import categoriesData from "../categories.json";

export function sortTasksByStatus(tasks) {
    return tasks.sort((a, b) => {
      if (a.status === true && b.status === false) {
        return 1; 
      } else if (a.status === false && b.status === true) {
        return -1; 
      } else {
        return 0; 
      }
    });
  }
  

  export function updateLocalStorage (state)  {
    localStorage.setItem(
      "tasksData",
      JSON.stringify(sortTasksByStatus(state.list))
    );
  };

  export const findCategoryByKeywords = (text) => {
    const categories = categoriesData.kategorie;
    let selectedCategory = "inne"; // Domyślna kategoria "inne"
    let selectedIcon =
      "https://cdn-icons-png.flaticon.com/512/6662/6662930.png";
    let maxMatchCount = 0;

    for (const category of categories) {
      let matchCount = 0;

      for (const keyword of category.slowa_kluczowe) {
        if (text.toLowerCase().includes(keyword)) {
          matchCount++;
        }
      }

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        selectedCategory = category.nazwa;
        selectedIcon = category.icon;
      }
    }
    console.log(selectedCategory);
    return { category: selectedCategory, icon: selectedIcon };
  };