# Activity 3: Lennard Jones

<link rel="stylesheet" type="text/css" href="../customstyle.css">

The interaction energy between two atoms in a simple liquid can be described by the Lennard-Jones potential:

$$
U\left(x\right) = 4{\gamma}\left[\left(\frac{\sigma}{x}\right)^{12}-\left(\frac{\sigma}{x}\right)^{6}\right]
$$

where $x$ is the separation of the atoms, $\sigma$ and $\gamma$ are constants.

If $\sigma=0.25nm$ and $\gamma=10meV$:

1. Sketch the form of the potential

2. Calculate the equilibrium separation $x_{0}$ of the atoms

3. Calculate the energy in meV required to completely separate the atoms to infinity

---

To see the solution you can click the button below.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">
<br>
1. Consider the limits:

- as $x \rightarrow {\infty}$, $\frac{1}{x^{12}}$ and $\frac{1}{x^{6}}$ both go to zero but $\frac{1}{x^{12}}$ goes to zero faster. This means that the potential goes to zero as $x \rightarrow {\infty}$ from the negative side

- as $x \rightarrow 0$, $\frac{1}{x^{12}}$ and $\frac{1}{x^{6}}$ both go to $\infty$ but $\frac{1}{x^{12}}$ goes to $\infty$ faster. This means that the potential goes to $+{\infty}$.

- must be a point crossing x axis where $\left(\frac{\sigma}{x}\right)^{12} - \left(\frac{\sigma}{x}\right)^{6}=0$

- There will also be a turning point (Here I'm cheating and using my answer to part b and c)

<div style="text-align: center;">
        <img src="imgs/3.png" alt="activity2" width="300" height=auto>
        <p><em>Sketch of the Lennards-Jones potential</em></p>
    </em></p>
    </div>

2. To find the equilibrium separation we need to find the minimum of the potential. This is where the force is zero. The force is given by:

$$F=-\frac{dU}{dx}$$

$$0 = -4{\gamma}\left[-12\left(\frac{{\sigma}^{12}}{x^{13}}\right)+6\left(\frac{{\sigma}^{6}}{x^{7}}\right)\right]$$

$$x_{0} = 2^{1/6}{\sigma}$$

3. It is the difference in energy between $0$ and $U(x_{0})$

$${\Delta}U = 0 - U(x_{0})$$

Substitute in the value of $x_{0}$ to find the energy in meV.

$${\Delta}U = -4{\gamma}\left[\left(\frac{{\sigma}}{2^{\frac{1}{6}}{\sigma}}\right)^{12}-\left(\frac{{\sigma}}{2^{\frac{1}{6}}{\sigma}}\right)^{6}\right]$$

$${\Delta}U = \gamma = 10meV$$

</div>
