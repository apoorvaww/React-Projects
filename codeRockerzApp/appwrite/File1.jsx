import { Client } from 'appwrite';
import React from 'react';

function File1() {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('66b38176003a54e70fc6');
    return (
        <div></div>
    )
}

export default File1