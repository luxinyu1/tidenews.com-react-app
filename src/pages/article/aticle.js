import React from 'react';
import { Row , Col } from 'antd';
import { Helmet } from 'react-helmet';
import Nav from '../../components/nav/nav';

function Article (props) {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>潮汐-一个AI新闻网站</title>
            <link rel='icon' href='./favicon.ico'/>
        </Helmet>
        <Nav />
        <Row type="flex" justify="center">
            <Col className = "article-content" span={16}>
                <div dangerouslySetInnerHTML={{ __html: '<p> 　　中新网1月13日电 据美国有线电视新闻网(CNN)报道，美国国家安全顾问罗伯特·奥布莱恩表示，美国已经与朝鲜取得联系，寻求恢复外交谈判。</p> <p> 　　奥布莱恩称，“我们已经与朝鲜进行了接触，并告知他们，我们愿意继续去年10月在瑞典斯德哥尔摩进行的最后一次谈判”。</p> <p> 　　他还补充道，“我们一直通过各种渠道让朝鲜知道，我们希望让那些(谈判)回到正轨，并履行朝鲜最高领导人金正恩‘朝鲜半岛无核化’的承诺”。</p> <p> 　　奥布莱恩还表示，金正恩没有给美国所谓的“圣诞礼物”，这是一个“积极的信号”。此前，有分析认为，“圣诞礼物”或为朝鲜的“军事挑衅”。</p> <p> 　　据路透社报道，美国国家安全委员会发言人并没有立即作出评论。</p> <p> 　　另一方面，朝中社11日报道指出，朝鲜外务省顾问金桂冠当天就朝美会谈表态称，除非美国同意朝鲜提出的全部要求，否则朝鲜不再和美国举行谈判。</p> <p> 　　2019年2月，朝鲜最高领导人金正恩和美国总统特朗普在河内举行的第二次首脑会晤无果而终，半岛无核化谈判就此陷入僵局。朝美关系以及朝鲜半岛局势始终未能实现根本性突破。为推动对话重启，朝鲜多次声称将2019年底设定为美国拿出对话新方案的“最后期限”。</p>'}}>
                </div>
            </Col>
            <Col className = "article-source" span={4}>
            </Col>
        </Row>
        </>
    );
}

export default Article;