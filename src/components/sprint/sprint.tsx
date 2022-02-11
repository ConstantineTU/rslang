import React from 'react';
import Button from '../button/button'

interface Props {
    timer: number,
    currentWordnumber: number,
    score: number,
    scoreMultiplier: number,
    circle1: React.MutableRefObject<HTMLDivElement> 
    circle2: React.MutableRefObject<HTMLDivElement>
    circle3: React.MutableRefObject<HTMLDivElement>
    word: string,
    translation: string,
    trueButtonHandler: React.MouseEventHandler
    falseButtonHandler: React.MouseEventHandler
}

export default function Sprint(props: Props) {
  return (
    <div>
      <div>{props.timer}</div>
      <div>{`Слово: ${props.currentWordnumber} из 20`}</div>
      <div>{`Счет: ${props.score}`}</div>
      <div>{`Комбо множитель x${props.scoreMultiplier}`}</div>
      <div className="combo-row">
        <div ref={props.circle1} className="circle"></div>
        <div ref={props.circle2} className="circle"></div>
        <div ref={props.circle3} className="circle"></div>
      </div>
      <div>{props.word}</div>
      <div>{props.translation}</div>
      <Button onClick={props.trueButtonHandler} class="button" textContent="Верно" />
      <Button onClick={props.falseButtonHandler} class="button" textContent="Неверно" />
    </div>
  );
}
