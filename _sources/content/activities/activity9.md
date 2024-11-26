# Activity 9: Afm cantilever

In the lecture we derived the spring constant of an AFM cantilever:

$$k = \frac{3EI}{L^{3}}$$

We discussed the geometric moment of inertia, $I$, which is given by:

$$I = \int y^{2}dA$$

If you wanted to make the cantilever stiffer, which dimension (length, width, thickness) has the most effect for the smallest fractional change?

Think about the derivation again and instead of substituting $I$ perform the integral above and substitute the result instead.

---------------------

To see the solution you can click the button below or watch the video.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">

<br>
The first thing to be clear about is the orientation of the geometric moment of inertia, $I$. It is the cross-section fo the beam. Although it looks a bit like the elemental area we drew in the lecture it is orthogonal (ie through the thickness not along the length of the cantilever).

<div style="text-align: center;">
  <img src="imgs/9.png" alt="activity2" width="300" height=auto>
  <p><em>Geometric moment of inertia</em></p>
  </em></p>
</div>

$$I = \int y^{2}dA$$

$$dA = dy dz$$

$$\int_{\frac{-H}{2}}^{\frac{H}{2}}dz\int_{\frac{-b}{2}}^{\frac{b}{2}}y^{2}dy$$

$$I = \left[\frac{b}{2}-\frac{-b}{2}\right]\left[\frac{y^{3}}{3}\right]_{\frac{-H}{2}}^{\frac{H}{2}}$$

$$I = \frac{bH^3}{12}$$

$$k = \frac{EbH^{3}}{4L^{3}}$$

A small change in H or L makes a much bigger difference than a change in b. Doubling the thickness makes it $8\times$ stiffer.

</div>

<br><br>

<video width="600" controls>
  <source src="https://www.nottingham.ac.uk/~ppzmis/phys3009/A9.m4v" type="video/mp4">
  Your browser does not support the video tag.
</video>
