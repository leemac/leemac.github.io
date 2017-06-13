---
layout: post
title: Thoughts on SSRS and Enterprise Reporting in General
---

Reporting. It’s the one of the many areas in the Enterprise world that I personally think could be exploited by a new start-up. Having worked as a young developer in the Enterprise space, I’ve learned that Reporting is bittersweet for most, if not, all companies. [Between stale technologies](http://en.wikipedia.org/wiki/SQL_Server_Reporting_Services) that haven’t seen any major development in 10 years to issues with compatibility with modern browsers, it’s super frustrating as a developer. On the other hand, it’s critical to get the information to clientele and higher ups who want to see the numbers.

I have a few ideas that could spark a new company into fruition if the tools, dedication and talent is there.

Here is what I think a hypothetical start-up could do to take on [SSRS](http://en.wikipedia.org/wiki/SQL_Server_Reporting_Services) and win hears of businessmen everywhere.

## Browser Compatibility

SSRS has a few issues in Chrome, Firefox and just about any other browser that is not Internet Explorer. In Chrome it lags badly at times and some things just done work (such as Printing, which is sort of the point of these reports). Major hacks and tight integration with the IE team probably allowed the SSRS developers to get away with certain functionality such as locking headers and special ActiveX objects probably gave them functionality that worked at the time.

My solution would be to simply start over here. Ditch the old ways of the past and take advantage of newer technologies. HTML5 Canvas, SVG are pretty powerful today and there are [countless frameworks](http://d3js.org/) to build the visualizations needed. There are some [incredible demos](https://github.com/mbostock/d3/wiki/Gallery) that are both complex and interactive that can easily prove that the functionality is there.

## Printing

Printing can be frustrating with SSRS as it only appears to work with IE. Why? I have no idea, probably due to another “legacy” requirement of days past that was never improved since 2004.

If the visual elements/charts were done with SVG, you can print this out pretty easily. Some thought would have to go into this and it may not be as straight-forward, but I believe it can be done much easier now than it could have been when SSRS was released in 2004 with the technology of the day.

## Interactivity

![The Parts](/images/posts/thoughts-on-enterprise-reporting/interactive_chart.gif)
{: style="text-align: center;"}

*HighCharts has very interactive charting*
{: style="text-align: center;"}

SSRS has some basic interactivity such as drill-downs which are awesome. You can go much further with JavaScript as long as you provide the tooling necessary to do so easily.

The only problem here is printing. This may be a limiting factor for interactivity as you can’t print some of these charts. You could find a potential workaround however.

## Extensibility and Customization

There is not a whole lot you can do to extend with SSRS. I’d love to see some sort of plugin ability where developers could extend the reports. SSRS is to a point just a sandbox where you feed it the report and that’s it.

I’d love to be able to customize the viewer for the reports or add functionality through plugins.

Imagine creating a special plugin that can render in the screen and print. Provide a simple manifest file (JSON), some html and some APIs to hook into and you’re good to go.

Customization can be done in SSRS to some degree, but there is plenty of room for improvement. You could allow developers to supply a simple style sheet to do just about anything to modify the appearance of a report. JavaScript hooks and callbacks can be used to further modify the structure of the reports.

## Target Your Audience Appropriately

You’re target here is Enterprise, not ice cream shops or the local retail shop. You want your company and product to appear professional yet modern enough to appeal to decision makers at these corporations.

Provide awesome demos with realistic scenarios and keep it easy with the start-up lingo.

## Development and Tooling

OK, so this is one area that could actually be worse than SSRS development. It will likely be harder to develop these “newer” reports if you don’t provide the proper tool to build them.

Reports must be heavily customizable and must be build exactly to the needs of the customers needs. Visual Studio has hacks and workarounds to get certain things to work. Need to justify text? Good luck. That one request alone is fairly tricky in SSRS as it won’t print without the use of special niche plugins.

You also want these reports to be developed in a timely fashion. They can’t take weeks to build. Your tool should keep this in mind.

You’ll have to figure out a way to find the perfect balance between the type of person that will be required to build reports using your product and the complexity of the reports. This actually may be trickier than the reports themselves.

bruce-almighty-type
Your “ninja” must be fast as well. Reports are critical and those numbers are vital to meet customer needs.

## Support

Provide support to your customers that SSRS is lacking. SSRS is largely supported by forums and blog posts. That’s the only place you can really get help with special requirements you may have.

You can provide premium support where your developers work with your customers to get the functionality they need.

Take Telerik for instance. I can get an answer within a few hours about bugs or help with development and their controls. That would be gold for your customers building critical reports.

## Conclusion

Here are my points all summed up for what the “startup” to take on SSRS would have to do:

* Utilize SVG and/or HTML5 Canvas along with tabular data.
* Support printing from any browser.
* Increase interactivity
* Make it compatible with all modern browsers.
* Ensure development is doable when time is money.
* Provide top notch technical support

If you create this fantasy start-up, do let me know. I could use something like this. :)
