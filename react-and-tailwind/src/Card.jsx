function Card({ cardImage, cardTitle, cardDescription }) {
    return (
        <div>
            <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                        src={cardImage}
                        alt="card"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p>
                    <div class="card-actions">
                        <button class="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card