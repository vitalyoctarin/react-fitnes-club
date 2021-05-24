import React from "react";
import ServiceComponent from "./ServiceComponent";

const ServicesContainer = props => {
    return(
        <div className="container mb-4">
            <div className="row justify-content-center mt-4">
                <ServiceComponent
                    image="https://lifehacker.ru/wp-content/uploads/2019/11/run_1575044710.jpg"
                    title="Легкая атлетика"
                />
                <ServiceComponent
                    image="https://image.freepik.com/free-photo/couple-boxing-in-gym_23-2148024338.jpg"
                    title="Бокс"
                />
                <ServiceComponent
                    image="https://www.alpina-farben.ru/fileadmin/data-ru/stati/ioga/yogaful.jpg"
                    title="Йога"
                />
                <ServiceComponent
                    image="https://img.championat.com/s/735x490/news/big/t/e/kak-uskorit-trenirovku-v-zale_1570275389319394925.jpg"
                    title="Свободная тренировка"
                />
                <ServiceComponent
                    image="https://images.pexels.com/photos/17840/pexels-photo.jpg"
                    title="Тяжелая атлетика"
                />
                <ServiceComponent
                    image="https://cdn.trinixy.ru/pics5/20180709/bodybuilders_03.jpg"
                    title="BodyBuilding"
                />
            </div>
        </div>
    )
}
export default ServicesContainer
