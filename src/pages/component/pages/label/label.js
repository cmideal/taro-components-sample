import Taro, { Component } from '@tarojs/taro'

//RadioGroup
import { View, Text, Checkbox, Label, Radio } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'

export default class PageLabel extends Component {
    config = {
        navigationBarTitleText: 'Label'
    }
    constructor() {
        super(...arguments)
    }

    state = {
        checked: false
    }
    handleChange = e => {
        const { checked } = this.state
        this.setState({
            checked: !checked
        })
    }
    render() {
        return (
            <View className="container">
                <Head title="Label" />
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>表单组件在label内</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Label for='1' key='1'>
                                <Checkbox value='美国'>美国</Checkbox>
                            </Label>
                        </View>
                        <View className="page-section-spacing-reset" style="margin-top:15rpx">
                            <Label for='2' key='2'>
                                <Checkbox value='中国' checked>中国</Checkbox>
                            </Label>
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>label用for标识表单组件</Text>
                        </View>
                        <RadioGroup>
                            <View className="page-section-spacing-reset">
                                <Label for='3' key='3'>
                                    <Radio value='USA'>USA</Radio>
                                </Label>
                            </View>
                            <View className="page-section-spacing-reset" style="margin-top:15rpx">
                                <Label for='4' key='4'>
                                    <Radio value='CHN' checked>CHN</Radio>
                                </Label>
                            </View>
                        </RadioGroup>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>表单组件在label内</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Label for='5' key='5' onClick={this.handleChange}>
                                <Checkbox value='选项一' checked={this.state.checked}>选项一</Checkbox>
                            </Label>
                        </View>
                        <View className="page-section-spacing-reset" style="margin-top:15rpx">
                            <Label for='6' key='6'>
                                <Checkbox value='选项二'>选项二</Checkbox>
                            </Label>
                        </View>

                        <View style='margin-top:15rpx;margin-left:30rpx;font-size:28rpx;color:#586C94;'>
                            <Label onClick={this.handleChange}>点击该label下的文字默认选中第一个checkbox</Label>
                        </View>
                    </View>
                </View>
                <Foot />
            </View>
        )
    }
}
