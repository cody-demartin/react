import { Layout } from "antd";

const { Sider } = Layout

const SidebarContainer = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider type="primary">
                Hello
            </Sider>
        </Layout>
    )
}

export default SidebarContainer;