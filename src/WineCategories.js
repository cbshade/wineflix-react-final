import DrinkAgain from "./DrinkAgain";
import KeepDrinking from "./KeepDrinking";

const WineCategories = () => {
    const wines = [{
        id: 1,
        imageUrl: '/red-wine.jpg',
        isNew: true,
        label: 'Wine',
        isFinished: true,
      }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
      }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
      }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 1,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }];
      
    const drinkAgainWines = wines.filter(wine => wine.isFinished === true);
    const KeepDrinkingWines = wines.filter(wine => wine.progress > 0);
    return (
        <>
            <div className="category">
                <h2>Drink Again</h2>
                <ul>
                    {drinkAgainWines.map(drinkAgainWine => (
                        <DrinkAgain key={drinkAgainWine.id} imageUrl={drinkAgainWine.imageUrl} label={drinkAgainWine.label} isNew={drinkAgainWine.isNew} />
                    ))}
                </ul>
            </div>
            <div className="category">
                <h2>Keep Drinking</h2>
                <ul>
                    {KeepDrinkingWines.map(KeepDrinkingWine => (
                        <KeepDrinking key={KeepDrinkingWine.id} imageUrl={KeepDrinkingWine.imageUrl} label={KeepDrinkingWine.label} progress={KeepDrinkingWine.progress} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default WineCategories;
