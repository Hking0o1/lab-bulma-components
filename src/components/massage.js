const Message = ({ isInfo, title, children }) => {
  return (
    <article className={`message ${isInfo ? 'is-info' : ''}`}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  );
};

export default Message;