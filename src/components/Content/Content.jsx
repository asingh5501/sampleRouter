import { CardMedia, Typography, Card as MuiCard, } from '@mui/material'
import ContentCard from './ContentCard'

function Content() {
  const imageData = [
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294.png',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MGMPLUS.png',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg',
    'https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png'
  ]
  return (
    <div>
      <ContentCard
        txt1='Welcome to Prime Video'
        txt2='Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals'
        btnText='Sign to join Prime'
        imgUrl='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg'
        bottom={false}
      />
      <ContentCard
        txt1='Movie rentals on Prime Video'
        txt2='Early Access to new movies, before digital subscription'
        btnText='Rent Now'
        imgUrl='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg'
        bottom={true}
      />
      <div className='flex justify-around w-full'>
        <div className='w-full mt-[5%] ml-10'>
          <Typography variant="h4" component="h4" className='text-left' style={{ fontWeight: 'bold' }}>Your favorite channels all in one place</Typography>
          <Typography variant="h5" component="h5" className='mt-9' style={{ fontWeight: 'lighter' }}>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</Typography>
        </div>
        <div className='flex-wrap flex w-full'>
          {imageData.map(item => (
            // <div className='bg-gray-500 m-2 hover:shadow-inner shadow-2xl'>
              <img className='m-4 flex shadow-white hover:shadow-transparent rounded-lg' width={250} height={250} src={item} alt="1221212121" />
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content