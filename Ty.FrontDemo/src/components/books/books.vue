<template>
  <div>
    <Button class="BtnAdd" style="margin-bottom:10px" type="primary" @click="onClickForm">新增</Button>

    <Modal v-model="formItemFlag" title="表单信息" @on-ok="onSubmitForm" @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="DatePicker">
          <Row>
            <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Radio">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
          <i-switch v-model="formItem.switch" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
          </i-switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <Button class="btnview" @click="handleSelectAll(true)">全选</Button>
    <Button class="btnview" @click="handleSelectAll(false)">取消全选</Button>


  </div>

</template>

<script src="./books.ts"></script>
<style src="./books.css"></style>

