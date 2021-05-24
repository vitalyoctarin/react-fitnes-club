import React from "react";
import ListItem from "./ListItem";
import { ReactComponent as Dumbbell } from './images/dumbell.svg'
import { ReactComponent as Weightlifting } from './images/weightlifting-silhouette-power-sport.svg'
import { ReactComponent as Trophy } from'./images/trophy.svg'
import { ReactComponent as Service} from './images/customer-service.svg'
import './css/infoList.sass'

const ListItemsComponent = props => {
    return(

        <div className="container mb-4">
            <div className="row mt-5 infoList">
                <ListItem
                    image={<Dumbbell/>}
                    text="Профессиональные тренажеры"
                />
                <ListItem
                    image={<Weightlifting/>}
                    text="Наши тренера - действующие спортсмены"
                />
                <ListItem
                    image={<Trophy/>}
                    text="Мы входим в топ-10 фитнес-центров России"
                />
                <ListItem
                    image={<Service/>}
                    text="Поддерка по телефону 24/7"
                />
            </div>
        </div>
    )
}
export default ListItemsComponent
