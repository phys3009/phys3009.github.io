### Starter materials / examples for projects

If you are a PGT student you must work on one of these projects, but you may come up with your own scenario and direction. We strongly recommend discussing this with us early in the term to check it is suitable. If you are a Research student you will likely base your project on a problem that needs solving for your PhD but please use these projects as a guide.

Each project has an associated Jupyter notebook that contains some discussion as
well as some starter code to get you up and running.

#### Project 1: Beating the weather

<a href="https://open-meteo.com/">OpenMeteo</a> provides free access to historical weather data globally and also forecasts for the future which you can access using python. You can initially explore the data available through <a href="https://open-meteo.com/en/docs">OpenMeteo's website</a>.
To use python you will use a python api created by openmeteo which is included in the project.yml conda file.

Example scenarios:

1) You are approached by the owner of a hot air balloon company. They are looking to
expand by adding a new location for hot air balloon flights. Hot air balloon flights can
only take place when the wind is below 7mph and the weather is fine (ie sunny or
cloudy but very little chance of rain). It needs to be in the UK but it also needs to be
somewhere beautiful, perhaps a national park or area of outstanding natural beauty.
If they can give you a list of places, can you work out where, based on historical data
is the best place (ie most number of days they will be able to fly per year). Perhaps
you could even help them visualise number of estimated days flying on a contour
map of the UK. By the way his brother owns a windsurfing business in Spain, where
strong winds are good and weak winds are bad.

2)	A number of councils have been looking at implementing congestion charges in their cities. To do so they will need to make a case that the air quality in their city due to traffic is too poor relative to the countryside. From this they will be able to argue that congestion charges are necessary on the basis of protecting people's health. Regardless of whether you believe it is about health or making money can you supply them with a tool that allows them to investigate the air quality in different places of interest.

3) Looking at the underlying causes of changes in the weather has been constantly in
the news due to the emphasis on climate change. The Visual Crossing weather api
only has 50 years of historical data so unlikely (?) we could study this but there are
other interesting patterns. Sunspots are small dark regions of the Sun. There is a
known cycle ~12 years in the number of visible sunspots. You can download csv
datafiles of the number of sunspots (https://www.sidc.be/SILSO/datafiles ). Does this
have any effect on our Weather?

#### Project 2: Investing in stocks

In this project our starting point will be the data about different stocks available via <a href="https://uk.finance.yahoo.com/">yahoo finance</a>. 
Using this huge database we can get live information and historical stock prices for a huge number of companies. For example, look at
this page with <a href="https://uk.finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch">Amazon’s stock price</a>

The starter code shows you a very simple example, using a python library to extract this
information for Amazon between two time points.
Think about some of the factors that affect stock markets:

- Stocks vary individually but there are also global trends. If the market is going up or
down, most stocks will follow. You could try to identify whether the increases or
decreases in a stock are due to the market or the stock itself.
- Stocks are often correlated with other factors. If the price of oil goes up, the price of
airline stocks will go down. You could try to identify which stocks are correlated with
which factors.
- Stocks fluctuate in value over time. Sometimes the fluctuation is significant and it
means you should buy or sell fast. Sometimes it is insignificant and you should hold.
You could try to identify whether the fluctuation is significant or not.
- Visualising the historical trends in stocks can be useful. You could try to make it easy
to visually compare the historical trends of different stocks, perhaps annotating
graphs in a particular way when some of the events above occur.

Some example scenarios:

1) A business woman has a portfolio of 10 different stocks. She is busy running her own
business and doesn’t have time to monitor the stock markets like some hedge fund
managers do. What she wants is some code to monitor her stocks and alert her if
there are “significant” changes in any of the share prices. You might want to think
quite carefully about what significant means and how you’d work that out from the
data. How are you going to alert her?

2) Modern historians are interested in understanding the effect of big global events on
different types of industries. For example, COVID resulted in devastation for airlines
but was a boom time for those selling conference software like Zoom. How could you
make it easier for them to find patterns and trends?

#### Project 3: Analysing the stars

The Sloan Digital Sky Survey is a massive astronomy project that has been collecting images
and optical spectra of objects in the night sky. It is used by researchers, but all the data is
publicly available. One can deduce certain things from the spectra or associated information
about the objects. For example, one can determine the redshift of a galaxy from its
spectrum. This is a measure of how fast the galaxy is moving away from us. The spectra can
also be used to determine the chemical composition of stars and galaxies.
<a href="https://www.sdss3.org/dr14/">SDSS Project page</a>

In order to come up with project scenarios we highly recommend reading through a few of
the basic, advanced and research challenge sections on this <a href="https://skyserver.sdss.org/dr10/en/proj/advanced/advancedhome.aspx">page of SDSS tutorials</a>
You don't necessarily need to solve these challenges, but they will give you some basic
background and a sense of what kind of project might make sense.

A challenge of working with this Astronomy dataset is the sheer size of it. There are
hundreds of millions of objects in the database and so one cannot just blindly ask the server
to send you images or spectra for all of them! Stars or Galaxies can also be given catchy
names like NGC 5406 which are not things you are likely to know! Once you've come up with
a scenario we suggest using the following <a href="https://skyserver.sdss.org/dr14/en/tools/search/form/searchform.aspx">SDSS search tool</a>:
to narrow down a list of objects that you want to work with. You should be aware that only a
small fraction of the objects for which pictures exist have spectra (it is still a lot) but you can
filter with this tool. You could download a manageable number of object ids or coordinates
to a small csv, but be sure to include it with your project files so that we can reproduce your
results.

The coordinate system for identifying where objects in the sky frequently refers to ra and
dec. This can be a bit confusing. See a <a href="https://solarsystem.nasa.gov/basics/chapter2-2/">simple explanation of the coordinates</a>:

Example Scenarios:

1) An astronomer is interested in studying different types of astronomical objects. The
optical spectrum of a quasar looks different to that of a galaxy or star. Young stars are very
rich in elemental Hydrogen. Could you write a program that could classify objects based on
their spectra? Perhaps given a list of objects it could return images of the objects suspected
to be quasars or perhaps given a picture of a small bit of the night sky the astronomer could
click on different objects and a label would appear telling them what type of object it is.

2) Build a star thermometer. Although there are thousands of spectra the SDSS survey has a
much larger collection of images taken through a number of different filters. These filters are
designed to only let certain wavelengths of light through. The u filter lets through ultraviolet
light, the g filter lets through green light, the r filter lets through red light etc. The
temperature of a star determines how much light it emits at different wavelengths. A hot
star will emit more light in the ultraviolet than a cooler star. A cooler star will emit more light
in the infrared than a hotter star. If you look at the ratio of the brightness of a star in the u
filter to the brightness in the z filter you can get a good estimate of the temperature of the
star. A fair bit more background is explained in this <a href="https://skyserver.sdss.org/dr10/en/proj/basic/color/colorandtemp.aspx">color and temperature tutorial</a>
Star spectra are in many cases approximated quite well by a <a href="https://en.wikipedia.org/wiki/Black-body_radiation">blackbody spectrum</a> with a
known shape that depends on the Temperature. Can you write a tool that when given a star's object id will estimate the temperature of the
star?

