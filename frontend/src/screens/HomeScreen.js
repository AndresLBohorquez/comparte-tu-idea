import data from "../data";

function HomeScreen() {
    return <div>
        <h1>Lista de Temas</h1>
        <div className="topics">
            {data.topics.map((topic) => (
                <div className="topic" key={topic.slug}>
                    <a href={`/topic/${topic.slug}`}>
                        <img src={topic.image} alt={topic.name} />
                    </a>
                    <div className="topic-info">
                        <a href={`/topic/${topic.slug}`}>
                            <p>{topic.name}</p>
                        </a>
                        <p>{topic.description}</p>


                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default HomeScreen;