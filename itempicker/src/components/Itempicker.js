import './Itempicker.css';
import Logo from '../images/Logo.png';
const data = require('../items.json');

// '../../public/items/' 

function Itempicker() {
    return (
        <>{
            data.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={'./items/' + item.icon} alt={item.name} />
                        <div>Icon: {item.icon}</div>
                        <div>Name: {item.name}</div>
                        <div>Tag: {item.tags}</div>
                        <hr />
                    </div>
                );
            })
        }</>
    );
}

export default Itempicker;