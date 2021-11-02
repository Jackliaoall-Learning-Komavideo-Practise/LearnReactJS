import React, { Fragment } from 'react';

const AwsForm = () => {
    return (
        <Fragment>
            <form className="d-flex flex-column">
                <h2 className="border-bottom pb-2">AWS表单</h2>
                <div className="mb-3">
                    <label htmlFor="txtAccessKeyID" className="form-label fs-6">AccessKeyID</label>
                    <input type="text" className="form-control" id="txtAccessKeyID" />
                </div>
                <div className="mb-3">
                    <label htmlFor="txtSecretAccessKey" className="form-label fs-6">SecretAccessKey</label>
                    <input type="password" className="form-control" id="txtSecretAccessKey" />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectRegionID" className="form-label fs-6">AWS区域</label>
                    <select className="form-select font12" id="selectRegionID">
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
                    <button className="btn btn-success btn-lg">确定</button>
                </div>
                <hr />
            </form>
        </Fragment>
    )
}

export default AwsForm;