import React from 'react';
import { Col, Row, Carousel, Typography, Tag } from 'antd';
import './index-headline-carousel.css';

const { Title } = Typography;

class IndexHeadlineCarousel extends React.Component {
    render() {
        return (
            <Carousel autoplay effect="fade">
                <div>
                    <Row type="flex" justify="start">
                    <Col span={16}><img height="100%" width="100%" justify-content="cover" src="http://www.people.com.cn/NMediaFile/2020/0114/MAIN202001140852594881451087623.jpg"/></Col>
                    <Col span={8} className="headline-carousel-text">
                        <Title mark level={3}>重庆：外籍留学生志愿者服务春运</Title>
                        <Title level={4} type="secondary">“我们到中国留学，更多的是想体验中国的传统文化，而春运就是中国文化的一部分，所以我们集体申报了涪陵北站的志愿者。”  </Title>
                    </Col>
                    </Row>
                </div>
                <div>
                    <Row type="flex" justify="start">
                    <Col span={16}><img height="100%" width="100%" justify-content="cover" src="https://images.tmtpost.com/uploads/images/2019/12/20191223134548587.jpg?imageMogr2/strip/interlace/1/quality/85/thumbnail/1024x568/gravity/center/crop/!1024x425&ext=.jpg"/></Col>
                    <Col span={8} className="headline-carousel-text">
                        <Title mark level={3}>钛媒体年度 3D 打印行业报告：“泡沫散尽，只欠东风” | 钛媒体行研</Title>
                        <Title level={4} type="secondary">3D打印在经历了漫长的静默期以后，得到了新的增长机会。</Title>
                    </Col>
                    </Row>
                </div>
                <div>
                    <Row type="flex" justify="start">
                    <Col span={16}><img height="100%" width="100%" justify-content="cover" src="https://images.tmtpost.com/uploads/images/2020/01/93c52e702be559254b1b28efecd746f9_1578991596.jpeg?imageMogr2/strip/interlace/1/quality/85/thumbnail/1400x648/gravity/center/crop/!1400x648&ext=.jpeg"/></Col>
                    <Col span={8} className="headline-carousel-text">
                        <Row type="flex" justify="start" className="headline-carousel-title">
                        <Title mark level={3}>10克重的AirPods，如何扛着万亿美元Apple前进？</Title>
                        </Row>
                        <Row type="flex" justify="start">
                        <Title style={{ marginBottom: 20 }} level={4} type="secondary">两只小小的最新款AirPods Pro耳机加起来只有约10克重，但它却正悄然推动全球市值最高的苹果公司重回巅峰。</Title>
                        <Tag>好奇心日报</Tag>
                        <Tag>Apple</Tag>
                        </Row>
                    </Col>
                    </Row>
                </div>
            </Carousel>
        );
    }
}
  
export default IndexHeadlineCarousel;