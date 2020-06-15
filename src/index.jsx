

const App = ()=>{
    return(

        <div className='App'>
            
            <Navbar />

            <div className="container" style={{
                width : '100vw',
                minHeight : '100vh',
                height : 'auto',
                display : 'flex',
                flexWrap : 'wrap',
                justifyContent : 'space-evenly',
                alignItems : 'center',
                padding : '40px 10%',
            }}>

                <Card />
                <Card />
                
              


            </div>

            <Footer />
            
        </div>

    )
}

// SELECT ELEMENT YANG AKAN DI INJECT
const root = document.getElementById('root')

//PROSES RENDER ELEMENT KE HTML
ReactDOM.render(<App />, root )