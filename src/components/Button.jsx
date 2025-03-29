export function Button({ onClick, value }) {
    return (
        <button type="button" onClick={onClick}>
            {value}
        </button>
    );
}