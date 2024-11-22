# Activity 5: Adding up dispersion interactions

The dispersion energy of interaction between an atom and a semi-infinte substrate is given by

$$U_{dispersion} = -\frac{{\pi}n_{1}C}{6x^{3}}$$

where $C$ is a constant which determines the strength of the interaction between the atoms, $n_{1}$ is the number density of atoms in the substrate and x is the distance between the atom and the surface of the substrate.

An atomic force microscope tip and holder which has cylindrical symmetry and a profile similar to that shown in the figure below, is brought close to the surface os a semi-infinite substrate. The equation describing the profile of the tip is $y=a(x-D)^{0.5}$, where $a$ is a constant and $D$ is the distance between the end of the tip and the surface of the substrate.

<div style="text-align: center;">
        <img src="imgs/5a.png" alt="activity2" width="300" height=auto>
        <p><em>Graph showing $x^6$ and $x^3$ potential energy curves</em></p>
    </em></p>
    </div>

a) Use the above result to show that the dispersion energy of interaction between the curved portion of the tip and the surface is

$$U_{tip}=-\frac{{\pi}^{2}n_{1}n_{2}C}{6}\frac{a^{2}l^{2}}{2D(D+l)^{2}}$$

where $n_{2}$ is the number density of atoms in the tip and $l$ is the length of the tip.

---

To see the solution you can click the button below.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">
    <div style="text-align: center;">
        <img src="imgs/5b.png" alt="activity2" width="500" height=auto>
    </div>

We will have elemental volumes that are circles of radius $y$ and thickness $dx$. We can calculate the number of atoms in the slice to be $N_{slice}=n_{2}{\pi}y^{2}dx$. That gives the potential due to the slice as $U_{slice}=U_{atom}N_{slice}$.

$$U_{slice}=-\frac{{\pi}n_{1}C}{6x^{3}}n_{2}{\pi}y^{2}dx$$

Substitute in for y:

$$U_{slice}=-\frac{n_{1}n_{2}{\pi}^{2}C}{6}\frac{a^{2}(x-D)dx}{x^{3}}$$

Now we need to integrate from the tip at x=D to the holder at x=D+l:

$$U_{tip}=-\frac{a^{2}n_{1}n_{2}{\pi}^{2}C}{6}\int_{D}^{D+l}\frac{(x-D)dx}{x^{3}}$$

$$U_{tip}=-\frac{a^{2}n_{1}n_{2}{\pi}^{2}C}{6}\left[\frac{-1}{x}+\frac{D}{2x^{2}}\right]_{D}^{D+l}$$

Substitute limits and simplify:

$$U_{tip}=-\frac{n_{1}n_{2}{\pi}^{2}C}{6}\left[\frac{a^{2}l^{2}}{2D(D+l)^{2}}\right]$$

</div>
