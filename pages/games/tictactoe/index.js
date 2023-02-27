
import { colors, fonts } from '@/styles/theme'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const WINNER_COMBINATIONS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

export default function Tateti() {

	const [owners, setOwners] = useState([null, null, null, null, null, null, null, null, null ]);


	const [player, setPlayer] = useState(1);
	const [positions1, setPositions1] = useState([]);
	const [positions2, setPositions2] = useState([]);
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(null)

	const handleClick = (owner,idx) => {

			setOwners((owners) => {
				const newOwners = [...owners]
				newOwners[idx] = player
				return newOwners
			} )

			if (player == 1) {
        setPositions1((positions) => positions.concat(idx) )
        setPlayer(2)
			}else{
        setPositions2((positions) => positions.concat(idx) )
				setPlayer(1)
			}
			
		
	}



  const checkWin = (positions, pj) => {

    WINNER_COMBINATIONS.forEach(winnerCombination => {
      if (positions.includes(winnerCombination[0]) && positions.includes(winnerCombination[1]) && positions.includes(winnerCombination[2]) ) {
        console.log(`GANA JUGADOR ${pj}`)
        setWinner(pj)
        setGameOver(true)
      };
    });
  }

  useEffect(() => {
    if (positions1.length > 2) {
      checkWin(positions1, 1)
    }

  }, [ positions1 ])
  
  useEffect(() => {
    if (positions2.length > 2) {
      checkWin(positions2, 2)
    }

  }, [ positions2 ])

  // ! GAME OVER
  useEffect(() => {

    if (!owners.includes(null)) {
      console.log('GAME OVER')
    }
    

  }, [owners])
  

  return (
    <>
      <Head>
        <title>TicTacToe</title>
      </Head>

      <div className='tateti-container'>
        <h3>TicTacToe</h3>

        <ul>
          { owners?.map((owner,idx) =>

            <li key={idx} onClick={()=> owner == null && handleClick(owner,idx)} className={`player${owner}`}>
                <div>{owner != null && owner}</div>

            </li>
          )}
        </ul>

        <div className='results'>
          {
          !gameOver && <span>TURNO DEL JUGADOR {player}</span>
          }
          {
          gameOver && <span>GANADOR JUGADOR {winner}</span>
          }
        </div>
      </div>

      <style jsx>{`
        h3{
          font-size: 80px;
          
        }
        div{
            font-family: ${ fonts.base };
            color: ${ colors.grey };
            text-align: center;
        }
        .tateti-container{
            display: flex;
            flex-direction: column;
            gap: 60px;
        }
        ul{
          justify-content: center;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-template-rows: repeat(3, 100px);
          gap: 20px;
        }
        li{
          overflow: hidden;
          cursor: pointer;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
					border: 2px solid ${ colors.grey };
          background: ${ colors.black };

        }
        .playernull > div{
          color: ${ colors.white };

        }
				.player1{
          background: ${ colors.grey };
					border: 2px solid ${ colors.black };

				}
				.player2{
          background: ${ colors.blue };
					border: 2px solid ${ colors.white };

				}
				.player2 > div{
					color: ${ colors.grey };
				}

        li > div{
            color: ${ colors.black };
            font-weight: 700;
            font-size: 40px;
        }
        
        .results{
          width: 400px;
          height: 200px;
          border: 2px solid ${ colors.blue };
          border-radius: 30px;
        }

      `}</style>
    </>
  )
}