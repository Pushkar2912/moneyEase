import Statistics from "../components/transaction/Statistics"
import Transactions from "../components/transaction/Transactions"

const Home = () => {

    return (
        <div className="bg-gray-100 flex flex-col p-4 gap-4">
            <Statistics />
            <Transactions /> 
        </div>
    )
}
export default Home