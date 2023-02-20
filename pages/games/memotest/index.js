/* eslint-disable react-hooks/exhaustive-deps */
import { colors } from '@/styles/theme'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const IMAGES = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
              .flatMap((image) => [`a|${image}`,`b|${image}`])
              .sort(()=> Math.random() - 0.5)

export default function MemoTest() {

  const [selected, setSelected] = useState([])
  const [guessed, setGuessed] = useState([])

  useEffect(()=>{
    console.log(selected)
  }, [selected])


  const onHandleClick = (img) => {
    if (selected.length < 2 && !selected.includes(img)){
      setSelected((selected) => selected.concat(img))

    }
  }

  useEffect(()=>{
    if (selected.length == 2) {
      
    }


  }, [selected])


  return (
    <>
      <Head>
        <title>MemoTest</title>
      </Head>

      <div>
        <h3>Memotest</h3>
        <ul>
          {/* { IMAGES.map( img => {
            const [, url] = img.split('|')


            return(
            <li key={url} 
            >

            <div className='card-container'>
              <div className='card'>
                <div className='front'>
                  <Image alt={"messi logo"}src={'/memotest/logo.png'} width='70' height='70' draggable="false"/>
                </div>
                <div className='back'>

                  { 
                    selected.includes(img) ?
                      <Image src={`/memotest/${url}`} alt={'messi image'} width='100' height='100' draggable="false"/>
                    :
                      <Image src={`/memotest/logo.png`} alt={'messi logo'} width='70' height='70' draggable="false"/>
                  }

                </div>
              </div>
            </div>

            </li>

          )}) } */}

          { IMAGES.map( img => {
            const [, url] = img.split('|')

            return(
              <li key={ img }
                  onClick={ () => onHandleClick(img) }
              >
                <div className='card-container'>
                <div className='card'>
                { 
                  selected.includes(img) ?
                    <Image src={`/memotest/${url}`} alt={'messi image'} width='100' height='100' draggable="false"/>
                  :
                    <Image src={`/memotest/logo.png`} alt={'messi logo'} width='70' height='70' draggable="false"/>
                }

                </div>
                </div>

              </li>
            )
          })}


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
          grid-template-columns: repeat(4, 100px);
          grid-template-rows: repeat(4, 100px);
          gap: 20px;
        }
        li{
          overflow: hidden;
          cursor: pointer;

        }
        .card-hidden{
          background-color: ${colors.grey};
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-container {
          width: 100px;
          height: 100px;
          perspective: 800px;

        }

        .card-active {
          cursor: pointer;
          transform: rotateY(180deg);
        }

        .card {
          height: 100%;
          width: 100%;
          position: relative;
          transition: transform 1500ms;
          transform-style: preserve-3d;

        }

        .front,
        .back {
          height: 100%;
          width: 100%;
          border-radius: 20px;
          position: absolute;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;

        }

        .front{
          background-color: #3a3a3a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        .back {
          transform: rotateY(180deg);
        }

      `}</style>
    </>
  )
}