function Buttons ({data, setClothes}) {
    const filteredClothes = searchTerm => {
        const filteredResult =[];
        data.forEach(item => {
            item.searchTerm.forEach(term => {
                if (term === searchTerm) {
                    filteredResult.push(item);
                    setClothes(filteredResult);
                }
            })
        })
    }
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredClothes("all")}>All categories</button>
            <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={()=> filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => filteredClothes("shirt")}>Shirts</button>
            <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
            <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
        </div>
    )
}
export default Buttons;