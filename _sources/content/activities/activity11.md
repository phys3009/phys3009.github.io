# Activity 11: Understanding Colloidal Stability with DLVO

In the lectures we showed that charged plates in water have (as a minimum) two forces acting on them:

1. A pressure due to dispersion interactions 

2. An osmotic pressure that arises due to the increased concentration of ions between the plates

The graph below shows the pressure due to both these curves and the sum of the two. If you need to you can pan and zoom to see the features of the graph more clearly.

Using the sliders you can adjust the strength of 2 key parameters: The Hamaker constant and the Debye length (1/Kappa).

1. Identify which curve is due to the VdW interaction, which is the osmotic pressure and which is the combination

2. Change the Debye length. Which direction corresponds to adding more salt to the solution?

3. Try to find a combination of parameters where:

  - The interaction is attractive at all separations 
  - The interaction is strongly repulsive and the plates will remain apart
  - Try to find an intermediate regime which exhibits 2 minima. 

You may find it easier to zoom in on the y axis with magnifying glass.

4. Why do you think increasing the temperature makes things aggregate (ie stick together)?

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <iframe src="animations/11_dlvo.html" style="border:none; width:500px; height:500px;"></iframe>
</div>

---------------------

To see the solution you can click the button below or watch the video.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">
    <div style="text-align: center;">
        <img src="imgs/2.png" alt="activity2" width="300" height=auto>
        <p><em>Graph showing x^6 and x^3 potential energy curves</em></p>
    </em></p>
    </div>

3. Using $F=-\frac{dU}{dx}$ we can find the force between the two molecules by differentiating the potential energy with respect to x:

$$F = \frac{-6a}{x^{7}}$$
</div>

<br><br>

<video width="600" controls>
  <source src="media/vid1_1.mkv" type="video/mp4">
  Your browser does not support the video tag.
</video>
