import { useRef, useState } from 'react';
import './Editer.css'

const Editer = ({onCreate}) =>{
    const [content,setContent] = useState('');
    const contentRef = useRef('');

    const onChangeContent =(e)=>{
        setContent(e.target.value);
    }

    const onKeyDown=(e)=>{
        if(e.keyCode===13){onSubmit()};
    }

    const onSubmit = () =>{
        if(content===""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    return(
        <div className="Editer">
            <input
            placeholder="Add Todo..."
            ref={contentRef}
            onKeyDown={onKeyDown}
            value={content}
            onChange={onChangeContent}
            ></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editer;