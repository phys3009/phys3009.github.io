# Activity 15: the chemical potential

In the lectures we calculated the chemical potential for a 2D aggegate. In this exercise try and work through the same calculation for a 3D spherical aggregate. 

<div style="text-align: center;">
  <img src="imgs/15.png" alt="activity2" width="300" height=auto>
</div>

Show that the chemical potential is:

$${\mu = \frac{dU}{dN}}=-{\mu}_bulk + \left(\frac{3\nu}{4{\pi}}\right)^{\frac{2}{3}}\frac{8{\pi}\gamma}{3N^{\frac{1}{3}}}$$

Here are a few steps to help you with the calculation:

1. Work out how the radius, $R$, of the aggregate relates to $N$ the number of molecules
2. Write down $U_{bulk}$, $U_{surface}$ using ${\mu}_{bulk}$ and $\gamma$
3. Combine to get $U_{total}$ and substitute in your expression for $R$ in terms of $N$
4. Differentiate with respect to $N$ to get the chemical potential above.


---------------------

To see the solution you can click the button below or watch the video.

<button onclick="document.getElementById('solution').style.display='block'" style="border-radius: 5px; text-align: center; padding: 10px 20px; font-size: 16px;">
Show Solution
</button>
<div id="solution" style="display:none;">

1. $N=V/{\nu}=\frac{4}{3}\frac{{\pi}R^{3}}{\nu}

Rearranging gives: $R=\left(\frac{3{\nu}N}{4{\pi}}\right)^{\frac{1}{3}}$

2. $U_{bulk} = -N{\mu}_{bulk}$, $U_{surf} = 4{\pi}R^{2}{\gamma}$

3. 

$$U_{tot} = U_{bulk} + $U_{surf}$$

$$U_{tot}=-N{\mu}_{bulk} + 4{\pi}R^{2}{\gamma}$$

$$U_{tot}=-N{\mu}_{bulk} + 4{\pi}\left(\frac{3{\nu}N}{4{\pi}}\right)^{\frac{2}{3}}{\gamma}$$

4. Differentiate

$$\frac{dU_{tot}}{dN}=-{\mu}_{bulk} + 4{\pi}{\gamma}\left(\frac{3{\nu}}{4{\pi}}\right)^{\frac{2}{3}}\frac{1}{N^{\frac{1}{3}}}$$

</div>
