// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
                .flatMap((image) => [`a|${image}`,`b|${image}`])
                .sort(()=> Math.random() - 0.5)

    }
    )
  }