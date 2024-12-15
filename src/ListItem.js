import { Button } from "./Button";

export function ListItem({ item, onDelete }) {
    return (
        <>
            <input type="checkbox" aria-label={`Mark ${item} as completed`} />
            <span>{item}</span>
            <Button onClick={onDelete} value="🗑️" />
        </>
    );
}