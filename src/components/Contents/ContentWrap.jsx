import '../../css/ContentWrap.scss';
import Card from './Card';
import { useEffect, useState } from 'react';
function ContentWrap({ getTag }) {
    const Portfolio = [
        { sid: 1, name: '0+B電商網站', img: 'course.png', people: '團隊', skill: 'HTML / CSS / SCSS / JavaScript / React / Node.js / MySQL / GitHub', url: 'https://www.youtube.com/watch?v=kRzrteQSzls' },
        { sid: 2, name: '臨摹-星宇航空官網靜態網站', img: 'starlux.png', people: '個人', skill: 'HTML / CSS / GitHub', url: 'https://a0955361101.github.io/01-practice-layout/' },
        { sid: 3, name: '臨摹-復刻長榮航空官網靜態網站', img: 'evaair.png', people: '個人', skill: 'HTML / CSS / GitHub', url: 'https://a0955361101.github.io/02-practice-layout/' },
        { sid: 4, name: '選擇困難救星', img: 'turntable.png', people: '個人', skill: 'HTML / CSS / JavaScript/ GitHub', url: 'https://a0955361101.github.io/turntable/' },
    ];
    const [getData, setGetData] = useState(Portfolio);
    useEffect(() => {
        if (getTag === '全部') {
            setGetData(Portfolio);
        } else {
            const newData = Portfolio.filter((v, i) => {
                return v.skill.includes(getTag);
            });
            setGetData(newData);
        }
    }, [getTag]);
    return (
        <div className="ContentWrap">
            <div className='ContentWrap-flex'>
                {getData.map((v, i) => {
                    return <Card data={v} key={v.sid} />;
                })}
            </div>
        </div>
    );
}

export default ContentWrap;