import { List, Card, Image } from 'antd';

const CardGrid = ({ items }) => {
    return (
      <>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <Card className="fade-up-animation" title={<h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h3>}
                cover={<Image preview={true} src={item.image} />}>
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </>
    )
  }

  export default CardGrid;