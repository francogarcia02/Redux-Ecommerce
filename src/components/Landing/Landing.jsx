import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';


const Landing = () =>{
    const state = useSelector(state => state)
    const {carrito} = state
    const {products} = carrito

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextIndex = () =>{
        let newIndex = currentIndex + 1
        if (newIndex === products.length){
            newIndex = 0
        }
        setCurrentIndex(newIndex)
    }

    const prevIndex = () =>{
        let newIndex = currentIndex - 1
        if (newIndex === -1){
            newIndex = products.length -1
        }
        setCurrentIndex(newIndex)
    }

    return(
        <div className="p-3 text-indigo-600 container">
            <h3 className="m-0 text-center">Nuestros productos principales</h3>
            {products && products[currentIndex] &&
            <div className="max-w-[50rem] w-full m-auto py-16 p-5 relative group">
                <div
                className='shadow w-full h-full rounded-2xl duration-500'
                 >
                 <img src={products[currentIndex].img} alt="img"/>
                 </div>
                <Link to="/products" className="hidden  group-hover:block btn btn-primary absolute top-[80%] right-[10%]">Ver mas</Link>
                <div onClick={prevIndex} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-white/20 text-black cursor-pointer">
                    <BsChevronCompactLeft size={30}/>
                </div>
                <div onClick={nextIndex} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-white/20 text-black cursor-pointer">
                    <BsChevronCompactRight size={30}/>
                </div>
            </div>
            }
        </div>

    )
}

export default Landing