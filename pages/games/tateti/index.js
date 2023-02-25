
import { colors } from '@/styles/theme'
import Head from 'next/head'

export default function Tateti() {

    const positions = [ [1,1],[1,2],[1,3],
                        [2,1],[2,2],[2,3],
                        [3,1],[3,2],[3,3]
                      ]

    

  return (
    <>
      <Head>
        <title>Tateti</title>
      </Head>

      <div>
        <h3>Tateti</h3>

        <ul>
            {
                positions.map(position => 
                    <li key={position}>
                        <div>CARD</div>
                        <div>{position[0]}</div>
                    </li>
                    )
            }

        </ul>

      </div>

      <style jsx>{`
        div{
            color: ${ colors.grey };
            text-align: center;
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
          border: 2px solid ${ colors.blue };
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

        }
      `}</style>
    </>
  )
}