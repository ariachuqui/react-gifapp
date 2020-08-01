import React, { useState } from 'react'

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleAdd = (e) => {
        e.preventDefault();
        
        setCategories(c => [ inputValue, ...c, ]);
        setInputValue('');
    }

    const handleChanges = (e) => setInputValue( e.target.value );

        
    

    return (
        <form onSubmit = { handleAdd }>
            <input  type = "text" 
                    value = { inputValue }
                    onChange = { handleChanges }
                    placeholder = "Busque en Giphy"
                    />
            
        </form>
    )
}

export default AddCategory
