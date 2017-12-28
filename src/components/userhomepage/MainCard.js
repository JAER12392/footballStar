import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import 'materialize-css';

const MainCard = () => (
    <div>
      <Card header={<CardTitle reveal image={"https://s5.postimg.org/u0qdrrccn/ronaldo-5th.jpg"} waves='light'/>}
          title="Cristiano Ronaldo wins 5th Ballon d'Or"
          reveal={<div class="article-text"><p>When the moment arrived, so did he. Cristiano Ronaldo was in Paris to collect the Ballon d’Or at the foot of the Eiffel Tower on Thursday evening, another grand night to go with those he had in Madrid, Málaga and Munich, and in Cardiff especially. Ultimately, those were the moments that marked 2017 and they were his. Which is why this trophy, awarded by France Football, momentarily bought but never truly owned by Fifa, and first awarded to Stanley Matthews in 1956, passed on to Alfredo Di Stéfano the year after, and handed from there to the continent’s best player, season by season, is his too – for a record-equalling fifth time.
                    Only Lionel Messi has as many. Or should that read: only Ronaldo has as many as Messi? To some of their supporters, the order matters more than it should. The fact that parity has been reached certainly does and it feeds a debate as furious as it is often tedious yet wonderful at heart. Between them, Ronaldo and Messi, Messi and Ronaldo, have not let anyone else win this award for a decade now. This is their era: they have won seven of the past 10 European Cups between them, and been the competition’s top scorer for each and every one of those seasons, and the Ballon d’Or reflects that. In part it is reduced to that, yet it also goes beyond.
                    Champions League roundup: Ronaldo scores in every group game for Real
                    Who is the best player? Who has been the best player? Who has had the best season? Who won the most? And, who was the most decisive? They’re not all the same question and it is not always clear which of them, if any, the Ballon d’Or asks, what it is to which each voter lends the greatest weight. Whatever the question actually is, for 10 years the answer has ultimately been Cristiano Ronaldo or Lionel Messi. Cristiano Ronaldo and Lionel Messi, in fact.
                    At times their dominance can feel like it is partly a product of the grand narrative built around them, the rivalry itself, sometimes forced. There’s an equality that may be a little false too and there is the tyranny of numbers which is sometimes a substitute for actual appreciation, but a seductive one. Voting for them can also feel like the default setting, just what you do. And while some rebel, there may be a lack of imagination. But it is also a reality, a result of the relentlessness of their talent and performance.
          </p></div>}>
      </Card>
    </div>
  );

export default MainCard;
