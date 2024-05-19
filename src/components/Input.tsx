interface Props{
    labelText: string,
    inputId: string,
    inputType: string
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({labelText, inputId, inputType, value, onChange } : Props) => {
    return(
        <div className="input-container flex-column">
            <label htmlFor={inputId}>{labelText}</label>
            <input className="data-input" type={inputType} id={inputId} value={value} onChange={onChange} required />
        </div>
    );
}