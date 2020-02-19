import React from 'react';
import { Row, Col, Layout } from 'antd';
import { Helmet } from 'react-helmet';
import Nav from '../../components/nav/nav';
import IndexHeadlineCarousel from '../../components/index-headline-carousel/index-headline-carousel';
import LoginBlock from '../../components/login-block/login-block';
import IndexContentList from '../../components/index-content-list/index-content-list';
import IndexAIWeather from '../../components/index-ai-weather/index-ai-weather';
import MyBackTop from '../../components/back-top/back-top';
import './index.css';

const { Footer } = Layout;

function Index(props){
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>潮汐-一个AI新闻网站</title>
                <link rel='icon' href='/favicon.ico' />
            </Helmet>
            <Nav />
            <Row className="index-row" type="flex" justify="center">
            <Col className="index-headline-carousel" span={16}>
                <IndexHeadlineCarousel />
            </Col>
            <Col className="login-block" span={4}>
                <LoginBlock props={props} />
            </Col>
            </Row>
            <Row className="index-row" type="flex" justify="center">
                <Col className="index-content-list" span={16}>
                    <IndexContentList />
                </Col>
                <Col className="hot-spot-list" span={4}>
                    <IndexAIWeather />
                </Col>
            </Row>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            <MyBackTop />
        </>
    );
}

export default Index;