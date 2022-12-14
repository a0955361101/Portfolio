function Card({ data }) {

    return (
        <div className="Card">
            <a href={data.url} target="_blank" rel="noreferrer">
                <img src={`${data.img}`} alt="work" />
            </a>
            <div className="Card-txt pt-3">
                <h3>{data.name}</h3>
                <p>{data.people}作品</p>
                <p>使用技術:{data.skill}</p>
            </div>
        </div>
    );
}

export default Card;