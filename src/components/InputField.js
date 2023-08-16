import {BiSearch} from 'react-icons/bi'
function InputField(){
    return (
        <>
        <div className='flex mt-6 md:mt-8 w-[80%] md:w-[50%]  mx-auto flex-row gap-3 justify-center'>
            <form className='flex flex-row'>
                <input placeholder="Search the city..." className="border-2 p-1 px-4 border-black rounded-lg w-full" type="text"/>
                <button type='submit'><BiSearch size={35} />
                </button>
            </form>
        </div>
        </>
    )
}
export default InputField;