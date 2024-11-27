# Activity 1: sedimentation and the thermal energy scale

In the lecture we looked at how the thermal energy of the water molecules can be enough to prevent small particles sedimenting. In this activity I want you to play with the small animation below and visualise how the sedimentation of particles is affected by the temperature of the water and the size of the particles. 

Try varying the sliders in the animation to change the temperature and the size of the particles.


<div style="display: flex; justify-content: center; margin: 20px 0;">
    <iframe src="animations/1_sediment.html" style="border:none; width:700px; height:500px;"></iframe>
</div>

1. What happens to the particles as you increase the temperature? 

2. What happens to the particles as you increase the size of the particles? 

3. Try and explain this to yourself in terms of equation 1.7 and 1.8. In particular if you want particles to not sediment what needs to be true about $l_g$

$$
φ(z)=φ_{0} e^{-mgz/k_{B}T}=φ_{0} e^{-4πR^{3}ρgz)/(3k_{B}T)}=φ_{0} e^{-z/l_{g}}	\tag{1.7}
$$

where $l_g$ is the gravitational length scale defined as:

$$
l_{g}=3k_{B}T/4πR^{3}ρg	\tag{1.8}
$$

---------------------

To see the solution you can click the button below:

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">

<br>
1. As you increase the temperature the particles are more likely to be disrupted by the thermal energy of the water molecules. This means that the particles are less likely to sediment.

2. As you increase the size of the particles the gravitational potential energy of the particles increases. This means that the particles are more likely to sediment.

3. If you want the particles to not sediment then $l_g$ needs to be much larger than the height of the container. This means that the thermal energy of the water molecules is enough to disrupt the gravitational potential energy of the particles.

</div>

---------------------

*In this activity we've just thought about comparing the thermal energy to the gravitational potential. If you have enough thermal energy relative to the potential it no longer matters. This is however true more generally. At the nanoscale we have to think about the thermal energy relative to all the other potentials that are acting on the particles. This is a key concept in understanding the nanoscale world.*

-------------
