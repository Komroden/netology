import React from 'react';
import {ContentItem} from "./ContentItem";
import './Content.scss'
import {Icon} from "./Icon";
import {useSelector} from "react-redux";

export const Content = () => {
    const { courses } = useSelector((state) => state);
    return (
        <div className='Content'>
            <div className='ContentWrapper'>
                <span className='ContentTitle'>Изучайте <span className='ContentTitleSelected'>актуальные темы</span></span>
                {courses.value.data.map(item => <ContentItem key={item.direction.id} title={item.direction.title}
                                                    bgColor={item.direction.badge.bgColor}/>)}
                <div className='ContentMessage'>
                    <Icon icon='message'/>
                </div>
            </div>
        </div>
    );
};

