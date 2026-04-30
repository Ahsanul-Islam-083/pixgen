

const TopGenerations = async() => {
    const res = await fetch('https://pixgen-nine.vercel.app/data.json');
    const photos = await res.json();
    console.log(photos);
    const topPhotos = photos.slice(0,8)
    console.log(topPhotos);
    
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top Generations</h1>
            <div>
                {
                    topPhotos.map(photo=> <div key={photo.id}></div>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;