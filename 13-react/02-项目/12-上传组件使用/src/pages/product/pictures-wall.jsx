import React from "react"
import { Upload, Icon, Modal, message } from 'antd';
import { reqDeleteImg } from "../../api/index"

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

export default  class PicturesWall extends React.Component {
    state = {
        previewVisible: false,  // 控制弹窗显示与否
        previewImage: '', // 大图url
        fileList: [],
    };

    // 取消弹框
    handleCancel = () => this.setState({ previewVisible: false });

    // 点击了预览
    handlePreview = async file => {  // file是哪一个图片
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    // 上传中，或完成，或失败调用
    handleChange = async ({ file, fileList }) => {
        // console.log(file)   当前操作的图片(上传/删除)
        // console.log(fileList)   所有已上传图片文件对象的数组

        console.log(file.status, fileList.length)
        if(file.status === "done"){
            const result = file.response;
            // console.log(result)
            if(result.status === 0){
                message.success("上传图片成功")
                let {name,url} = result.data;
                file = fileList[fileList.length-1]
                file.name = name;
                file.url = url;
            }else{
                message.success("上传图片失败")
            }
        }else if(file.status === "removed"){
            // console.log("removed")
            // 直接点击了垃圾桶  删除的是fileList中的数据
            // 真实要删除的是后端的数据
            let result = await reqDeleteImg(file.name)
            if(result.data.status === 0){
                message.success("删除图片成功")
            }else{
                message.success("删除图片失败")
            }
        }

        // 在上传中或完成时更新fileList状态
        this.setState({ fileList })
    };

    // 获取所有已上传的图片
    getImgs = ()=>{
        return this.state.fileList.map(file=>file.name)
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="/manage/img/upload"  /* 上传图片的接口地址 */
                    accept="image/*"  /* 只接收图片类型的数据 */
                    listType="picture-card"
                    name="image" /* 请求参数名 */
                    fileList={fileList}  /* 所有已上传图片文件对象的数组 */
                    onPreview={this.handlePreview}  /* 显示指定file对应的大图 */
                    onChange={this.handleChange}   /* 上传中/完成 调用 */
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}







