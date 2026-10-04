function ConfirmationMessage(){
    return (
        <div className="confirm" role="status" aria-live="polite">
            <span className="confirm-icon" aria-hidden="true">✓</span>
            <h1>Added to your cart</h1>
        </div>
    )
}
export default ConfirmationMessage;
