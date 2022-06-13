import React, { useState } from "react";
import styled from "styled-components";
import { getRandomNumber } from "./helper";

import { ReactComponent as MagicSVG } from "./images/magic-wand.svg";
import {
  Button,
  Description,
  Header,
  ResultTitle,
  Ticket,
  TicketItem,
  Title,
  Wrap,
  Wrapper,
} from "./Rapido.style";

const firstTicket = new Array(19).fill(1).map((v, i) => v + i);
const secondTicket = new Array(4).fill(1).map((v, i) => v + i);

const WIN_COMBO = getRandomNumber();
const WIN_NUMBER = Math.floor(Math.random() * (4 - 1) + 1);

const MagicSVGStyled = styled(MagicSVG)`
  cursor: pointer;
`;

const Rapido: React.FC = () => {
  const [firstSelectedField, setFirstSelectedField] = useState<number[]>([]);
  const [secondSelectedField, setSecondSelectedField] = useState<number>(0);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [messageResult, setMessageResult] = useState<string>("");

  const setFirstActiveFileds = (item: number) => {
    if (firstSelectedField.includes(item)) {
      return setFirstSelectedField((prev) => prev.filter((v) => v !== item));
    }

    if (firstSelectedField.length >= 8) return;

    setFirstSelectedField((prev) => [...prev, item]);
  };

  const setSecondActiveFileds = (item: number) => {
    setSecondSelectedField((prev) => (prev === item ? 0 : item));
  };

  const onSubmit = () => {
    const diff = firstSelectedField.reduce((acc: number[], val: number) => {
      if (WIN_COMBO.includes(val)) {
        acc.push(val);
      }
      return acc;
    }, []);

    // axiosSDK - обертка для axios, которую бы написал для работы с запросами
    // 6* - запросы с интервалом плохая практика
    // axiosSDK.get("/api/v1/rapido/result", { // 
    //   params: {
    //     selectedNumber: {
    //       firstField: firstSelectedField,
    //       secondField: [secondSelectedField],
    //     },
    //     isTicketWon: false // Проверку победителя я бы делал на сервере
    //   },
    // }).then(response => response); // { isTicketWon: boolean }

    if (diff.length >= 4) {
      setMessageResult("Ого, вы выиграли! Поздравляем!");
    }

    if (diff.length >= 3 && secondSelectedField === WIN_NUMBER) {
      setMessageResult("Ого, вы выиграли! Поздравляем!");
    }

    setMessageResult((prev) => prev || "К сожалению вы проиграли");
    setIsSubmit(true);
  };

  const onSettingField = () => {
    setFirstSelectedField(getRandomNumber());
    setSecondSelectedField(Math.floor(Math.random() * (4 - 1) + 1));
  };

  const onRetry = () => {
    setIsSubmit(false);
    setMessageResult("");
    setFirstSelectedField([]);
    setSecondSelectedField(0);
  };

  return (
    <Wrap>
      <Wrapper>
        <Header>
          <Title>Билет 1</Title>
          {!isSubmit && !messageResult && (
            <MagicSVGStyled onClick={onSettingField} />
          )}
        </Header>
        {isSubmit && messageResult ? (
          <>
            <ResultTitle>{messageResult}</ResultTitle>
            <Button onClick={onRetry}>Попробовать еще</Button>
          </>
        ) : (
          <>
            <Description>
              <span>Поле 1</span>Отметьте {firstSelectedField.length} чисел из
              8.
            </Description>
            <Ticket>
              {firstTicket.map((num) => (
                <TicketItem
                  key={num}
                  isActive={firstSelectedField.includes(num)}
                  onClick={() => setFirstActiveFileds(num)}
                >
                  {num}
                </TicketItem>
              ))}
            </Ticket>
            <Description>
              <span>Поле 2</span>Отметьте {secondSelectedField ? 1 : 0} чисел из
              1.
            </Description>
            <Ticket>
              {secondTicket.map((num) => (
                <TicketItem
                  key={num}
                  isActive={secondSelectedField === num}
                  onClick={() => setSecondActiveFileds(num)}
                >
                  {num}
                </TicketItem>
              ))}
            </Ticket>
            <Button
              onClick={onSubmit}
              disabled={
                !(firstSelectedField.length >= 8 && secondSelectedField)
              }
            >
              Показать результат
            </Button>
          </>
        )}
      </Wrapper>
    </Wrap>
  );
};

export default Rapido;
