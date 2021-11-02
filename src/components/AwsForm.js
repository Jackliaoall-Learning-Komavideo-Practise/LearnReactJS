import React, { Fragment, useState } from 'react';

const AwsForm = () => {
    const [txtAccessKeyID, setAccessKeyID] = useState('')
    const [txtSecretAccessKey, setSecretAccessKey] = useState('')
    const [selectRegionID, setRegionID] = useState('ap-northeast-1')

    const txtAccessKeyID_onchange = (event) => {
        setAccessKeyID(event.target.value)
    }
    const txtSecretAccessKey_onchange = (event) => {
        setSecretAccessKey(event.target.value)
    }
    const selectRegionID_onchange = (event) => {
        setRegionID(event.target.value)
    }
    const btn_click = (event) => {
        console.log(txtAccessKeyID, txtSecretAccessKey, selectRegionID)
    }

    return (
        <Fragment>
            <div className="d-flex flex-column">
                <h2 className="border-bottom pb-2">AWS表单</h2>
                <div className="mb-3">
                    <label htmlFor="txtAccessKeyID" className="form-label fs-6">AccessKeyID</label>
                    <input type="text" className="form-control" id="txtAccessKeyID" value={txtAccessKeyID} onChange={txtAccessKeyID_onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="txtSecretAccessKey" className="form-label fs-6">SecretAccessKey</label>
                    <input type="password" className="form-control" id="txtSecretAccessKey" value={txtSecretAccessKey} onChange={txtSecretAccessKey_onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectRegionID" className="form-label fs-6">AWS区域</label>
                    <select className="form-select font12" id="selectRegionID" value={selectRegionID} onChange={selectRegionID_onchange}>
                        <option value="us-east-1">
                            美国东部 (弗吉尼亚北部)
                        </option>
                        <option value="ap-northeast-1">
                            亚太地区 (东京)
                        </option>
                        <option value="eu-west-2">
                            欧洲 (伦敦)
                        </option>
                    </select>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-success btn-lg" onClick={btn_click}>确定</button>
                </div>
                <hr />
            </div>
        </Fragment>
    )
}

export default AwsForm;