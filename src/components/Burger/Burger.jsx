import "./burger.css";

export default function Burger({ checked, handle_input }) {
    function handle(event) {
        handle_input(event.target.checked);
    }

    return (
        <div className="burger">
            <input type="checkbox" checked={checked} onChange={handle} />
            <div className="bars"></div>
        </div>
    );
}
