/* eslint-disable react-hooks/exhaustive-deps */
import { colors } from '@/styles/theme'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function MemoTest() {
  
  const [images, setImages] = useState([])
  const [selected, setSelected] = useState([])
  const [guessed, setGuessed] = useState([])

  useEffect(() => {

    fetch('/api/memotest-api')
      .then((res) => res.json())
      .then(({images})=> setImages(images))

  }, [])
  
  var third = false


  const onHandleClick = (img) => {

    if (selected.length < 2 && !selected.includes(img)){
      setSelected((selected) => selected.concat(img))

    }
  }

  useEffect(()=>{
    if (selected.length == 2) {


      const [, img1] = selected[0].split('|')
      const [, img2] = selected[1].split('|')


      if (img1 == img2 ) {

        setGuessed((guessed) => guessed.concat(selected) )
        setSelected([])

      }else{

        const timeout = setTimeout(() => {
          setSelected([])
        }, 1500);

      }

    }

  }, [ selected ])


  return (
    <>
      <Head>
        <title>MemoTest</title>
      </Head>

      <div>
        <h3>Memotest</h3>
        <ul>

          { images.map( img => {
            const [, url] = img.split('|')

            return(
              <li key={ img }
                  onClick={ () => onHandleClick(img) }
              >
                <div className='card-container'>
                  <div className={`card ${selected.includes(img) || guessed.includes(img) ? 'card-active' : 'card-inactive'}`}>

                  <div className='front'>
                    <Image src={'/memotest/logo.png'} alt={"messi logo"}  width='60' height='60' draggable="false"/>
                  </div>
                  <div className='back'>
                    <Image src={`/memotest/${url}`} alt={'messi image'} width='100' height='100' draggable="false"/>
                  </div>


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

        {/* .card-container:hover > .card {
          cursor: pointer;
          transform: rotateY(180deg);
        } */}

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

        @keyframes rotate-card {
          from{
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(180deg);
          }
        }

      `}</style>
    </>
  )
}