'use strict';
const headerDivided = document.getElementById('header');

readHeader();

function readHeader() {
    // logo部分
    const headerLogoDivided = document.createElement('div');
    headerLogoDivided.setAttribute('class', 'header-logo');
    const anchor = document.createElement('a');
    const hrefValue = 'index.html';
    anchor.setAttribute('href', hrefValue);
    anchor.innerText = '有金肉';
    headerLogoDivided.appendChild(anchor);

    // list部分
    const headerListDivided = document.createElement('div');
    headerListDivided.setAttribute('class', 'header-list');
    const unorderedList = document.createElement('ul');
    const contentsList = [
        'Profile',
        'Works',
    ];
    const hrefValueList = [
        'profile.html',
        'works.html',
    ];
    const anchorList = [];
    const listItem = [];
    for (let i = 0; i < contentsList.length; i++) {
        anchorList.push(document.createElement('a'));
        listItem.push(document.createElement('li'));
        anchorList[i].setAttribute('href', hrefValueList[i]);
        anchorList[i].innerText = contentsList[i];
        listItem[i].appendChild(anchorList[i]);
        unorderedList.appendChild(listItem[i]);
    }
    headerListDivided.appendChild(unorderedList);

    // logoとlistをheaderに挿入
    headerDivided.appendChild(headerLogoDivided);
    headerDivided.appendChild(headerListDivided);
}

/* 
<div class="header-logo"><a href="index.html">有金肉</a></div>
<div class="header-list">
    <ul>
        <li><a href="">Prifile</a></li>
        <li><a href="works.html">Works</a></li>
        <li><a href="https://twitter.com/enpitsu882" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.pixiv.net/users/1894753" target="_blank" rel="noopener noreferrer">Pixiv</a></li>
        <li><a href="others.html">Others</a></li>
    </ul>
</div>
*/