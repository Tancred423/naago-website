import React from 'react'
import Product from './components/Product'
import Welcome from './components/Welcome'
import Card from './components/Card'
import Finisher from './components/Finisher'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Welcome />
        <Product />
        <Card
          icon="./feature-01-dark.svg"
          title="/me"
          description="Link and verify your character in order to get your aforementioned character profile via /me."
        />
        <Card
          icon="./feature-01-dark.svg"
          title="/find"
          description="Find anyone's character profile via /find. Alternatively you can right click a user 🠆 choose Apps 🠆 Find. This is faster but requires this user to have a verified character."
        />
        <Card
          icon="./feature-01-dark.svg"
          title="/favorite"
          description="Add friends as favorites and access them faster than with /find. Alternatively you can right click a user 🠆 choose Apps 🠆 Add Favorite / Remove Favorite. This is faster but requires this user to have a verified character."
        />
        <Card
          icon="./feature-01-dark.svg"
          title="/maintenance"
          description="Shows you the currently ongoing FFXIV maintenances. This includes the game, the lodestone, the online store and the companion app."
        />
        <Card
          icon="./feature-01-dark.svg"
          title="/fashionreport"
          description="Shows the current week's fashion report solutions."
          linkText="Kindly provided by Kaiyoko 💫"
          link="https://twitter.com/KaiyokoStar"
        />
        <Card
          icon="./feature-01-dark.svg"
          title="Setup"
          description="Setup up your character, a custom profile theme, custom social media links, and automated lodestone notifications. Check /help or just type / in Discord to see all commands."
        />
        <Card
          icon="./feature-01-dark.svg"
          title="/help"
          description="Shows a help message with all commands and their explanations."
        />
        <Finisher />
        <Footer />
      </main>
    </div>
  )
}

export default App
