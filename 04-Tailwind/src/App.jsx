import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
  {
     img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'The team exceeded my expectations with their professionalism and quality.',
    color: 'royalblue',
    tag: 'Satisfied'
  },
  {
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop',
    intro: 'Excellent customer support and quick response to every query.',
    color: 'tomato',
    tag: 'Happy'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Amazing experience from start to finish. Highly recommended!',
    color: 'seagreen',
    tag: 'Recommended'
  },
  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop',
    intro: 'Very impressed with the attention to detail and dedication.',
    color: 'purple',
    tag: 'Trusted'
  },
  {
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2574&auto=format&fit=crop',
    intro: 'The service was smooth, efficient, and delivered on time.',
    color: 'orange',
    tag: 'Excellent'
  },
  {
    img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2574&auto=format&fit=crop',
    intro: 'I will definitely work with this team again in the future.',
    color: 'crimson',
    tag: 'Reliable'
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2574&auto=format&fit=crop',
    intro: 'Creative solutions and outstanding communication throughout.',
    color: 'teal',
    tag: 'Creative'
  },
  {
    img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2574&auto=format&fit=crop',
    intro: 'They understood my requirements perfectly and delivered beyond expectations.',
    color: 'goldenrod',
    tag: 'Professional'
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Fantastic experience! Everything was handled with care and precision.',
    color: 'mediumslateblue',
    tag: 'Outstanding'
  },
  {
    img: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=2574&auto=format&fit=crop',
    intro: 'Great value for money and exceptional service quality.',
    color: 'deeppink',
    tag: 'Top Rated'
  }
];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App