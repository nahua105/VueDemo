<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            <span>您好:{{currUser}}
                            <a href="javascript:void(0);" @click="onLogoutClick">退出</a>
                            </span>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']"  @on-select="onTopMenuSelect">
                        <MenuItem name="home">
                            首页
                        </MenuItem>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               Vue-Demo
                            </template>
                            <MenuItem name="test">
                                书籍
                            </MenuItem>
                              <MenuItem name="video">
                               视频
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view>
                        </router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>

</template>

<script src="./Home.ts"></script>
<style src="./Home.css"></style>