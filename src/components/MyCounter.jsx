const MyCounter = () => {
    let countState = 25
    return (
        <div>
            <div>{countState}</div>
            <button>+1</button>
            <button>+2</button>
        </div>
    )
}
export default MyCounter;