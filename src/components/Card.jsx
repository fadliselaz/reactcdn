const Card = ()=>{
    return(
        <div className="card" style={{
            width : '30%',
            height : 'auto',
            borderRadius : '10px',
            boxShadow : '3px 3px 5px rgba(0,0,0,0.200)',
            display : 'flex',
            flexDirection : 'column',
            padding : '20px',
        }}>
            <h3 className="cardTitle">
                ini card saya
            </h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, placeat similique eos optio molestiae sapiente vel sed. Magnam quas, nobis illum sed eligendi maiores quasi doloremque, eaque, placeat voluptates tenetur.
            </p>

        </div>
    )
}