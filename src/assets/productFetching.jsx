import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";

const productFetching = () => {
    let product = [
        {
            id: 1,
            name: 'bag',
            price: 29,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        },
        {
            id: 2,
            name: 'bag1',
            price: 29478,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        },
        {
            id: 3,
            name: 'bag2',
            price: 2936,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        }
        ,
        {
            id: 4,
            name: 'bag3',
            price: 69423,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        }
        ,
        {
            id: 4,
            name: 'bag3',
            price: 69423,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        }
        ,
        {
            id: 4,
            name: 'bag3',
            price: 69423,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        }
        ,
        {
            id: 4,
            name: 'bag3',
            price: 69423,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam soluta illum similique tenetur sed iusto harum pariatur mollitia minima quas, enim ullam nam. Odit officia voluptatum voluptatibus delectus tempore!",
        }
    ]
    return (
        <>
            <div className='mainContainer'>
                {
                    product.map((items) => {
                        return (
                            <>
                                <div key={items.id} className='containerOfProducts'>
                                    <h1> <FontAwesomeIcon icon={faCoffee} /> {items.name}</h1> <span>{items.price}</span>
                                    <p> <FontAwesomeIcon icon={faUser} /> {items.description}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}
export default productFetching
