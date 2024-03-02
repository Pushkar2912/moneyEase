import React from 'react'
import { GrTransaction } from 'react-icons/gr'
import { MdOutlineDashboard } from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className="bg-white flex flex-col gap-6 p-2 border-r">
            <div className="text-xs text-gray-500">
                General
            </div>
            <div className="left-container-texts flex flex-col gap-4">
                {/* Dashboard */}
                <div className="dashboard-text flex items-center gap-2">
                    <div>
                        <MdOutlineDashboard />
                    </div>
                    <div className="text-sm">
                        Dashboard
                    </div>
                </div>
                {/* Transaction */}
                <div className="transaction-text flex items-center gap-2">
                    <div>
                        <GrTransaction />
                    </div>
                    <div className="text-sm">
                        Transactions
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar