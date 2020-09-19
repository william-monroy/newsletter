import React from 'react'

function WidgetsNews() {
    return (
        <div className="widgetsNews">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTECcampusMTY&tabs=timeline&width=350&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340" 
            height="100%"
            style={{ border:"none",overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true" allow="encrypted-media">    
            </iframe>
        </div>
    )
}

export default WidgetsNews
