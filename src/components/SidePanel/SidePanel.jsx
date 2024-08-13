import CourseName from "./CourseName";


const SidePanel = ({hourRemaining,courseList,totalCredit,totalPrice}) => {
    
    
    return (
        <div>
            <div className="bg-[#FFF] rounded-lg border-2 p-6">
                <div>
                    <h1 className=" text-[#2F80ED] leading-[30px] text-lg font-bold">Credit Hour Remaining {hourRemaining} hr</h1>
                    <div className="border-b-2 pt-4"></div>
                </div>
                <div>
                    <h1 className="text-xl font-bold pt-4 pb-5">Course Name</h1>
                    {
                        courseList.map((indivisual,idx)=> <CourseName key={idx}  indivisual ={indivisual} idx={idx}></CourseName>)
                    }
                    
                    <div className="border-b-2 pt-4"></div>
                </div>
                <div>
                    <p className="text-base font-medium pt-4">Total Credit Hour : {totalCredit}</p>
                    <div className="border-b-2 pt-4"></div>
                </div>
                <div className="py-3 text-lg font-semibold">
                    <h1>Total Price : {totalPrice} USD</h1>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;