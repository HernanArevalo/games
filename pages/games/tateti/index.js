
import { colors, fonts } from '@/styles/theme'
import Head from 'next/head'
import { useState } from 'react'

export default function Tateti() {

	const [owners, setOwners] = useState([null, null, null, null, null, null, null, null, null ])

	const [player, setPlayer] = useState(1)
	const [positions1, setPositions1] = useState([])
	const [positions2, setPositions2] = useState([])

	const handleClick = (owner,idx) => {
		if (owner == null) {
			setOwners((owners)=> { owners[idx] = player })

			console.log(owners)
			setPlayer(2)
			
		}
	}

  return (
    <>
      <Head>
        <title>Tateti</title>
      </Head>

      <div className='tateti-container'>
        <h3>Tateti</h3>
        <span>TURNO DEL JUEGADOR {player}</span>
        <ul>
            {
                owners.map((owner,idx) =>

                    <li key={idx} onClick={()=> handleClick(owner,idx)}>
                        <div>CARD</div>
                        <div>{idx+1}</div>
												<div>JUGADOR {owner}</div>

                    </li>
                    )
            }

        </ul>

      </div>

      <style jsx>{`

        div{
            font-family: ${ fonts.base };
            color: ${ colors.grey };
            text-align: center;
        }
        .tateti-container{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        ul{
            list-style: none;
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 20px;
            }
        li{
          overflow: hidden;
          cursor: pointer;
          background: ${ colors.grey };
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

        }
        li > div{
            color: ${ colors.black };
            font-weight: 700;
        }


      `}</style>
    </>
  )
}