import React, { Component } from 'react';

export default class FileUpload extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>React File Upload</h3>
                    <div>
                        <input type="file" />
                    </div>
                    <div>
                        <button onClick={this.uploadHandler} type="submit">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}