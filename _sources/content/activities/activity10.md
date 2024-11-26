# Activity 10: Particle escaping from an optical trap

Derive an expression for the approximate distance $r$ from the centre of the trap at which thermal fluctuations ($k_{B}T$) will enable a particle trapped in a set of optical tweezers to escape. <strong>N.B</strong> under these conditions it will no longer be true that $r << w_{0}$ as a result you can't use the quadratic approximation but must use the full expression. As your starting point use the equations:

$$U = -\frac{2\alpha}{c{\epsilon}{\epsilon}_{0}n}I$$

and

$$I=I_{0}\exp\left(-\frac{r^{2}}{2w_{0}^{2}}\right)$$


---------------------

To see the solution you can click the button below.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">
<br>

The condition for escape is $|U| {\approx} k_{B}T$. This is basically the range of the interaction so can use this to find expression for $r$.

Combining equations:

$$U = -\frac{2{\alpha}I_{0}}{c{\epsilon}{\epsilon}_{0}n}\exp\left(-\frac{r^{2}}{2w_{0}^{2}}\right) \approx k_{B}T$$

$$\exp(-\frac{r^{2}}{2w_{0}^2}) \approx \frac{k_{B}Tc{\epsilon}{\epsilon}_{0}n}{2{{\alpha}I_{0}}}$$

$$r = \left(-2w_{0}^2 ln\left(\frac{k_{B}Tc{\epsilon}{\epsilon}_{0}n}{2{\alpha}I_{0}}\right)\right)^{\frac{1}{2}}$$

</div>



