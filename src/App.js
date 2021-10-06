import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
// below we use one import to import all out components so we don't have a lot of imports. index.js in the components folders houses the imports
import { Navbar, Exchanges, HomePage, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'


const App = () => {
    return (
        // Navbar section of the app
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            {/* Main body of the app. Switch componet has the routes to all the other components under the src folder i.e Home, exchanges, cryptocurrencies cryptodetails, news */}
            <div className="main">
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />

                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />

                            </Route>
                            <Route exact path="/news">
                                <News />

                            </Route>
                        </Switch>

                    </div>

                </Layout>
                {/* footer Section of the app. Footer section is wraped by the last div from main*/}
                <div className="footer">
                    <Typography.Title level={5} styles={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
                {/* Footer section is wraped by the last div from main */}
            </div>
        </div>
    )
}

export default App
