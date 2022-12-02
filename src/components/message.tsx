export type MessageProps = {
    author: string;
    text: string;
};

// create mui component messge with author and text
export const Message : React.FC<MessageProps> = ({ author  , text }) => {
    return (
        <div style={{background:"#1976D2", marginTop: 20, color:"white", display:"flex", flexDirection:"column", alignItems:"center", padding:10, border:8}} className="message">
            <div className="message-author">{author}</div>
            <div className="message-text">{text}</div>
        </div>
    );
};