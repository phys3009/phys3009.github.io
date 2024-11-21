# PHYS3009: Force and function at the nanoscale {#phys3009-force-and-function-at-the-nanoscale .H1}

**Handbook 2023-24**

**Module Convenor:** Dr Mike Smith, Rm C126, Physics Building,
<mike.i.smith@nottingham.ac.uk>

**This is a 10 credit Spring semester module**

## Aims of the Module {#aims-of-the-module .H2}

-   To provide an introduction to the kinematics of nanoscale systems

-   To help students to develop an understanding of the origin of forces
    on the nanoscale

-   To help students develop an appreciation of the role of
    intermolecular, interparticle and surface forces in nanoscale
    science, technology and biology.

## Assessment {#assessment .H2}

> Examination 100%:

-   In the summer assessment period.

-   In person, closed book

-   2 hrs to complete paper

-   Access to an equation sheet containing some key equations. This will
    be available in advance

## Contents: {#contents .H2}

1.  The Nanoscale World

2.  Forces and potentials

3.  Polar interactions

4.  Dispersion interactions

5.  Hydrogen Bonds & the Hydrophobic Effect

6.  Measurement of nanoscale forces

7.  Surface energy, surface tension and adhesion energy

8.  Capillary pressure

9.  Colloidal interactions

10. Steric interactions and entropic repulsion

11. Depletion Interactions

12. Aggregation

13. Self-assembly

## Using this guide {#using-this-guide .H2}

The material in this module is drawn from a range of different sources
making it difficult to recommend a single textbook that is written at
the appropriate level that covers the material. As such I have put
together these companion notes which function like a textbook for the
course. All the material is covered in the same order as the course.
Some students prefer written rather than oral explanations, and
sometimes it is quicker and easier to look up / remind yourself about
something specific in a sequential written text. **You shouldn't
therefore feel you need to read this guide cover to cover**, rather use
it to complement the rest of your studies, looking up bits that perhaps
you are unclear on or need to go over more slowly.

## Questions? {#questions .H2}

If you are stuck on any part of this course, try reading through the
appropriate part here but if you are still struggling to understand,
here are the options:

1.  I'm always happy to answer questions during or immediately after
    lectures.

2.  Every written question I answer from students will be posted to the
    Q&A forum of the Moodle page, so it is worth having a look there in
    case your question has already been addressed. If you want to see
    all questions and answers you may subscribe to this feature.

3.  If your question is not already listed then please email me your
    question at:

> <mike.i.smith@nottingham.ac.uk>
>
> I'm always happy to answer your questions and will usually get back to
> you in 1-2 working days. I will reply directly to your question and
> post in an anonymized way with the corresponding answer. I prefer to
> do this since then your question can then benefit others.

## 1. The Nanoscale World {#the-nanoscale-world .H2}

### The Nanoscale World {#the-nanoscale-world-1 .H3}

The nanoscale world is very different from the macroscopic one that we
inhabit. Thermal fluctuations constantly buffet and agitate molecules so
that a good mental picture is one of ceaseless random motions. Bringing
some order to this chaos, nanoscale forces attempt to resist these
disruptive influences.

### Microscopic and Nanoscale Forces {#microscopic-and-nanoscale-forces .H3}

Interatomic, intermolecular and surface forces act between different
objects and are responsible for holding (or not holding) materials such
as solids, liquids and gases together. These forces often have a simple
power law dependence, but they are all extremely short-range
interactions that persist over distances of 0.2 nm to 100nm.

### Brownian motion and what it tells us about the micro / nanoscale world {#brownian-motion-and-what-it-tells-us-about-the-micro-nanoscale-world .H3}

Unlike the macroscopic world, the motion of atoms, molecules and
sub-micron particles is dominated by the thermal fluctuations of atoms
and molecules that surround them. Each object is constantly being
pummeled by atoms and molecules in their environment which are in turn
being pummeled by their neighbours. This means that motion through a
liquid on the nanoscale is more like trying to swim through a children's
ball pool (where the balls are constantly being fired at you from all
sides using a tennis ball cannon) and less like trying to swim as one
might in a swimming pool full of water.

My point here is that the constant thermal motion that occurs on the
sub-micron and nanoscale makes motion very different on these length
scales (and subsequently has significant consequence for the design of
swimming objects on these length scales -- although this will not be
covered in this module). Instead of smooth fluid like motion, like that
obtained in bulk liquids (where inertial effects are important), we find
that the atoms, molecules and small particles diffuse around, executing
a random walk such that their mean square displacement \<x^2^\> after a
time, t, is given by

![](media/image1.wmf) \[equation 1.1\]

i.e. their displacement varies as t^0.5^.

The constant *D* is referred to as the diffusion coefficient (m^2^s^-1^)
and can be related to the size of the diffusing object and the
viscosity,*η*, (Pas) of the surrounding medium. For a spherical object
of radius a this is given using the Stokes-Einstein equation
![](media/image2.wmf) \[1.2\]

### The thermal energy scale {#the-thermal-energy-scale .H3}

At temperatures above absolute zero the atoms can have a significant
amount of thermal energy. This thermal energy causes the atoms and
molecules in a substance to jiggle around constantly, bashing into one
another with effect of disrupting any interactions between the atoms.
**When the thermal energy associated with atoms, molecules and particles
becomes comparable to the energy of interactions, the interactions will
cease to be significant.**

We therefore need to determine the magnitude of the thermal energy scale
and to determine how this influences forces (e.g. Gravity and Van der
Waals).

Suppose we start by considering the atoms/molecules in an ideal gas
whose behavior can be described using the ideal gas equation.

![](media/image3.wmf) \[1.3\]

This equation relates the pressure *P* (Nm^-2^) and volume *V* (m^3^) of
a gas, to the number of moles, *n*, and the temperature, *T* (Kelvin)
using the molar gas constant R (Jmol^-1^K^-1^). It is an equation with
which you should be familiar and which you may have encountered at
A-level (if not in your first year).

The left-hand side of this equation has units of energy (Nm^-2^ x m^3^ =
Nm)

In fact, PV is the total internal energy of the gas, which is manifested
as the kinetic (or movement) energy of the molecules.

As both sides of the equation must have identical units, the right-hand
side must also have dimensions of energy. If we note that the number of
moles of a substance, n, is simply the number of atoms/molecules in the
gas, N, divided by Avogadro's number, N~A~ (=6 x 10^23^) we can write

![](media/image4.wmf) \[1.4\]

So the total internal energy of the gas is *NkT,* where *k* is
Boltzmann's constant (*k*=1.38 x 10^-23^ JK^-1^). This means that the
average thermal energy associated with each of the N atoms in the gas is

![](media/image5.wmf) \[1.5\]

In fact, things are not quite this simple as the internal energy of a
gas depends upon the properties of the individual molecules (cf thermal
physics module). However, this very simple result does provide the
correct order of magnitude for the thermal energy scale at a given
temperature *T*.

### How big is kT? {#how-big-is-kt .H3}

*At room temperature, T=300 K,* so *kT = (1.38 x 10^-23^)(300) = 4.14 x
10^-21^ J (or 25 meV)*.

For two Neon atoms at a separation of 0.2 nm, their Van der Waals energy
of interaction *U~dispersion~* is given by

![](media/image6.wmf) (or 38 meV)

These two energies are very similar therefore we expect that the Van der
Waals interactions between individual atoms and molecules would be
disrupted by their constant thermal jiggling on length scales larger
than a fraction of a nanometre. This turns out to be the case,
confirming that the thermal energy scale is important on the nanoscale

### The Boltzmann Equation {#the-boltzmann-equation .H3}

The Boltzmann equation enables us to compare the importance of the
thermal fluctuations with energy (k~B~T) to the strength of a particular
interaction or potential. This gives probability that thermal energy
disrupts an interaction of strength U. **N.B it is only proportional to
not equal to**

$P(x)\text{~}\text{∝}$ $\exp^{- U/k_{B}T}$ \[1.6\]

In the lectures we thought about some particles suspended in a liquid.
Depending on their size they either sedimented or stayed suspended in
the liquid. We can use the Boltzmann probability to understand this.
That is that for small enough particles, gravity is of negligible
importance. The gravitational potential of a particle is given by mgz
where z is the height mg is the effective weight (ie weight of particle
minus the upthrust of the liquid). We can therefore rewrite the
Boltzmann probability in terms of the concentration of particles at
different heights.

$\varphi(z) = \varphi_{0}e^{\frac{- mgz}{k_{B}T}} = \varphi_{0}e^{\frac{- 4\pi R^{3}\rho gz}{3k_{B}T}} = \varphi_{0}e^{\frac{- z}{l_{g}}}$
\[1.7\]

φ is the volume fraction of particles, that is the number of particles
multiplied by the volume of a particle divided by the volume of the
containing liquid. If gravity is insignificant then the concentration of
particles should change on a lengthscale (l~g~) much larger than the
height of the container.

$l_{g} = \frac{3k_{B}T}{4\pi R^{3}\rho g}$ \[1.8\]

As we showed at particle radii ≤ 1µm particles are dominated by thermal
motions and gravity becomes unimportant. This is fundamental to
understanding the nanoscale world. Our macroscopic experience of gravity
gives meaning to concepts like up and down. Inertia and momentum, so
crucial to Newton's laws, are likewise no longer important concepts at
the nanoscale. We therefore have to do some rethinking...

## 2. Forces and Potentials {#forces-and-potentials .H2}

### Relationship between force and potential {#relationship-between-force-and-potential .H3}

The force, *F,* on an object can be related to the gradient in its
potential energy, *U,* with respect to distance, x, by the formula

![](media/image7.wmf) equation 2.1

This is an extremely important formula in physics and we will use it a
lot in this module.

### The 'sign' of the potential energy {#the-sign-of-the-potential-energy .H3}

![posneginteraction](media/image8.jpeg){width="1.1756944444444444in"
height="0.9798611111111111in"}When the potential energy is negative the
interaction between two bodies is favourable. Consider the example of
the potential energy of a system of positive and negative charges

Potential energy *U* \< 0

Similarly, when the potential energy is positive, interactions are
unfavourable.

![posposinteraction](media/image9.jpeg){width="1.2034722222222223in"
height="1.0in"}

Potential energy *U* \> 0

### The sign of the force {#the-sign-of-the-force .H3}

![posnegforce](media/image10.jpeg){width="1.167361111111111in"
height="0.9875in"}![posposforce](media/image11.jpeg){width="1.4236111111111112in"
height="1.2006944444444445in"}In the conventions used throughout this
module ***positive forces are repulsive*** and ***negative forces are
attractive***. Again consider the electrostatic forces acting between
charges of the same and different sign

\|[F]{.underline}\| \> 0 \|[F]{.underline}\| \< 0

**Strong Inter-atomic and intermolecular forces**

### Electrostatic (Coulomb) Interactions {#electrostatic-coulomb-interactions .H3}

You have already met Coulomb interactions in the first year 'Newton to
Einstein' module.

Some atoms and molecules (for example proteins) may acquire a net charge
and will interact via electrostatic forces

![](media/image12.png){width="3.96875in" height="1.8333333333333333in"}

**Figure 2.1** Protein molecules such as Insulin (pictured here) become
charged when placed in aqueous environments. The charge that they
acquire is sensitive to pH and salt concentrations. These molecules can
interact via electrostatic forces

![posposforceX](media/image13.jpeg){width="1.3472222222222223in"
height="1.1826388888888888in"}The **electrostatic potential energy** of
two molecules having charges *q~1~* and *q~2~* that are separated by a
distance, *x*, is given by

![](media/image14.wmf)

Equation 2.2

ε~o~=8.85 x 10^-12^ Fm^-1^

ε=relative permittivity of medium in which the molecules are suspended

![](media/image15.wmf)The **electrostatic force acting between** two
molecules having charges *q~1~* and *q~2~* that are separated by a
distance, *x*, is given by

Equation 2.3

The sign of the force depends upon the signs of the charges

If *q~1~q~2~* \< 0 **force is attractive** (negative sign)

If *q~1~q~2~* \> 0 **force is repulsive** (positive sign)

### The range of interactions {#the-range-of-interactions .H3}

As discussed previously, the thermal motion of atoms and molecules tends
to disrupt the interactions between them.

> At 'small' distances interactions between atoms and molecules are
> strong enough to overcome the effects of thermal motion.
>
> At 'large' distances interactions between atoms and molecules become
> weaker and are unable to overcome the effects of thermal motion.

*Small* and *large* are relative terms and depend on the nature and
strength of the interaction between two atoms/molecules.

We can estimate the range of an interaction by comparing the thermal
energy to the size (magnitude) of the potential energy of two molecules.

![](media/image16.wmf)

> Equation 2.4

When *\|U(x)\| ≤ kT* thermal motion disrupts the interactions

When *\|U(x)\| \> kT* the atoms/molecules still feel the interactions
between them

**When the two are equal we see a cross over from one regime to another.
The distance, x, at which this occurs gives a measure of the range of an
interaction.**

**Example: Range of electrostatic interactions**

![](media/image17.wmf)We can obtain an estimate of the range X~range~ of
the electrostatic interaction between two charged atoms/molecules if we
equate *kT* with our expression for the electrostatic potential energy
(equation 2.2)

Equation 2.5

![](media/image18.wmf)Rearranging gives

> Equation 2.6

For x ≥ X~range~ electrostatic interactions become unimportant relative
to thermal energies

> x \< X~range~ electrostatic interactions start to dominate
> interactions between atoms/molecules

### Ionic Crystals {#ionic-crystals .H3}

![NaClcrystal](media/image19.jpeg){width="2.1118055555555557in"
height="1.7652777777777777in"}![](media/image20.png){width="0.3875in"
height="0.8652777777777778in"}Electrostatic interactions are responsible
for the formation of ionic crystals

For example, consider NaCl

Large green ions are Cl^-^

Small red ions are Na^+^

Each Cl- ion has

6 nearest neighbour Na^+^ ions at a distance *r*

12 next-nearest neighbour Cl^-^ ions at √2*r*

8 next-next-nearest neighbour Na^+^ ions at √3*r*

We can use this information to calculate the (cohesive) energy per ion
holding the crystal together by summing up the contributions to the
potential energy from all neighbours to give

$U_{coh} = - \frac{e^{2}}{4\pi\varepsilon\varepsilon_{0}r}\left( \frac{6}{1} - \frac{12}{\sqrt{2}} + \frac{8}{\sqrt{3}} - \ldots \right)$

$U_{coh} = - \frac{\alpha e^{2}}{4\pi\varepsilon\varepsilon_{0}r}$
equation 2.7

Where *α* is called the Madelung constant (*α*=1.748 for NaCl) and *e*
is the electronic charge\
(1.6 x 10^-19^C)

### Covalent Bonds {#covalent-bonds .H3}

Covalent bonds are highly directional and are chemical in origin (e.g.
pi bond created by overlap of d electron orbitals)

These interactions originate from the sharing of **valence** electrons
to facilitate the filling of electronic shells within atoms → stable
structures.

![Chlorinemolecule](media/image21.jpeg){width="2.0861111111111112in"
height="1.367361111111111in"}The directionality of the bonds is caused
by the mutual repulsion of the electrons in neighbouring bond orbitals.

-   Covalent forces (bonds) operate over short distances 0.1-0.2 nm

-   The energies associated with the formation of these bonds are
    typically 2 to 8 eV

-   You will learn more about these in the 3^rd^ year Solid State module

### ![](media/image22.png){width="2.0416666666666665in" height="1.2604166666666667in"}Metallic bonding {#metallic-bonding .H3}

Sharing of electrons between metal atoms gives rise to another form of
bonding. However, in metallic bonds, the electrons become delocalised
throughout the material in such a way that they are shared between many
nuclei .

The 'sea' of delocalised electrons helps to screen the repulsion between
neighbouring nuclei and hold them together.

-   Metallic bonds are comparable in strength to covalent bonds (a few
    eV per bond)

The delocalisation of electrons can be used to explain many of the
properties of metals

**Optical** -- The optical properties of metals are determined by how
the 'sea' of electrons responds to the oscillating electric and magnetic
fields associated with incident light

**Electrical and Thermal** -- Delocalised electrons are easier to move,
so metals are good conductors of heat and electricity

The bulk properties of gold are determined by how its electrons move
around. When we make gold nanoparticles the motion of the electrons
becomes confined and the properties change. In the gold nanoparticle
solutions shown, the optical properties (colour) are changed by changing
the size of the particles.

### What do we mean by a "Strong Interaction"? {#what-do-we-mean-by-a-strong-interaction .H3}

"Strong" and "Weak" are relative terms. In the context of interactions
we can think of a "Strong" bond as something which is stable against
thermal fluctuations. That is in a large sample, even if we wait a long
time, none of the bonds will be disrupted. In contrast a "Weak"
interaction is one which has a reasonable [probability]{.underline} of
being disrupted and hence the two atoms / molecules being held together
by the interaction would then be free to diffuse away from one another.

To define this probability more carefully we return to the Boltzmann
probability:

>  $P(x)\text{~}\text{∝}$ $\exp^{- U/k_{B}T}$

The probability of a bond / interaction being disrupted by thermal
fluctuations is ***[proportional]{.underline}*** to the potential of the
interaction divided by kT *(N.B it is proportional because the prefactor
in front of the exponential is unknown -- related to collision
probabilities etc)*. The stronger the interaction the larger the value
of U/kT. To illustrate, a covalent bond \~ 100kT whereas a Van der
Waal's interaction (to be covered in later lectures) \~ 2kT.

U/kT \~ 100. 🡪 e^-100^ = 3.7x10^-44^ 🡪 Stable or "strong" interaction

U/kT \~ 2 🡪 e^-2^ = 0.13 🡪 Probability is significant, meaning the
interaction is "weak"

##  3. Polar interactions and Dipoles {#polar-interactions-and-dipoles .H2}

### ![polarHCl](media/image27.jpeg){width="1.492361111111111in" height="1.3958333333333333in"}Polar Molecules {#polarhclpolar-molecules .H3}

Many molecules are electrically neutral and carry no net charge.
However, they can still possess an **electric dipole moment**

Consider the molecule **HCl** (hydrogen chloride), although it is
electrically neutral, the electrons in the HCl bond lie closer to the
chlorine nucleus, giving the Cl end of the molecule a slightly negative
charge and the H end of the molecule a slightly positive charge of the
same magnitude.

The reason for this is that **electronegative atoms** such as chlorine
have a higher affinity for electrons than atoms such as hydrogen. In the
case of HCl, the electrons are pulled towards the chlorine atom giving
rise to a **permanent dipole.**

### Zwitterions and dipolar ions {#zwitterions-and-dipolar-ions .H3}

![zwitterion_glycine](media/image28.jpeg){width="3.7729166666666667in"
height="1.4006944444444445in"}In some cases, the polar properties of the
molecules depend upon the local environment (e.g. presence of solvents).
Water soluble dipolar molecules of this type are called **Zwitterions**
(Zwitter- German meaning 'hybrid' )

Some molecules contain both a net charge and a dipole moment. These
molecules are referred to as **dipolar ions**

### How do we define an electric dipole moment? {#how-do-we-define-an-electric-dipole-moment .H3}

![Dipoledefinition](media/image29.jpeg){width="1.8458333333333334in"
height="1.4986111111111111in"}Recall from electromagnetism that a dipole
consists of two charges (+*q* and -*q*) separated by a distance
*[d]{.underline}*

The dipole moment, [p]{.underline}, is then defined as

$$\mathbf{p} = qd\ \widehat{\mathbf{r}}$$

The electric dipole moment has units of Cm.

### Electric Field due to a dipole {#electric-field-due-to-a-dipole .H3}

When calculating the forces that are exerted during dipole-dipole
interactions it is first necessary to calculate the field due to an
electric dipole.

Consider two charges separated by a small distance, *d* in a medium of
dielectric constant, *ε*

![dipolesfieldpara](media/image30.jpg){width="3.111111111111111in"
height="1.4305555555555556in"}

We can calculate the field at the point, *x*, by summing up the fields
due to the two point charges. When x \>\> d this gives the result (for
an axial position)

$$\mathbf{E} = \frac{qd}{2\pi\varepsilon\varepsilon_{0}}\frac{1}{x^{3}}\mathbf{i}$$

### Potential energy of a dipole in an electric field  {#potential-energy-of-a-dipole-in-an-electric-field .H3}

![](media/image31.png){width="1.5868055555555556in"
height="1.8409722222222222in"}Consider a dipole in an external electric
field. There is no net force on the dipole as the forces on each of the
charges are equal and opposite. However, the forces exerted on these
charges will create a torque on the dipole and will cause it to rotate.

We can calculate the potential energy (U) of the dipole by calculating
the work done (W) in rotating the dipole, as U=-W.

This gives the result:

$$U_{dipole} = - \mathbf{p}.\mathbf{E}$$

### Polarisation of atoms and molecules using external fields  {#polarisation-of-atoms-and-molecules-using-external-fields .H3}

![dipoleinafield](media/image32.jpeg){width="2.6486111111111112in"
height="1.3375in"}When an electric field is applied to a neutral atom or
molecule, the forces on the charged particles (electrons and nuclei)
which comprise the atom or molecule cause some charge separation and
hence lead to the formation of an **induced dipole** on the
atom/molecule.

**The dipole moment of an atom or molecule can be related to the
external applied electric field by**

$$\mathbf{p} = \alpha\mathbf{E}_{ext}$$

where *α* is the **polarisability** of the atom/molecule in units
**C^2^m^2^J^-1^**

### ![forcesondipoleinfield](media/image33.jpeg){width="2.6013888888888888in" height="1.875in"}Polarisability of atoms, molecules and small particles {#forcesondipoleinfieldpolarisability-of-atoms-molecules-and-small-particles .H3}

We can determine the polarisability of an atom, molecule or small
particle in an applied external field by balancing the electrostatic
forces between the separated charges and the force exerted due to the
application external field. This gives the result

$$\alpha = 4\pi\varepsilon_{0}d^{3}$$

*Where d* is typically smaller than, but comparable to radius, R, of the
atom, molecule or particle*.* So *α* scales with the volume of the
atom/molecule *(α* *\~ R^3^ \~ Volume).*

*Polarisability scales with the volume of the molecule.*

### Summary of key concepts {#summary-of-key-concepts .H3}

Dipole moment $\mathbf{p} = qd\ \widehat{\mathbf{r}}$

Electric field due to a dipole
$\mathbf{E} = \frac{qd}{2\pi\varepsilon\varepsilon_{0}}\frac{1}{x^{3}}\mathbf{i}$

Potential energy of a dipole in an E field
$U_{dipole} = - \mathbf{p}.\mathbf{E}$

Dipole induced by an E field $\mathbf{p} = \alpha\mathbf{E}_{ext}$

Polarisability $\alpha = 4\pi\varepsilon_{0}d^{3}$

##  Dispersion Interactions {#dispersion-interactions .H2}

**Dispersion interactions** are always present and **act between all
atoms and molecules**. This is in contrast to other types of interaction
such as ionic and covalent interactions, which may or may not be present
depending upon the type of atoms/ions/molecules in a material.

Dispersion interactions are dipole-dipole interactions, which arise as
the result of **temporary local fluctuations in charge density on
atoms/molecules.**

1.  Temporary fluctuations in charge density create an **instantaneous
    dipole** on one atom/molecule.

2.  The resulting electric field produced by this dipole then **induces
    a dipole** in a neighbouring atom/molecule

3.  A force is exerted between the two correlated dipoles.

### Properties of dispersion forces {#properties-of-dispersion-forces .H3}

-   Can be attractive or repulsive (usually former)

-   Tend to have a weak orientational effect on neighbouring
    atoms/molecules

-   Can be relatively long ranged between macroscopic bodies (0.2 nm to
    \>10 nm)

-   They play a role in a many important phenomena such as adhesion,
    surface tension, wetting, flocculation and aggregation of particles.

### Potential energy due to dispersion interactions {#potential-energy-due-to-dispersion-interactions .H3}

The potential energy of the dispersion interaction (and indeed any
interaction) is a useful tool in helping us to determine the force
between two nanoscale objects, as the force is simply related to the
spatial derivative of the potential. We can determine the potential
energy of an induced dipole in the E-field due to an instantaneous
dipole by using the concepts relating to polar interactions developed
already.

Consider an instantaneous dipole of magnitude *p~1~*=*qd* on an
atom/molecule at the origin (where *q* is the magnitude of the charge
and *d* is the separation between the positive and negative charges in
the resulting dipole).

![dipoledipoleinteractionaxes](media/image34.jpg){width="3.4791666666666665in"
height="1.5902777777777777in"}

If a second atom having polarisability, α, is placed at a distance, *x*,
from the origin, this atom will experience a separation of charge and
will have an induced dipole moment,

$$\mathbf{p} = \alpha\mathbf{E}$$

However, we have already shown that the electric field due to the first
dipole can be approximated to

$$\mathbf{E} = \frac{qd}{2\pi\varepsilon\varepsilon_{0}}\frac{1}{x^{3}}\mathbf{i}$$

Also, we know that the potential energy of a dipole in an electric field
is given by

$$U_{dipole} = - \mathbf{p}.\mathbf{E}$$

Combining these three results gives the potential energy of the induced
dipole in the electric field due to the instantaneous dipole as

$$U(x) = - \frac{\alpha(qd)^{2}}{\left( 2\pi\varepsilon\varepsilon_{0} \right)^{2}}\frac{1}{x^{6}}\mathbf{= -}\frac{C}{x^{6}}$$

where C is a constant (Jm^6^) which determines the 'strength' of the
interaction between the two atoms.

This expression is the potential energy due to the dispersion
interaction between two atoms, but is equally valid for the dispersion
interaction between molecules.

The key point is that the **potential energy due to dispersion
interactions has a power law dependence which decays as 1/x^6^** These
interactions therefore decay much faster than for example the coulomb
interaction which has a much longer ranged 1/x^2^ dependence.

### Dispersion Forces {#dispersion-forces .H3}

Having derived an expression for the dispersion interaction potential
energy, we can determine the force exerted on each of the two atoms by
calculating the derivative of the potential, such that

$$F(x) = - \frac{dU}{dx} = - \frac{6\alpha(qd)^{2}}{\left( 2\pi\varepsilon\varepsilon_{0} \right)^{2}}\frac{1}{x^{7}}\mathbf{= -}\frac{6C}{x^{7}}$$

### The Range of Dispersion interactions {#the-range-of-dispersion-interactions .H3}

When the dispersion potential energy becomes comparable to thermal
energies, these interactions will start to become less important. We can
calculate the range of the dispersion interaction at a given
temperature, *T,* by equating the dispersion potential energy with the
thermal energy.

$$\left| U(x) \right| = \frac{\alpha(qd)^{2}}{\left( 2\pi\varepsilon\varepsilon_{0} \right)^{2}}\frac{1}{x_{range}^{6}}\mathbf{\approx}kT$$

Rearranging this expression gives

$$x_{range} \approx \left( \frac{\alpha(qd)^{2}}{\left( 2\pi\varepsilon\varepsilon_{0} \right)^{2}kT} \right)^{1/6}$$

Inserting typical values of *α=9 x 10^-40^ C^2^m^2^J^-1^* and *p=qd=5 x
10^-30^ Cm* for individual atoms at T=300 K gives a value of around 0.3
nm for the range of interaction.

This distance is comparable to the radius an atom (\~ 0.1 nm) and shows
that dispersion interactions between atoms, while being short range, are
strong enough to hold atoms in close contact against the effects of
thermal agitation. These types of interactions are responsible for
holding simple liquids and some organic solids together.

### Why don't atoms and molecules collapse in on one another?  {#why-dont-atoms-and-molecules-collapse-in-on-one-another .H3}

The form of the dispersion potential predicts that interactions get
stronger as atoms and molecules get closer together i.e. the forces
become more attractive the closer they get to one another.

So what prevents atoms and molecules from collapsing into one another?
The simple answer is that there must be an even shorter range repulsive
interaction which exerts a larger force than that generated by
dispersion forces when the atoms and molecules come into close contact.

**This short-range interaction arises due to the Pauli exclusion
principle:**

**"Two or more electrons may not have the same quantum state."**

**In other words, overlap of electron clouds of two atoms is strongly
repulsive.** However, this is not something that we can derive from
first principles so instead we use an empirical potential of the form,

$$U(x) = + \frac{B}{x^{12}}$$

### The Lennard-Jones (6-12) potential {#the-lennard-jones-6-12-potential .H3}

The total interatomic/molecular potential between two atoms or molecules
is therefore given by summing the attractive and repulsive potentials,
as discovered by Prof. Lennard-Jones,

$$U(x) = + \frac{B}{x^{12}}\mathbf{-}\frac{C}{x^{6}}\mathbf{=}4\gamma\left\lbrack \left( \frac{\sigma}{x} \right)^{12} - \left( \frac{\sigma}{x} \right)^{6} \right\rbrack$$

where B, C, γ and σ are all constants.

The plot below shows the shape of the attractive, repulsive and total
(attractive + repulsive) potentials as a function of the separation
between the atoms/molecules.

![lnnardjonesUvsdistance](media/image35.jpg){width="4.027777777777778in"
height="3.2569444444444446in"}

The force exerted on each of the atoms/molecules is given by taking the
derivative of the Lennard Jones potential and gives

$$F(x) = 4\gamma\left\lbrack 12\frac{\sigma^{12}}{x^{13}} - 6\frac{\sigma^{6}}{x^{7}} \right\rbrack$$

The form of the force versus the separation between the atoms/molecules
is plotted below in reduced units.

The equilibrium separation occurs when F=0 i.e. when the derivative of
the potential is zero.

At distances less than \~ 1.1σ, the net (total) force is positive and
therefore repulsive.

At distances greater than 1.1σ, the net (total) force is negative and
therefore attractive.

![lnnardjonesforcevsdistance](media/image36.jpg){width="3.6319444444444446in"
height="2.9930555555555554in"}

### Dispersion interactions between extended bodies {#dispersion-interactions-between-extended-bodies .H3}

We have considered the dispersion interaction between isolated atoms and
molecules. From here we can start to work out how dispersion
interactions affect the forces that are exerted on extended and
macroscopic bodies that are made up of many atoms/molecules.

Recall that the dispersion potential energy between isolated
atoms/molecules has the form

$$U(x) = \mathbf{-}\frac{C}{x^{6}}$$

**This power law dependence of the potential does not hold for
macroscopic objects that contain many atoms/molecules.**

So what happens when many atoms/molecules come together? The answer to
this question is relatively simple.

**If the interaction energy between an atom/molecule and one of its
nearest neighbours is given by *U*, then an atom that is surrounded by
*N* nearest neighbours will have a potential energy of order *NU*.**

In reality, it is not always quite this simple, but this argument is
correct in the sense that the more atoms/molecules we have in a cluster,
the greater the magnitude of the total potential energy associated with
the interactions will be. This means that by bringing many
atoms/molecules together we can increase the cohesive energy of the
resulting cluster.

Increasing the cluster size only works up to a point, as next nearest
neighbours and next-next nearest neighbours experience an increasingly
weaker interaction with the central atom/molecule. However, these
effects can be strong enough to hold some liquids and some organic
solids together, particularly if the molecules that comprise these
materials are large and thus able to experience many interactions with
neighbouring molecules.

A classic example of molecules held together by dispersion forces are
the linear alkanes. These are linear chains of carbon atoms with single
bonds between them. Each carbon atom in the chain has two hydrogen atoms
attached to it (except at the ends, where each carbon atom has three
hydrogen atoms attached to it). The lower alkanes such as methane
(CH~4~) and ethane (C~2~H~6~) are gases. However, as the length of the
alkane chain is increased, these materials form liquids such as octane
(C~8~H~18~) and eventually solids such as C~18~H~36~. In each case the
number of interactions between neighbouring molecules determines their
cohesive energy and hence the physical state of the material.

## 5. Dispersion Interactions -- larger objects {#dispersion-interactions-larger-objects .H2}

### Gecko feet {#gecko-feet .H3}

The additive nature of interactions is expected to effect the strength
of the dispersion interaction between macroscopic bodies.

![250px-Gecko_foot_on_glass](media/image37.jpeg){width="2.1743055555555557in"
height="1.4652777777777777in"}Geckos live in hot dusty climates. These
creatures have the extraordinary ability that they can climb sheer
surfaces and walk upside down across smooth glass plates. The mechanism
by which they do this depends on small soft structures on their feet
which allow them to stick to almost any surface. These small structures
deform when the gecko puts its foot on a surface. This increases the
amount of contact between the foot and the surface and thus increases
the effective strength of the dispersion interactions between the gecko
and the thing it is standing on.

### Dispersion interactions between macroscopic bodies {#dispersion-interactions-between-macroscopic-bodies .H3}

We have seen that the additive nature of short-range dispersion
interactions can make these interactions significant, but how can we
describe these interactions mathematically?

We will begin by considering the interaction between an isolated
atom/molecule and a semi-infinite solid surface separated by a distance
D.

![moleculesurfaceintor](media/image38.jpeg){width="2.673611111111111in"
height="1.8958333333333333in"}

Semi-infinite

solid surface

Atom/molecule

Consider a small annulus or ring in the solid surface which has a
radius, y, and which is a distance, x, from the atom/molecule

![annulus](media/image39.jpg){width="1.7361111111111112in"
height="1.5347222222222223in"}
![moleculesurfacedetail](media/image40.jpg){width="2.576388888888889in"
height="1.6597222222222223in"}

All the elemental volumes in this ring are at the same distance r from
the isolated atom, they therefore have the same interaction. Integrating
over x and y we can add up all the contributions in the slab (see
lectures for details).

**Interactions between a slab of material and another semi-infinite
slab.**

Derive an expression for the dispersion forces acting between a
perfectly flat slab of area S and a semi-infinite solid if the number
density of atoms in the slab and solid are n~1~ and n~2~ respectively.

![surfacesurfacedetail](media/image41.jpg){width="5.347220034995625in"
height="1.9930555555555556in"}

To solve this problem we start with the expression for the potential
energy due to dispersion interactions between a molecule and
semi-infinite surface which are separated by a distance x.

$$U(D) = \mathbf{-}\frac{\pi nC}{{6x}^{3}}$$

We then work out the number of atoms in a slice (red in the diagram
above). We add up all the contributions to the dispersion interaction
between this slice and the semi-infinite surface. Finally, we add up all
the slices in the slab to reach the total interaction with the solid
surface.

### Interactions between a sphere and a semi-infinite slab {#interactions-between-a-sphere-and-a-semi-infinite-slab .H3}

Derive an expression for the dispersion forces which act between a
sphere of radius R (for separations D\>\>R) and a semi-infinite solid if
the number density of atoms in the
![spheresurfacedetail](media/image42.jpeg){width="3.3229166666666665in"
height="1.9555555555555555in"}slab and sphere are n~1~ and n~2~
respectively.

As in the last example, we start with the expression for the potential
energy due to dispersion interactions between an individual
atom/molecule and a flat surface and add up the contributions due to all
the atoms/molecules in the sphere.

### A general strategy {#a-general-strategy .H3}

In all the examples above we follow a similar pattern

1.  Look for the symmetries in the system. Eg. With the sphere it is
    symmetric about the middle.

2.  Split the problem up into elemental volumes (that is those atoms
    that are all the same distance from the semi-infinite sheet.

3.  Integrate between the limits to add up the different contributions

### The Hamaker Constant {#the-hamaker-constant .H3}

The strength of the dispersion interaction between materials is often
quantified in terms of the Hamaker constant, *A*

$$A_{12} = n_{1}n_{2}\pi^{2}C$$

*n~1~* and *n~2~* are the number densities of atoms/molecules in the two
interacting materials (*m^-3^*)

C is the 'strength' of the interaction between an atom/molecule from one
material and an atom/molecule from the other (*Jm^6^*)

A~12~ is the Hamaker constant for materials 1 and 2 (J)

We can rewrite our expressions for the dispersion interaction energy
between two macroscopic bodies in terms of the Hamaker constant

**Dispersion Interaction energy between a flat slab of area, *S*, and a
semi-infinite solid**

$$U(D) = \mathbf{-}\frac{n_{1}n_{2}\pi CS}{12D^{2}}\mathbf{= -}\frac{A_{12}S}{12\pi D^{2}}$$

**Dispersion Interaction energy between a sphere of radius, *R,* and a
semi-infinite solid**

$$U(D) = \mathbf{-}\frac{n_{1}n_{2}\pi^{2}CR}{3D}\mathbf{= -}\frac{A_{12}R}{3D}$$

We can also write the forces in terms of the Hamaker constant

**Dispersion force between a flat slab of area, *S*, and a semi-infinite
solid**

$$F(D) = \mathbf{-}\frac{dU}{dD}\mathbf{= -}\frac{A_{12}S}{6\pi D^{3}}$$

**Dispersion force between a sphere of radius, *R,* and a semi-infinite
solid**

$$F(D) = \mathbf{-}\frac{dU}{dD}\mathbf{= -}\frac{A_{12}R}{3D^{2}}$$

Hence we can determine the strength of the dispersion interaction A~12~
between two materials by measuring forces acting between two macroscopic
bodies. The importance of a Hamaker constant is that we combine a bunch
of constants into a single one which represents how two materials
interact.

### Some other important geometries {#some-other-important-geometries .H3}

The geometry of the macroscopic bodies is important in determining the
separation dependence of the dispersion interaction...

![Hamakerspheres](media/image43.jpeg){width="2.032638888888889in"
height="0.9152777777777777in"}*Sphere-sphere*

$$U(D) = \mathbf{-}\frac{A_{12}}{3D}\frac{R_{1}R_{2}}{R_{1} + R_{2}}$$

![Hamakerparacylinders](media/image44.jpeg){width="1.6305555555555555in"
height="1.5097222222222222in"}*Parallel cylinders*

$$U(D) = \mathbf{-}\frac{A_{12}L}{12\sqrt{2}D^{3/2}}\left( \frac{R_{1}R_{2}}{R_{1} + R_{2}} \right)^{\mathbf{1/2}}$$

![Hamakerperpcylinders](media/image45.jpeg){width="1.5673611111111112in"
height="1.4305555555555556in"}*Perpendicular cylinders*

$$U(D) = \mathbf{-}\frac{A_{12}}{6D}\sqrt{R_{1}R_{2}}$$

### How big are Hamaker constants? {#how-big-are-hamaker-constants .H3}

Values of *A* typically lie in the range 10^-21^ to 10^-19^ Joules
(*kT~room\ ~*= 4.41x 10^-21^
J)![](media/image46.png){width="6.9299518810148735in"
height="2.500891294838145in"}

Taken from Surface and Intermolecular forces by J. Israelachvili 3^rd^
edition.

### The range of dispersion interactions between macroscopic bodies {#the-range-of-dispersion-interactions-between-macroscopic-bodies .H3}

We can calculate the range of the interaction by comparing dispersion
and thermal energies i.e. \|*U(D~range~)\| \~ kT.* In reality, this
description does not work for truly macroscopic objects, but is valid on
the submicron and nanometre length scales where thermal effects are
still important in influencing the behaviour of particles and
inter-surface forces.

**For the interaction between a sphere of radius R and a solid surface**
we have

$$\left| U(D) \right| = \frac{A_{12}R}{3D_{range}}\mathbf{\approx}kT$$

Hence

$$D_{range} \approx \frac{A_{12}R}{3kT}$$

For values of *T*=300K, *R*=10 nm and *A~12~*=10^-19^J, ***D~range\ ~*\~
10R = 100 nm**

This is significantly longer range than the interaction between
individual atoms/molecules (\~0.3nm).

The potential for extended bodies depends on a much lower power of R
usually 1/R^2^ or 1/R^3^ depending on geometry, whereas for individual
molecules it is 1/R^6^. This is why dispersion forces are so important
because in material bodies when we add up the individual interactions we
find the range over which they are not disrupted by thermal interactions
is much longer.

### The magnitude of forces between macroscopic bodies {#the-magnitude-of-forces-between-macroscopic-bodies .H3}

We can also calculate the magnitude of the forces exerted on macroscopic
bodies due to dispersion forces. Sticking with the sphere and surface we
have

$$F(D) = \mathbf{-}\frac{dU}{dD}\mathbf{= -}\frac{A_{12}R}{3D^{2}}$$

If a nanoparticle has *R*=10 nm, *A~12~*=10^-19^J

When D=100 nm, F= 3 x 10^-14^ N \~ 0.03 pN

When D=10 nm, F= 3 x10^-12^ N \~ 3 pN

But can we measure forces this small? The answer is yes, but we will
come to this soon.

We can also calculate the force between a perfectly flat slab and a
semi-infinite solid. Recall that the force is given by

$$F(D) = \mathbf{-}\frac{A_{12}S}{6\pi D^{3}}$$

If the area of the slab is S=10^-4^ m^2^ (1cm^2^) and A~12~ = 10^-19^J.
What is the force between the slab and the surface at a separation of
0.3 nm?

The answer is \~20,000 Newtons, This is a very large force!

### Summary of key concepts {#summary-of-key-concepts-1 .H3}

![fluctuation2dipoles](media/image47.jpeg){width="2.2527777777777778in"
height="1.0611111111111111in"}**Dispersion interactions** arise due to
instantaneous dipole fluctuations and the dipoles these induce in
neighbouring atoms/molecules

**The potential energy due to attractive dispersion interactions**
between atoms and molecules has the form\
$$U(x) = - \frac{\alpha(qd)^{2}}{\left( 2\pi\varepsilon\varepsilon_{0} \right)^{2}}\frac{1}{x^{6}}\mathbf{= -}\frac{C}{x^{6}}$$

**Range of dispersion forces** between individual atoms is \~ 0.3 nm

The **total interaction** **(dispersion + hard sphere repulsion)**
between neutral atoms and molecules can be described using a '6-12'
Lennard-Jones potential of the form

$$U(x) = 4\gamma\left\lbrack \left( \frac{\sigma}{x} \right)^{12} - \left( \frac{\sigma}{x} \right)^{6} \right\rbrack$$

**Dispersion interactions between macroscopic bodies** occur over
significantly longer ranges than for isolated atoms/molecules

We can derive expressions for the dispersion interaction energy and
forces between macroscopic objects.

**Dispersion Interaction energy between a flat slab of area, *S*, and a
semi-infinite solid**

$$U(D) = \mathbf{-}\frac{n_{1}n_{2}\pi CS}{12D^{2}}\mathbf{= -}\frac{A_{12}S}{12\pi D^{2}}$$

**Dispersion Interaction energy between a sphere of radius, *R,* and a
semi-infinite solid**

$$U(D) = \mathbf{-}\frac{n_{1}n_{2}\pi^{2}CR}{3D}\mathbf{= -}\frac{A_{12}R}{3D}$$

**Dispersion force between a flat slab of area, *S*, and a semi-infinite
solid**

$$F(D) = \mathbf{-}\frac{dU}{dD}\mathbf{= -}\frac{A_{12}S}{6\pi D^{3}}$$

**Dispersion force between a sphere of radius, *R,* and a semi-infinite
solid**

$$F(D) = \mathbf{-}\frac{dU}{dD}\mathbf{= -}\frac{A_{12}R}{3D^{2}}$$

The strength of the dispersion interaction can be quantified in terms of
the **Hamaker constant *A***

*Dispersion forces on nanoscale objects can be on the pN to nN scales*

## 6. Water, Hydrogen Bonds & the Hydrophobic Interaction {#water-hydrogen-bonds-the-hydrophobic-interaction .H2}

In this chapter we will study two interactions that deserve special
mention in their own right. These are **hydrogen bonding** interactions
and the **hydrophobic interaction**. These are both extremely important
interactions in biology and as we will see in this and future chapters,
they are responsible for helping to maintain the structure of proteins
and other biomacromolecules as well as the structure of cell membranes.
However, before we begin to discuss these interactions it is worthwhile
considering the properties of the solvent in which these interactions
are usually most prevalent...water!

### Properties of Water {#properties-of-water .H3}

Water is arguably the most important liquid on earth. All biological
organisms have a high water content and need a relative abundance of it
to survive.

Nanoscience also exploits the dielectric properties of water to help
stabilise particles and surfaces in solution (via electrostatic
colloidal interactions which we will cover later on in this course).

Although to us, water may seem like a typical liquid, this is far from
the case. When compared to other simple low molecular weight liquids it
has high melting and boiling points. It also has a high latent heat of
vaporisation and surface energy when compared to other liquids. These
properties all point to the fact that interactions other than simple
dispersion interactions are present in water.

![polarbonds.jpg](media/image48.jpeg){width="3.517361111111111in"
height="2.129166666666667in"}These properties are due to the special
nature of the interactions between water molecules.

If we consider atoms such as oxygen (O), nitrogen (N), fluorine (F) and
chlorine (Cl) we find that they are highly electronegative (they tend to
pull electrons towards themselves).

This has the effect of making covalent bonds with these atoms quite
polar. They are therefore **permanent dipoles.**

Bonds between these atoms and hydrogen tend to have a greater polarity.
Interactions between dipoles on different molecules are called **dipolar
interactions**. When these dipoles are formed by hydrogen atoms
connected to electronegative atoms they are referred to as **hydrogen
bonds.** Hydrogen bonding is present in water and is responsible for
determining many of its properties.

Note: The presence of electronegative atoms will tend to create dipoles
on a molecule. However, if the arrangements of the bonds are such that
all the dipole moments cancel out there will be no net dipole moment on
the molecule and it will be apolar. In the diagram above HCl, NH~3~ and
CH~3~Cl have dipole moments that do not cancel out and are thus polar
molecules. However, although both BF~3~ and CCl~4~ have polar bonds in
them, the symmetry in the distribution of these bonds means that the net
dipole moment is zero and they are apolar.

**How strong are Hydrogen bonds?**

The energies associated with individual **H-bonds** are typically

10-40 kJmol^-1^ (0.1 to 0.4 eV)

Comparing this with the energies associated with other bonds we have

**Metallic and Covalent Bonds** \~ 500 kJmol^-1^ (5 eV)

**Van der Waals (dispersion forces) bonds** \~ 1 kJmol^-1^ (10 meV)

They are harder to overcome than simple dispersion interactions and are
relatively stable at room temperature. The temperature controls whether
these bonds break apart. If the temperature drops below T=0°C thermal
fluctuations struggle to overcome the strength of the bond. As the
Temperature climbs to T=100°C thermal fluctuations have an increasing
probability of overcoming the bond to enable the molecules to move
apart.

### The structure of ice {#the-structure-of-ice .H3}

The location of hydrogen bonds on molecules infers greater specificity
than simple dispersion interactions (i.e. dipoles will only interact
electrostatically with dipoles and charges on other molecules), but it
also introduces some directionality to the bonds. Dispersion forces on
the other hand act between all molecules and tend to be indiscriminate
in the directions in which they act (i.e. they have spherical symmetry).

![waterandice.jpg](media/image49.jpeg){width="3.7666666666666666in"
height="2.8930555555555557in"}The **directional nature of hydrogen bonds
in water** causes water molecules to pack into an open tetrahedral
structure when it forms ice. When water crystallises, the average number
of nearest neighbour molecules decreases from \~5 in liquid to 4 in ice
(resulting in a lower density) as the structure becomes more open.

This is unusual as crystalline solids are usually denser than the liquid
because atoms/molecules become more closely spaced in the solid state.

### The structure of water {#the-structure-of-water .H3}

![722px-Liquid_water_hydrogen_bond.png](media/image50.png){width="2.3618055555555557in"
height="1.9555555555555555in"}At low (\~ room or body) temperature, the
polar nature of the interactions between water molecules causes liquid
water to retain some of this tetrahedral structure.

The hydrogen bonds are still present, but the molecules are more mobile.
The interactions between H-bonds are dipole-dipole interactions.

### Summary of properties of H-Bonds  {#summary-of-properties-of-h-bonds .H3}

![Quadruple_Hydrogen_Bond.jpg](media/image51.jpeg){width="1.3763888888888889in"
height="1.1159722222222221in"}![Carboxylic_acid_dimers_Hbond.png](media/image52.png){width="2.504861111111111in"
height="1.1548611111111111in"}H-bonds are dipole-dipole interactions
between specific functional groups. As such they have some
directionality

They have energies of \~ 4-16 k~B~T~room~ (dispersion energies \~ 1
k~B~T~room~ )

This makes them 'sticky' and more stable than simple dispersion forces
but they can also be disrupted by thermal motion of the molecules

### Hydrogen bonding in nanoscience {#hydrogen-bonding-in-nanoscience .H3}

The above properties are highly desirable when trying to form networks
of molecules that will self-assemble into large ordered structures.
Directionality and stickiness are clearly very important for helping to
build a structure of any kind. Without stickiness, the structure would
not hold together and in the absence of directionality we would have no
control over how the molecules would stick together i.e. we would end up
with a horrible, blobby, amorphous lump of molecules. However, an
equally important property which makes hydrogen bonds particularly
useful for creating self-assembling structures is the fact that they are
relatively weak (compared to interactions such as covalent bonds). This
means that they can be occasionally broken by thermal motion of the
molecules. The thermal motion of the molecules allows bonds to break and
reform in such a way that the system find its most stable structure and
does not get trapped in other less energetically favourable states
because bonds cannot be broken again.

Molecules that form many H-bonds with neighbours have higher
dissociation energies and are thus more sticky than molecules which form
only a few of these bonds. Varying the number of H-bonds on a molecule
can therefore be used to increase or decrease the stability of the
structures that they form; Moreover, if the locations of the H-Bonds are
carefully designed into the molecules, the specificity of the
interactions between them can be increased and greater control can be
obtained over the structures that they will form.

![A picture containing diagram Description automatically
generated](media/image53.png){width="3.151388888888889in"
height="3.839583333333333in"}If the molecules are designed carefully,
the directionality of H-bonds can be used to form supramolecular
aggregates that self-assemble in solution or on a surface. A nice
example of this is the case of melamine and a molecule called PTCDI (see
figure on the right). Each PTCDI molecule is capable of forming three
specific hydrogen bonds with a melamine molecule. However, melamine can
form a total of nine of these H-bonds with PTCDI, meaning that each
melamine molecule can be connected to three PTCDI molecules. As result,
when these molecules are mixed in the presence of a flat
(noninteracting) surface, they tend to form large areas of a hexagonal
lattice, where the vertices and edges of the hexagons are made of
melamine and PTCDI molecules respectively.

### Hydrogen bonding in nature {#hydrogen-bonding-in-nature .H3}

![A picture containing arrow Description automatically
generated](media/image54.png){width="4.719444444444444in"
height="2.5027777777777778in"}Biological molecules also exploit the
directionality of H-bond formation to produce rigid, structural elements
that give these large molecules a well-defined shape. For example,
proteins use hydrogen bonds to create well-defined structural elements
such as helical structures and folded chain structures called
beta-sheets. DNA also uses the specificity of hydrogen bonding between
complimentary base pairs to produce its characteristic double helix
structure.

### Hydrophobic interactions {#hydrophobic-interactions .H3}

*The hydrophobic effect is a difficult subject as it logically fits with
two sections of this course. Here we give an explanation of the effect
but we will revisit the topic later ("Entropic forces"). If you find the
discussion of entropy initially confusing this is understandable.
However, a more detailed explanation of this aspect is included later.*

![clathratecagewithmethane.gif](media/image55.png){width="1.7840277777777778in"
height="1.757638888888889in"}When a nonpolar molecule comes into contact
with polar liquids such as water it can only interact via dispersion
forces (\~0.4 k~B~T~room~). These are much weaker than the hydrogen
bonds that water prefers to form (\~4-16 k~B~T~room~).

As a result of these less favourable interactions, water molecules will
tend to reorient themselves near non-polar molecules to form a more
ordered structure which maximises H-bonding called a Clathrate cage (see
image on right showing a methane molecule surrounded by water
molecules).

This increase in the local ordering of the molecules causes a reduction
in the entropy of the water surrounding the non-polar molecules. There
is a large entropic energy penalty (equivalent to \~10-30 kJmol^-1^ or
approx 4-12 kT at room temperature) associated with increasing the local
order (decreasing disorder) of water molecules around a nonpolar
molecule. Since this entropic penalty is proportional to the area of
contact between the nonpolar molecule and the water minimising this area
will be favourable![A picture containing icon Description automatically
generated](media/image56.png){width="2.0881944444444445in"
height="2.4930555555555554in"}. For this reason, nonpolar molecules will
have a strong tendency to cluster together in water, to reduce the total
area of the nonpolar/water interface. This is the physical origin of the
**hydrophobic effect.**

Two droplets of a nonpolar liquid in water will experience an effective
interaction due to the need to increase the entropy (decrease the order)
of surrounding water molecules. They can satisfy this criteria by
sticking together and reducing their total surface area.

**Note: The hydrophobic effect is not the result of a direct interaction
between nonpolar molecules. It occurs as a consequence of the need to
maximise the entropy of surrounding water molecules**

There is still no satisfactory theory to explain the details of the
hydrophobic interaction. This is because the interaction between two
surfaces involves many layers of intervening molecules.

Measurements show that the interaction energy, *U,* decays exponentially
with the separation between surfaces

$$U = - 2\gamma_{1}S\exp\left( - \frac{D}{\lambda_{0}} \right)$$

**w**here γ~1~ is the interfacial energy with water, S, is the
interfacial area and λ~o~ is the range of the interaction

λ~o~ \~1-2nm

### The hydrophobic force {#the-hydrophobic-force .H3}

![A picture containing application Description automatically
generated](media/image57.png){width="3.4652777777777777in"
height="1.9020833333333333in"}The hydrophobic force between two flat
surfaces with a separation D is given by

$$F = - \frac{dU}{dD} = - \frac{2\gamma_{1}S}{\lambda_{0}}\exp\left( - \frac{D}{\lambda_{0}} \right)$$

where γ~1~ is the interfacial energy with water, S, is the interfacial
area and λ~o~ is the range of the interaction. λ~o~ \~1-2 nm

### Hydrophobic interactions in nature {#hydrophobic-interactions-in-nature .H3}

![insulin folded
unfolded.bmp](media/image58.png){width="2.2840277777777778in"
height="1.7118055555555556in"}![200px-Phospholipids_aqueous_solution_structures_svg.png](media/image59.png){width="1.6402777777777777in"
height="2.0215277777777776in"}The hydrophobic interaction is also used
by protein molecules to ensure that the molecules fold up in a specific
way. Parts of the protein that are required to be in the centre of the
molecule are hydrophobic, while those that need to be on the outside of
the molecule are hydrophilic. When these molecules are placed in water,
they 'fold' up in such a way that the hydrophilic parts are in contact
with water while the hydrophobic parts cluster together in the centre of
the folded structure. When combined with the hydrogen bonded structures
mentioned above, these interactions lead to the formation of highly
specific arrangements of the different structural elements in the
protein molecules. This is important because the arrangement of
structures such as beta-sheets and alpha-helices control the biological
function of these large molecules.

As we will see later, the hydrophobic force is also important in the
formation of biological (cell) membranes and in the self-assembly of
surfactant micelles. The latter structures have numerous applications in
nanotechnology.

## 7. Surface vs Bulk {#surface-vs-bulk .H2}

### ![](media/image60.png){width="1.7458333333333333in" height="2.2222222222222223in"}Cohesive energy of bulk atoms and surface atoms {#cohesive-energy-of-bulk-atoms-and-surface-atoms .H3}

In the bulk of a material, atoms and molecules are surrounded by
*N~Bulk~* nearest neighbours.

If each interaction with the central atom/molecule has an energy, *-u,*
the total interaction energy becomes

*U~Bulk~ = -N~Bulk~u*

When we create a surface in material and expose it to vacuum each
surface atom/molecule has fewer nearest neighbours

![solidsurfaceatomneighbours](media/image61.jpeg){width="1.3173611111111112in"
height="1.9520833333333334in"}*N~surf~ \< N~Bulk~*

The interaction energy per atom/molecule is then

*U~surf~ = -N~surf~u*

There is therefore an excess amount of energy

*∆U = U~surf~* -*U~Bulk~* *= (N~Bulk~ - N~surf~ ) u*

associated with each surface atom/molecule. Since this is positive it is
unfavourable.

![solid](media/image62.jpeg){width="0.9194444444444444in"
height="1.3618055555555555in"}![solid](media/image62.jpeg){width="0.9194444444444444in"
height="1.3618055555555555in"}**Surface energy** is the excess energy
required per unit area to create a surface in a vacuum

The energy required to create two new surfaces in a material, each
having area *S* is

$$W = 2\gamma S$$

where *γ*  is the surface energy of the material in Jm^-2^.

### ![](media/image63.png){width="2.45625in" height="1.9916666666666667in"}Calculating the surface energy of simple materials from inter-surface potentials {#calculating-the-surface-energy-of-simple-materials-from-inter-surface-potentials .H3}

The surface energy of a material can also be thought of as the energy
required to separate two surfaces from their inter-atomic/molecular
distance, D~o~, and to remove them to infinity.

In lectures we showed that the potential energy due to dispersion
interactions between two surfaces, *U,* is given by

$U = - \frac{AS}{12\pi D_{0}^{2}}$

where *A* is the Hamaker constant (J) and *S* is the area of the
surfaces (m^2^)

This is also the energy required to separate the two surfaces from a
separation D~o~ to infinity. We would expect therefore that the surface
energy should be equal to half this potential energy (as there are two
surfaces) per unit area.

This gives:

$
$

$$
{\gamma = - \frac{U}{2S} = \frac{A}{24\pi D_{0}^{2}}}$$

**Do calculations agree with experiments?**

![](media/image64.png){width="5.157185039370079in"
height="2.8858191163604547in"}

### Work of Adhesion {#work-of-adhesion .H3}

The energy required per unit area to separate two surfaces of materials
1 and 2 in a third medium (medium 3) is called the *work of adhesion
(W)*.

It is the energy required to break the interface between two materials
and form two new interfaces.

$$W = \underset{creation\ of\ new\ surfaces}{\overset{\gamma_{13} + \gamma_{23}}{︸}} - \underset{breaking\ of\ initial\ bonds}{\overset{\gamma_{12}}{︸}}$$

**Interfacial energy** is the excess energy per unit area required to
create an interface between two different materials.

![bluesolid](media/image65.jpeg){width="1.04375in"
height="1.5472222222222223in"}![solid](media/image66.jpeg){width="1.1083333333333334in"
height="1.6423611111111112in"}![bluesolid](media/image67.jpeg){width="1.0902777777777777in"
height="1.617361111111111in"}![solid](media/image68.jpeg){width="1.1298611111111112in"
height="1.675in"}

The interfacial energy between materials 1 and 2 is represented by
*γ~12~*

### Surface and interfacial tension {#surface-and-interfacial-tension .H3}

Surface/interfacial tension is the force required per unit length to
extend a surface/interface (measured in Nm^-1^). This is actually the
same thing as the surface energy. Consider:

![](media/image69.png){width="3.698611111111111in"
height="1.9215277777777777in"}The energy (dU) required to increase the
area of the liquid surface in the diagram by a small amount Ldx is

$$dU = \gamma Ldx$$

The magnitude of the force exerted on the barrier is therefore

$$T = - F = \frac{dU}{dx} = \gamma L$$

So $\gamma = T/l$

**So surface energy γ is also the force acting per unit length at a
liquid interface (also called surface tension). Similarly, interfacial
energy and interfacial tension are the same quantity**

### ![](media/image70.png){width="2.408333333333333in" height="2.3305555555555557in"}Why is a suspended droplet spherical? {#why-is-a-suspended-droplet-spherical .H3}

A sphere has the minimum surface area for any given volume of fluid. Any
shape other than a sphere will therefore result in an increased surface
area dA and a consequent increase in the free energy dG = γ~12~dA.
Alternatively one could think of this in terms of the surface tension
which pulls inwards equally in all directions leading to a spherical
shape.

### Wetting interactions and contact angles {#wetting-interactions-and-contact-angles .H3}

![simplecontactangle](media/image71.jpeg){width="2.2944444444444443in"
height="1.176388888888889in"}If a droplet is placed on a surface the
shape is more complicated. Surface and interfacial energies determine
how macroscopic liquid droplets deform when they adhere to a surface

Partially wetting films (S \< 0)

![](media/image72.emf)

S = γ~vs~ -- γ~Ls~ - γ~vL~

Wetting film (S \> 0)

![contactline](media/image73.jpeg){width="2.861111111111111in"
height="1.4097222222222223in"}The contact angle made between a droplet
and a surface is determined by a subtle balance of the interfacial
energies/tensions.

### Cohesive v Adhesive Forces {#cohesive-v-adhesive-forces .H3}

The angle a liquid makes with a surface is controlled by a balance
between the cohesive and adhesive forces.

"Cohesive" -- interactions with other molecules of the same type

"Adhesive" -- interactions with other molecules of a different material
or liquid

If a surface has a small / large contact angle with water then it is
known as "hydrophilic" / "hydrophobic". Small and large are relative
terms used to compare different surfaces but usually a hydrophobic
surface would have a contact angle \~ 90˚.

### Superhydrophobicity {#superhydrophobicity .H3}

Under certain situations if a surface contains microstructures it is
possible to achieve contact angles as high or greater than 160˚. This is
due to the fact that only a small portion of the droplet actually
touches the surface. Under these circumstances it is possible for the
droplet to simply roll off the surface with even a small angle of
inclination. These structures occur naturally (eg the Lotus Leaf) but
are also especially manufactured for various applications.

![superhydrophobiccassieBaxter.jpg](media/image74.jpeg){width="3.802412510936133in"
height="2.5689074803149605in"}

Voids filled with air

### ![solid](media/image75.jpeg){width="1.4902777777777778in" height="1.0in"}Summary of key concepts {#solidsummary-of-key-concepts .H3}

> Surface/Interfacial Energy is the energy per unit area associated with
> the creation of a surface/interface (Jm^-2^)
>
> ![bluesolid](media/image76.jpeg){width="1.4902777777777778in"
> height="1.0in"} Surface tension (Nm^-1^) = Surface energy (Jm^-2^)
>
> Surface energies can be calculated using the latent heat of
> vaporisation of a material or from the inter-atomic/molecular
> potentials
>
> $$\gamma = \frac{A}{24\pi D_{0}^{2}}$$
>
> A subtle balance of interfacial energies determines the adhesive
> properties of simple materials and the wetting properties of a liquid.

## 8. Capillary Forces {#capillary-forces .H2}

### Pressure difference across a liquid interface {#pressure-difference-across-a-liquid-interface .H3}

What happens if the surface between two liquids becomes curved?
Consider, the water-air interface of some water in a tube.

In the last lecture we showed that there is an energy cost associated
with increasing the area of a surface. A curved surface has a larger
area than a flat one.

![curvedliquidelement](media/image79.jpeg){width="1.9909722222222221in"
height="2.5368055555555555in"}To study this question in more detail, we
will use the principal of virtual work. That is we will ask the
question, how much work would we need to do to change the curvature of
the liquid interface? This work must then be equal in magnitude to the
potential energy stored in the curved interface. From this information
we will be able to determine the magnitude of the forces or the pressure
(force per unit area) acting at the interface.

We start by considering a curved liquid/air interface which has two
principal radii of curvature, R~1~ and R~2~, (see diagram on right).

![flatteningofliquidsurface](media/image80.jpeg){width="2.6083333333333334in"
height="2.575in"}

There is a pressure difference across a curved liquid interface which
acts to try to reduce the area of the interface. This is called the
**Capillary Pressure**

$$\Delta P = P_{1} - P_{2} = \gamma\left( \frac{1}{R_{1}} + \frac{1}{R_{2}} \right)$$

where γ is surface energy/tension (Jm^-2^)

*R~1~* and *R~2~* are principal radii of curvature in two orthogonal
(perpendicular) directions

### ![capillaryinliquidbath](media/image81.jpeg){width="1.9743055555555555in" height="2.28125in"}Capillary Rise {#capillaryinliquidbathcapillary-rise .H3}

![liquidcolumn](media/image82.jpeg){width="0.23541666666666666in"
height="1.0013888888888889in"}When a fine capillary is placed inside a
liquid, a curved liquid meniscus forms. The resulting pressure drop
across the interface causes the fluid to be drawn up inside the
capillary. This is phenomena is referred to as **capillary rise** and
can be observed routinely in a laboratory.

The height of fluid (*h*) in a capillary of radius, *R,* is determined
by **balancing the capillary pressure drop across the meniscus with the
pressure required to draw the fluid up the capillary.**

For a fluid of density, ρ, and surface tension, γ, 

$$h = \frac{2\gamma cos\theta}{\rho gR}$$

### ![curvedliquidelement](media/image83.jpeg){width="1.85625in" height="2.359722222222222in"}Summary of key concepts {#curvedliquidelementsummary-of-key-concepts .H3}

Capillary pressure due to a curved liquid interface

$$P = \gamma\left( \frac{1}{R_{1}} + \frac{1}{R_{2}} \right)$$

Capillary pressure is responsible for the phenomenon of capillary rise

$$h = \frac{2\gamma cos\theta}{\rho gR}$$

## 9. Nanoscale Force Measurement Techniques -- AFM {#nanoscale-force-measurement-techniques-afm .H2}

### Forces at the Nanoscale {#forces-at-the-nanoscale .H3}

Forces between nanoscale objects typically occur in the range 1pN-1nN
and can be difficult to measure.

To measure these forces we ideally require a measurement system where
the change in applied force gives a linear response in the measurement
device (although this is not necessary).

In this chapter we will study experimental techniques that can be used
to measure nanoscale forces directly. The first of these techniques is
Atomic Force Microscopy

### Atomic Force Microscopy (AFM) {#atomic-force-microscopy-afm .H3}

In the first year 'Frontiers in Physics' module, you considered how
atomic force microscopy can be used to image the surface of a sample.
There are two main imaging modes in AFM:

### ![](media/image84.png){width="2.4159722222222224in" height="1.3354166666666667in"}Contact mode {#contact-mode .H3}

A sharp tip is mounted on a cantilever and brought into contact with the
surface to be studied. As the tip is dragged along the surface, the
cantilever deflects. If we track the position of the cantilever we can
build up an image of surface as the tip moves along. The contact between
tip and sample can be quite destructive, so this mode of imaging is
usually reserved for hard samples.

### Tapping mode {#tapping-mode .H3}

![](media/image85.png){width="1.5694444444444444in"
height="1.5604166666666666in"}A tip mounted on a cantilever is
oscillated at its resonant frequency and brought close to a surface. The
tip-sample interaction causes the resonant frequency of the cantilever
to shift by an amount which depends upon the tip-sample separation and
the local gradient of the force. If we move the tip across the surface
and vary the tip-sample separation in such a way that the resonant
frequency remains constant, we can build up images of constant force
gradient. For a uniform, chemically homogeneous sample this corresponds
to an image of the topography (or height variations). We can thus build
up images of the surface structure in a similar way to that used in
contact mode. However, the advantage of this technique is that the tip
spends very little time in contact with the surface and is less
destructive. This technique is therefore more suitable for imaging soft
samples.

### Force Measurements using the AFM {#force-measurements-using-the-afm .H3}

AFM can also be used to measure forces. If an AFM tip is brought into
contact with a surface, the forces on the tip will cause the cantilever
on which it is mounted to deflect.

The AFM cantilever bends/deflects in response to an applied force. The
applied force is given by

> $$F = kz$$

The spring constant of the cantilever can be derived using the physics
of elastic beams and is given by

> $$k = \frac{3EI}{l^{3}}$$

where *E* is the Youngs Modulus of the cantilever (Pa), *l* is its
length and *I* is its geometric moment of inertia (m^4^).

### Detecting the deflection of the cantilever  {#detecting-the-deflection-of-the-cantilever .H3}

If small (pN - nN) forces are exerted on the cantilever, then the
displacements of the cantilever are likely to be small (pm - nm). Our
ability to detect small forces is controlled partly by the design of the
cantilever and partly by the instrumentation used to detect the
deflections of the cantilever.

The most common method of detecting cantilever deflections is to reflect
a laser beam off the back of the cantilever.

The laser light is collected using a position sensitive photodetector,
called a split photodiode, which produces an output current that varies
with the position of the laser beam on the detector. These detectors are
simple two photodiodes (PD) that are connected to a differential
amplifier in such a way that the output signal is proportional to the
difference in intensity detected by the two photodiodes. The diagram
below shows a laser spot falling on a split photodiode detector and a
bar graph showing the measured intensities at the two photodiodes.

Photodiode\
current

The advantage of using this type of detection system are

i)  these detectors are relatively inexpensive

ii) the linear deflection of the laser beam on the split photodiode
    depends upon geometry (i.e. the length of the cantilever and the
    cantilever-detector distance). This means that the detection system
    can be optimized to give the best response for a given force range
    by changing these lengths/distances.

### Interpreting the photodiode signal {#interpreting-the-photodiode-signal .H3}

![Diagram Description automatically
generated](media/image94.png){width="3.1819444444444445in"
height="1.0944444444444446in"}As mentioned above, the split photodiodes
are connected to a differential current amplifier which produces a
signal that is proportional to the difference in photocurrents generated
by the two diodes

> $$i_{signal} = i_{1} - i_{2}$$

If i~signal~ \> 0 force acts upwards

If i~signal~ \< 0 force acts downwards

The detection efficiency of the photodiodes is such that cantilever
displacements as small as 0.1 nm can be routinely detected. This means
that forces in the sub nN range can easily be measured using AFM (see
problem 6.1 above).

### Calibrating the spring constant of the cantilever {#calibrating-the-spring-constant-of-the-cantilever .H3}

In practice, it is often difficult to calculate the spring constant of a
cantilever, so it has to be calibrated prior to a measurement. Reasons
for this might include the fact that the Young's Modulus or dimensions
of the cantilever are not known with sufficient precision to calculate
the spring constant.

###  {#section .H3}

### Calibration: Thermal tuning of the cantilever  {#calibration-thermal-tuning-of-the-cantilever .H3}

This method involves measuring the natural response of the cantilever in
response to thermal motion. When the cantilever is agitated by thermal
motions of the atoms around it, it starts to vibrate. Vibrations at the
resonant frequency of the cantilever occur much more easily than
vibrations at other frequencies (which are heavily damped).

If we monitor the **displacement of the cantilever *z* obtained from the
noise signal** when the cantilever is not being driven, we obtain
something like the signal shown below

z

We can calculate the **mean square displacement of the cantilever
*\<z^2^\>*** from the data shown in the plot. We then assume that the
potential energy stored in the cantilever is comparable to the thermal
energy provided by its surroundings to give

$$\frac{1}{2}k\left\langle z^{2} \right\rangle = \frac{1}{2}k_{B}T$$

Note: the factor of ½ on the right hand side comes from equipartition
theory (more on this in Thermal Physics), but the thermal energy is
still of order k~B~T, where k~B~ is Boltzmann's constant. Rearranging
this equation gives

$$k = \frac{k_{B}T}{\left\langle z^{2} \right\rangle}$$

Hence the spring constant of the cantilever can be determined using a
knowledge of the temperature, *T*, and measurements of the mean square
displacement of the cantilever under the influence of natural thermal
vibrations.

### Force detection limits in AFM {#force-detection-limits-in-afm .H3}

Typical cantilever spring constant: 0.01-50 Nm^-1^

We can routinely measure cantilever displacements of \~ 0.1nm

We can therefore measure forces \> 10 pN with relative ease using AFM

### Force vs. distance curves {#force-vs.-distance-curves .H3}

AFM can be used to map out the strength of dispersion (and other) forces
as a function of the distance between sample and tip.

![](media/image96.png){width="1.6534722222222222in"
height="1.4020833333333333in"} ![Diagram Description automatically
generated](media/image97.png){width="2.880398075240595in"
height="2.1624846894138234in"}

### ![nmat1001-f7](media/image99.png){width="3.0527777777777776in" height="3.032638888888889in"}Protein (un)folding {#nmat1001-f7protein-unfolding .H3}

![proteinunfoldingvg5](media/image100.jpeg){width="3.0395833333333333in"
height="2.283333333333333in"}AFM is routinely used to map out the forces
associated with the folding and unfolding of individual protein
molecules

### Moving the AFM tip with nanoscale precision -- Piezo electric motors {#moving-the-afm-tip-with-nanoscale-precision-piezo-electric-motors .H3}

In order to build up images with an AFM one must scan the tip backwards
and forwards across a sample building up a 2D map of the force measured
at different points (see figure).

*Diagram illustrating how an AFM builds up an image of a sample*

In order to do this successfully one must be able to move the position
of the tip with sub-nanoscale precision. AFMs and other similar
technology accomplish this using motors based on the piezo-electric
effect.

Certain kinds of crystal are called piezo-electric crystals (e.g
quartz). These crystals become polarized when subjected to a stress /
strain.

\+

\+

\-

\-

\-

\+

\-

\-

\+

\+

\-

\-

\-

\+

E

Force

The diagram above shows how when a crystal containing equal numbers of
positive and negative elements is deformed by an external force it
results in the formation of a dipole. As a result of the dipole an
electric field is developed across the sample.

The same effect however can work in reverse. If an electric field is
applied across the sample this will deform the sample due to the forces
acting on +ve and -ve elements resulting in expansion or contraction
along one dimension.

\-

\+

\+

\-

\-

\-

\+

v

\-

\+

\+

\-

\-

\-

\+

Force

E

![Diagram Description automatically generated with medium
confidence](media/image103.jpeg){width="1.3597222222222223in"
height="1.148611111111111in"}This controlled expansion is usually small.
By stacking these crystals and electrodes it is possible to make very
precise motors capable of controlled motions well below a nanometre by
changing the applied voltage.

The changes in a piezo-electric crystal can be related by the following
equations.

$$P = \  - d\sigma + \alpha E$$

$$\varepsilon = \frac{\sigma}{Y} + dE$$

P is the polarization, d is the piezo-electric constant, α is the
polarizability of the material, E is the electric field. ɛ is the linear
strain ie change in length / original length. Y is the young's modulus.

## 10. Nanoscale Force Measurement Techniques -- Optical Tweezers {#nanoscale-force-measurement-techniques-optical-tweezers .H2}

### ![Diagram, shape Description automatically generated](media/image104.png){width="1.3791666666666667in" height="1.5673611111111112in"}Optical Tweezers {#diagram-shape-description-automatically-generatedoptical-tweezers .H3}

Optical tweezers provide a way of manipulating atoms and molecules, as
well as nano or micron scale objects. They can also be used to measure
very small forces.

These instruments work by trapping small particles in a focussed laser
beam. Once trapped, particles can be manipulated by simply steering the
laser around.

### ![A picture containing polygon Description automatically generated](media/image105.png){width="2.3465277777777778in" height="2.276388888888889in"}The wave nature of light {#a-picture-containing-polygon-description-automatically-generatedthe-wave-nature-of-light .H3}

Light is an electromagnetic wave. As it propagates through vacuum or a
medium it carries energy. The energy is stored in electric and magnetic
fields that oscillate in a direction perpendicular to the direction of
travel of the waves (more on this in your 'Classical Fields' module).

As the light travels along, the Electric field at a given time, t, and
point, x, in space will vary according to the equation

$$E = E_{0}\sin(\omega t - kx)$$

where *E~o~* is the amplitude of the wave, *ω* is its angular frequency
and *k* is called the wavenumber (*=2π/λ*, where *λ*  is the wavelength
of the light).

### Intensity {#intensity .H3}

The time averaged intensity of light, *I*, can be related to the
magnitude of the electric field, *E*, by the relationship

$$\left\langle I \right\rangle = \frac{c\varepsilon\varepsilon_{0}n}{2}\left\langle E^{2} \right\rangle$$

> in Wm^-2^

Where *c* is the speed of light (ms^-1^) and *n* is the refractive index
of the medium in which it propagates. All other constants have their
usual definitions.

Note: For a sinusoidal oscillating field, the time average value of
*\<E^2^\>* is not zero. So the intensity is not zero! In fact, it is
equal to *½ E~0~^2^*. The proof of this is left as an exercise for the
reader.

**The key point here is that intensity is proportional to the electric
field squared**

### ![Shape Description automatically generated](media/image106.png){width="1.2833333333333334in" height="2.7645833333333334in"}Optical trapping of particles {#shape-description-automatically-generatedoptical-trapping-of-particles .H3}

Small dielectric (insulating) particles experience a force when
illuminated with visible light. If a dielectric particle is placed in an
intensity gradient a force is exerted on the particle such that it will
move to a region of higher intensity.

To understand the origin of this effect we must consider the interaction
between the dielectric particles and the incident laser light radiation.

When a particle is placed in a laser beam, the electric field associated
with the incident light will cause a slight separation of charges in the
particle material and thus induce a dipole moment on the particle. This
dipole moment will then interact with the field which caused it to form.

So in one dimension the force on a dielectric particle is

$$\mathbf{F} = - \frac{dU}{dx}\mathbf{i =}\frac{2\alpha}{c\varepsilon\varepsilon_{0}n}\frac{dI}{dx}\mathbf{i}$$

Generalising this to three dimensions we obtain

$\mathbf{F} = - \frac{dU}{dx}\mathbf{i} - \frac{dU}{dy}\mathbf{j} - \frac{dU}{dz}\mathbf{k =}\frac{2\alpha}{c\varepsilon\varepsilon_{0}n}\left( \frac{dI}{dx}\mathbf{i +}\frac{dI}{dy}\mathbf{j +}\frac{dI}{dz}\mathbf{k} \right)$

So the **force always acts along the direction of increasing intensity
gradient. Particles will therefore tend to move to regions of higher
intensity.**

### ![Shape Description automatically generated with medium confidence](media/image107.png){width="2.4902777777777776in" height="3.557638888888889in"}Making a simple optical trap {#shape-description-automatically-generated-with-medium-confidencemaking-a-simple-optical-trap .H3}

We saw in the last section that dielectric particles will tend to move
to regions of higher intensity in a laser beam. How can we use this to
create a simple optical trap?

The answer to this question is extremely simple. If we consider the
**intensity profile inside a laser beam, we find that it is not uniform
across the beam, but instead it has a Gaussian shape** as we move from
the centre of the beam to the edges.

$$I = I_{0}\exp\left( - \frac{\left( x^{2} + y^{2} \right)}{2w_{0}^{2}} \right) = I_{0}\exp\left( - \frac{r^{2}}{2w_{0}^{2}} \right)$$

where *I~o~* is the intensity at the centre of the beam, *w~o\ ~*is a
measure of the beam width and r is the distance from the centre of the
beam.

![Chart, funnel chart Description automatically
generated](media/image108.png){width="1.6222222222222222in"
height="2.2430555555555554in"}**This Gaussian profile means that an
intensity gradient already exists within the laser beam and small
dielectric particles will tend to be attracted and trapped in the centre
of the beam.**

However, the problem of trapping along the axis of the laser beam (z
direction) still needs to be considered as no intensity gradient exists
for a coherent parallel beam. This difficulty can be overcome by
focussing the laser beam using a simple microscope objective lens.

When the light is focused, it creates a trap along the axis of the beam.
This is because the area of the beam decreases as it approaches the
focal plane and then increaeses after passing through it. This causes
the intensity to steadily increase and then decrease on passing through
the focal point of the lens.

The strength of the trap in the z direction can be varied by changing
the angle, θ, (see diagram on left). The larger this angle, the steeper
the intensity gradient will be along the axis of the laser beam. The
maximum gradient in intensity can be obtained by using a lens with a
high numerical aperture (NA), where NA is defined as

$$NA = n\sin\theta$$

where n is the refractive index of the ambient environment.

**Trap stiffness (Quadratic approximation to beam profile)**

![quadraticapproxtogaussian](media/image109.jpeg){width="3.7680555555555557in"
height="2.8229166666666665in"}For small displacements from the central
position we can approximate the Gaussian intensity profile of the beam
using a quadratic function

Laser Intensity

$$I = I_{0}\exp\left( - \frac{r^{2}}{2w_{0}^{2}} \right) \approx I_{0}\left( 1 - \frac{r^{2}}{2w_{0}^{2}} \right)$$

Intensity gradient

$$\frac{dI}{dr} = I_{0}\left( - \frac{r}{w_{0}^{2}} \right)$$

As we will see in the following examples, this allows us to determine
the effective spring constant (or stiffness) of the trap and to use
optical tweezers to measure forces that are exerted on trapped
particles.

For small displacements (*r\<\<w~o~*) the intensity profile can be
approximated by a quadratic form. This results in a force which is
directly proportional to the displacement of the particle within the
trap.

$F = - kr$

Where

$$k = \ \frac{2\alpha I_{0}}{c\varepsilon\varepsilon_{0}nw_{0}^{2}}$$

Hence, if we know the displacement and the trap stiffness, we can
calculate the force exerted on our trapped particle.

### Detection of particle movement {#detection-of-particle-movement .H3}

The split photodiode arrangement used in AFM can also be used to detect
deflections in optical traps. However, a quadrant photodiode is used to
detect deflections in both the x and y directions.

In the case of large particles, a shadow is cast on the quadrant
photodiode. This means that measured intensity varies as the particle
moves in the x-y plane.

For smaller particles, light scattered from the particle interferes with
light in the main beam to produce a fringe pattern on the photodiodes.
As the particle moves around, the fringe patterns move. This can also be
used to detect motion of the particle.

Quadrant photodiode

(4 photodiodes)

Shadowing (large particles)

Fringe pattern (small particles)

Laser beam

### Calibration of optical traps {#calibration-of-optical-traps .H3}

![](media/image114.png){width="2.217361111111111in"
height="1.2798611111111111in"}There are 2 main techniques used to
calibrate the spring constant or 'stiffness' of optical traps.

**Method 1)** We can measure the displacement of a particle under the
influence of known forces

$$k = \frac{F_{applied}}{x}$$

**Method 2)** We can measure the mean square displacement, \<x^2^\>, of
a trapped particle under the influence of thermal motion

$$k \approx \frac{k_{B}T}{\left\langle x^{2} \right\rangle}$$

### ![opticaltrappingDNA](media/image115.jpeg){width="2.8229166666666665in" height="3.4881944444444444in"}Force Measurements {#opticaltrappingdnaforce-measurements .H3}

It is possible to perform force measurements on e.g. single molecules.

An optical trap and a fine micropipette can be used to measure the
forces exerted by individual DNA molecules.

Small polymer beads can be tethered to the ends of the molecule and used
to manipulate it.

C. Bustamante et al., **Nature**, 421(23), 423 (2003)

### Summary of key concepts {#summary-of-key-concepts-2 .H3}

Atomic force microscopes can be used to measure forces,

$$F = kz$$

The spring constant of an AFM cantilever is determined by its material
properties and its physical dimensions

> $$k = \frac{3EI}{l^{3}}$$

A split photodiode arrangement is used to detect deflections and to
measure forces with \>10pN precision

Particles in a laser beam will experience a force that acts to pull them
to regions of higher intensity

$$\mathbf{F} = - \frac{dU}{dx}\mathbf{i =}\frac{2\alpha}{c\varepsilon\varepsilon_{0}n}\frac{dI}{dx}\mathbf{i}$$

![Shape Description automatically
generated](media/image124.png){width="1.0041666666666667in"
height="1.9993055555555554in"}

Lasers have a Gaussian beam profile, which naturally lends itself to
trapping of particles.

Trapping in three dimensions can be achieved by focussing the laser
using a microscope objective.

Trapping forces on nanoscale particles can be measured with pN
precision.

## 10. Colloidal Stability & Osmotic Pressure {#colloidal-stability-osmotic-pressure .H2}

### Colloids and nanoparticles  {#colloids-and-nanoparticles .H3}

Colloids are mixtures where small particles (\<1 μm in diameter) of one
substance are **suspended** in a second medium or **continuous phase.**
They can be made of solid particles suspended in a liquid or liquid
droplets suspended in another liquid (also called emulsions).

**They are not solutions!** The material is not completely dispersed,
but exists as discrete particles.

Colloidal interactions govern the properties of nanoscale particles and
interactions between surfaces in liquid environments. Understanding and
controlling these interactions is therefore essential in the manufacture
of nanoparticles, ferrofluids (magnetic nanoparticles) and solution
based quantum dots. These interactions are also important in mediating
the interactions between large biological molecules such as proteins and
play important role in stabilising the nano to micron scale fat droplets
in milk.

The key challenge in manufacturing nanoparticles and colloidal
dispersions is preventing the interparticle/intersurface forces from
causing the small particles from sticking together. Moreover, these
systems have a very high surface to volume ratio when compared to bulk
materials. This means that there is a large energy penalty associated
with the large surface area of these dispersed systems.

The natural tendency is for small particles to stick together or
*flocculate* to form an aggregate (more on aggregation in a later
lecture) and hence reduce their total surface area. We have already seen
that dispersion forces result in a mutual attraction between particles.
These can drive the flocculation of even very dilute systems.

### How do we stop things sticking together? {#how-do-we-stop-things-sticking-together .H3}

![](media/image125.png){width="4.847222222222222in"
height="1.8444444444444446in"}We need to introduce a short-range
repulsion force to keep particles apart and prevent them flocculating
under the action of dispersion forces. In water, this is often done by
decorating the surface of the particles with charged groups and adding a
small amount of salt.

![Sternlayer](media/image126.jpeg){width="1.425in"
height="2.167361111111111in"}When the particles are added to salt water
(or electrolyte) the dissociated salt ions cluster around the charged
particles to form a **counterion cloud.** The counterion cloud can be
thought of as having two regions. The first is the **Stern (also
sometimes referred to as the Helmholtz) layer**. This layer consists of
ions that carry the opposite charge to the surface groups on the
particle surfaces and is usually tightly bound to the surface. The
second layer is called the **diffuse double layer.** This layer consists
of a mixture of positive and negative counterions which are relatively
mobile and are distributed in such a way that the system becomes charge
neutral.

If the particles are charge neutral then there can be no net
electrostatic interaction between them. So how does decorating the
surface of particles with charged groups introduce a repulsive force
between them?

The answer to this question is that the presence of the counterions
around the particles creates an **osmotic pressure between the particle
surfaces.**

Pure water

Water with particles

Semi-permeable membrane

Flow of water

**Osmotic Pressure --** the pressure arising from spatial gradients in
the concentration of a solute. This pressure acts to restore a uniform
concentration and will cause a flow of water unless or until a
sufficient pressure acts to oppose it.

When the particles/surfaces approach **the local concentration of
counterions between them increases relative to the bulk concentration of
counterions (i.e. far away from the particles)**.

If we think of the charge neutral system of ions floating around in
between the two particle surfaces as a non interacting (ideal) gas of
ions we can use the ideal gas law to derive an expression for the
pressure exerted by the counterion clouds. However, before we proceed it
is worth mentioning that although the electrostatic potential energy of
the charged particles does not influence their interactions directly in
an electrolyte, it does determine how the counterions will be
distributed around each particle. As we will show below, this has some
influence on the local concentration of counterions and hence the
osmotic pressure exerted between the particle surfaces.

The osmotic pressure, Π, which pushes the surfaces apart and tries to
restore a uniform counterion concentration is given by

$$\Pi = \left( n_{+} + n_{-} - 2n_{0} \right)k_{B}T$$

where *n~+~* and *n~-~* are number densities of positive and negative
ions in the gap, and *n~o~* is their concentration far away from the
surfaces. Note that for an electrolyte (salt) in bulk solution (e.g.
NaCl) the concentration of positive counterions (Na^+^) is equal to that
of the negative counterions (Cl^-^).

### How do we calculate n~+~ and n~-~? {#how-do-we-calculate-n-and-n- .H3}

We have deliberately assumed that the number densities/concentrations of
positive and negative counterions in the gap between the two surfaces
will be different. This is not unreasonable if we consider our diagram
of the stern and diffuse double layers above, as we might expect an
imbalance in these concentrations to occur for charge neutrality to be
maintained.

To determine the number densities of the counterions we need to consider
the electrostatic potential energy of the counterions in solution and
how this influences their local concentration.

For an ion of charge ± ze, sitting in a spatially varying electrostatic
potential V(x), the energy, E, is simply given by

$$E = \pm zeV(x)$$

To determine how this energy influences the distribution of counterions,
we recall that the probability, p, of a particle occupying a given
energy state can be described by Boltzmann statistics (See thermal
physics notes)

$$p_{\pm} = p_{0}\exp\left( - \frac{E_{\pm}}{k_{B}T} \right)$$

In this case, the energy of the particle is determined by its position
in the potential V(x) (as described above) and the local number density
must scale with the probability associated with finding the particle
with a given energy. Hence we can simply write the number densities of
positive and negative counterions as

$$n_{\pm} = n_{0}\exp\left( - \frac{E_{\pm}}{k_{B}T} \right) = n_{0}\exp\left( \pm \frac{zeV(x)}{k_{B}T} \right)$$

Hence, our expression for the osmotic pressure becomes

$$\Pi = \left( n_{+} + n_{-} - 2n_{0} \right)k_{B}T = {2n}_{0}k_{B}T\left( \cosh\left( \frac{zeV(x)}{k_{B}T} \right) - 1 \right)$$

![](media/image127.wmf)

In the limit of small surface potentials i.e. when this reduces to

$$\Pi = n_{0}\frac{z^{2}e^{2}}{k_{B}T}\left( V(x) \right)^{2}$$

So if we know how V(x) depends on the distance away from the surface we
can calculate the osmotic pressure due to the counterions.

### ![potentialnearsurface](media/image128.jpeg){width="1.925in" height="3.113888888888889in"}What form of V(x) should we use? {#potentialnearsurfacewhat-form-of-vx-should-we-use .H3}

The true form of the electrical potential between colloids and charged
surfaces is complicated. However, a good starting point is to
approximate *V(x)* to the form expected for the potential due to an
isolated charged surface in an electrolyte.

To obtain this we must first solve the **Poisson equation** which
relates the electrostatic potential V(x) to the local charge density,
*ρ*, using the following formula.

$$\ \ \frac{- d^{2}V}{dx^{2}} = \frac{\rho}{\varepsilon\varepsilon_{0}}\ \ $$

where ε and ε~o~, are the relative permittivity of the medium in which
the counterions are dissolved (usually water) and permittivity of free
space (Fm^-1^) respectively.

### Potential near a planar/flat charged surface  {#potential-near-a-planarflat-charged-surface .H3}

The charge density associated with the counterions is simply the product
of their charge and number densities;

![](media/image127.wmf)

In the limit of small potentials, , the Poisson equation for the cloud
of counterions becomes

$$\frac{d^{2}V}{dx^{2}} = \frac{2z^{2}e^{2}n_{0}}{\varepsilon\varepsilon_{0}k_{B}T}V(x)$$

### Solution of the Poisson equation and the Debye screening length {#solution-of-the-poisson-equation-and-the-debye-screening-length .H3}

The Poisson equation for the counterion cloud is very similar to the
equation for simple harmonic motion (a=-ω^2^x) and therefore must have a
solution which consists of a sum of positive and negative exponentials.
However, we require that the potential decays to zero for infinite, x.
(If it didn't, the total energy of the counterion cloud would be
infinite!). This means that we are left with a solution which consists
of a simple negative exponential of the form

$$V(x) = V_{0}\exp( - \kappa x)$$

Where V~o~ is the surface potential (i.e. the electrostatic potential at
the surface) and κ is a decay constant such that if we insert V(x) into
the Poisson equation we obtain

$$\frac{1}{\kappa} = \left( \frac{\varepsilon\varepsilon_{0}k_{B}T}{2{n_{0}z}^{2}e^{2}} \right)^{1/2}$$

1/*κ* is the Debye screening length. **(N.B the Debye length is 1/κ not
κ!)**

It is the distance over which electrostatic interactions are screened in
an electrolyte and *V~o~* is the potential at the surface.

### Osmotic pressure between surfaces (revisited) {#osmotic-pressure-between-surfaces-revisited .H3}

Recall that the osmotic pressure due to counterions between charged
surface has the form

$$\Pi = n_{0}\frac{z^{2}e^{2}}{k_{B}T}\left( V(x) \right)^{2}$$

where

$$V(x) = V_{0}\exp( - \kappa x)$$

If we insert our solution for the potential we obtain

$$\Pi = {4n}_{0}\frac{z^{2}e^{2}V_{0}^{2}}{k_{B}T}\exp( - \kappa D)$$

where D=2x is the distance between the two surfaces.

**This expression describes the positive (repulsive) osmotic pressure
caused by the condensation of counterions in the gap between two
surfaces.**

### ![potentialneartwosurfaces](media/image129.jpeg){width="3.384027777777778in" height="2.6319444444444446in"}Total pressure between surfaces {#potentialneartwosurfacestotal-pressure-between-surfaces .H3}

The total pressure between two charged surfaces in an electrolyte is
given by summing the contributions due to repulsive osmotic pressure and
attractive dispersion forces to give

$$P_{tot} = \Pi + P_{dispersion}$$

where P~dispersion~ is the pressure due to the attractive dispersion
interactions. We have

$$P_{tot} = {4n}_{0}\frac{z^{2}e^{2}V_{0}^{2}}{k_{B}T}{\exp( - \kappa D)}^{} - \frac{A}{6\pi D^{3}}$$

where the first term is due to the osmotic pressure and the second due
to the attractive dispersion forces.

This is a simplified form of the equations derived by Derjaguin, Landau,
Verwey, Overbeek (DLVO) when formulating the DLVO theory of colloidal
stability.

The plot below shows how the dispersion pressure, the osmotic (double
layer/counterion) pressure and total pressure vary with the separation
of the surfaces.

![DLVOdispanddoublelayer](media/image130.jpg){width="5.048610017497813in"
height="3.625in"}

At short range (\<10 nm) the repulsive pressures are high until below a
critical separation of \~4 nm the pressure becomes attractive as
dispersion forces dominate. It is the large positive pressures in the
range 4-10 nm which stop the surfaces from sticking together when they
approach. However, if the surfaces are pushed together with pressures
that exceed \~4000 Pa, the surfaces will adhere to one another.

The inset shows that at long range (\>18 nm in this case) the pressure
is weakly attractive and that at a separation of \~18 nm there is no net
pressure on the surfaces. This corresponds to the equilibrium separation
of the surfaces under these conditions.

### The effects of adding electrolyte {#the-effects-of-adding-electrolyte .H3}

As more salt is added, electrostatic effects are more strongly screened
→ eventually attractive dispersion forces dominate and surfaces will
stick together. This is manifested as a reduction in the height of the
repulsive pressure 'barrier' until finally, the pressure becomes
negative for all values of the inter-surface separation, D.

![DLVOeffectsofsalt](media/image132.jpeg){width="3.9305555555555554in"
height="2.798611111111111in"}

Increasing salt concentration

### Summary of key concepts {#summary-of-key-concepts-3 .H3}

Colloidal stability is important in many areas of nanotechnology

It can be achieved by charging surfaces

**The pressure exerted on charged surfaces in an electrolyte is
determined by a balance between the osmotic pressure due to counter-ions
and the dispersion pressure .**

$$P_{tot} = {4n}_{0}\frac{z^{2}e^{2}V_{0}^{2}}{k_{B}T}{\exp( - \kappa D)}^{} - \frac{A}{6\pi D^{3}}$$

**\
**

## 11. Entropic Forces {#entropic-forces .H2}

### Colloidal Stability {#colloidal-stability .H3}

In the last lecture we discussed how colloidal particles can be
stabilized against flocculation by weakly charging the surface of the
particles. However, it is sometimes not possible to use charges to keep
particles and surfaces apart in solution. This is particularly true when
using organic solvents as the suspending medium (e.g. in ferrofluids),
as ionic solids (electrolytes) are often poorly soluble in these
solvents and thus unable to stabilise the system.

![rodonsurfacenoangle.jpg](media/image133.jpeg){width="2.4277777777777776in"
height="1.2902777777777779in"}An alternative route to stabilisation is
to use Steric (or entropic) repulsion effects between surfaces. This
stabilisation method involves decorating the surface with long molecules
(e.g. polymers). The molecules are tethered to a surface by one end and
can wave around freely in solution. As a result they have a large number
of possible orientations/**configurations** (i.e. directions in which
they can point).

When a second surface comes close to the surface that is covered with
our molecules, the number of configurations that the molecules can adopt
is reduced. This reduces the **entropy** (or measure of disorder) of the
molecules. Recall from your 'Thermal physics' module that the second law
of thermodynamics states that the 'the entropy of an isolated system can
never decrease'. This means that there is a tendency for the entropy to
increase and to be maximised in an isolated system. (We will assume for
the sake of argument that the tethered molecules represent an isolated
system).

If the entropy of the tethered molecules is reduced by bringing a second
surface into close proximity, the system will tend to resist this
reduction in entropy by generating a repulsive force. This **entropic
repulsion is the physical origin of steric forces** **between
surfaces**.

### Boltzmann form of Entropy {#boltzmann-form-of-entropy .H3}

Boltzmann derived a statistical form of the entropy of a system, *S*,
such that:

$$S = k_{B}\ln w$$

where *W* is the number of available (micro) states corresponding to a
given macrostate and *k~B~* is Boltzmann's constant (JK^-1^ ).

In this case...

Macrostate → molecule tethered to the surface

Microstate → a single orientation of the molecule

### Calculation: the entropy of a tethered rod {#calculation-the-entropy-of-a-tethered-rod .H3}

Suppose we treat the molecule as a rigid rod with length, *l*, and cross
sectional area, *a*. If we allow the rod to point in any direction it
can sweep out half a sphere with a total area, A~1~

1.  Consider the free rod (ie when no upper surface is present)

    a.  Calculate the Area of the surface it can move over

    b.  Work out the number of microstates W~1~=A~1~/a

    c.  Use the Boltzmann formula to calculate the entropy S~1~

2.  Repeat the calculation for the rod with upper surface at D \< l

    a.  Calculate the Area of the surface A~2~ it can move over

        i.  ![](media/image135.png){width="2.109722222222222in"
            height="1.3909722222222223in"}Work out an elemental area in
            terms of x

        ii. Substitute for x in tems of l and cosθ

        iii. Integrate between θ~min~ and θ~max~

    b.  Work the number of microstates W~2~=A~2~/a

    c.  Use the Boltzmann formula to calculate the entropy S~2~

3.  The important quantity is the change in entropy with separation D of
    the two surfaces

    a.  ΔS = S~2~ -- S~1~

For the case considered in the lecture where θ~min~ = 0 and θ~max~ is
defined by the distance of the upper plate

$$\mathrm{\Delta}S = \ k_{B}\ln\frac{D}{l}$$

### Entropic repulsion force {#entropic-repulsion-force .H3}

![](media/image136.wmf)We can extract a force if we know how the
entropic contribution to the interaction energy , U, depends upon
separation D. As

To determine the energy change associated with our change in entropy we
must determine the change in free energy associated with bringing the
two surfaces together. The change in the Gibbs free energy, U, (see
'Thermal physics' notes) of the system at constant temperature is given
by:

> $\mathrm{\Delta}U = \ \mathrm{\Delta}H - T\mathrm{\Delta}S$

The first term, ∆H is the change in enthalpy. Essentially this
encompasses all the interactions we have met thus far in this course
such as the formation of bonds.

The second term TΔS is the change in energy due to entropy. A decrease
in entropy results in an increase in the free energy U. Therefore, if
there are no changes in ∆H this will result in a repulsive force.

$$F = \  - \frac{d\mathrm{\Delta}U}{dD} = \frac{- d\mathrm{\Delta}H}{dD} + \frac{Td\mathrm{\Delta}S}{dD}$$

### How does entropy result in a force? {#how-does-entropy-result-in-a-force .H3}

Whilst it is clear mathematically that entropy may result in a force, it
is helpful to understand this fundamental idea on a conceptual level. It
is often stated that entropy is a measure of disorder. This statement
whilst true needs clarifying. Entropy is actually a statement about the
number of possible equivalent configurations.

Consider the following analogy: a bedroom can be organised in many
different ways. Clothes could be strewn across the floor or folded on a
chair, the lamp could be in any number of different positions, the books
could be on the shelf or chucked on the floor. All of these different
arrangements would represent a single configuration or microstate.
However, there are many more ways in which a bedroom could be untidy
rather than tidy. In making this statement we are saying that the
different ways in which a room is messy are functionally equivalent. It
doesn't matter which way, we would still call it untidy. In terms of
Boltzmann's entropy formula we might say that an untidy bedroom has a
larger entropy than a tidy one. This is because the number of equivalent
configurations or microstates of an untidy room is larger than a tidy
room.

However, here is a key point. How does a tidy bedroom go from tidy to
untidy? The fact that there are more messy room configurations than tidy
ones by itself does not explain why a room might end up messy. In our
equation above the free energy depended on ΔS ( a statement about the
change in the number of configurations) but it also depends on
Temperature. The role of temperature is to allow the system to freely
explore all the different configurations. In the case of our room we
might say that temperature is analogous to a strong earthquake. The
earthquake enables all the items in a room to move around, creating (or
"sampling") different configurations. Now the role of entropy is
clearer. Since the earthquake causes the configurations to be sampled
randomly the final configuration is a matter of chance or probability.
Since there are many more messy configurations we expect that the room
will become messy if hit by an earthquake. The explanation depends both
on entropy ( a statement about probability) and temperature (a way of
sampling those different microstates).

Finally, consider the situation in which you are in a tidy room when an
earthquake hits. In order to keep the room tidy (to work against the
change in entropy) requires you to do a lot of work, to apply forces to
prevent things moving out of place. You need to apply forces to resist
the "entropic force" being generated.

In the microscopic world of colloidal particles, salt ions and nano-rods
tethered to surfaces interactions are comparable to the thermal energy
k~B~T. This means the temperature enables particles etc to sample
different microstates giving rise to significant entropic forces.

### The pressure between two surfaces {#the-pressure-between-two-surfaces .H3}

Earlier we calculated the entropic force produced by a single rod
tethered to a surface. In reality a surface will be covered with a large
number of rods with an average spacing.

In the case where the separation between tethering points is, d, then
the effective area occupied by one molecule is d^2^

![](media/image139.wmf)![graftingdensity.jpg](media/image140.jpeg){width="3.9277777777777776in"
height="1.4479166666666667in"}The force per unit area (Pressure) is P,
where

### ![confinedrod.jpg](media/image141.jpeg){width="1.8708333333333333in" height="1.1298611111111112in"}Summary of key concepts {#confinedrod.jpgsummary-of-key-concepts .H3}

When the motion of molecules near a surface is confined it reduces the
entropy of the system.

This gives rise to a repulsive force which acts to push surfaces apart
and oppose the entropy reduction

![](media/image142.wmf)For rod like molecules on a surface which occupy
an area *d^2^*, the pressure between surfaces at a separation, D, is
given by

### Depletion Forces {#depletion-forces .H3}

Real systems can often contain multiple components of different sizes,
think for example of a biological cell with many different sized
proteins or a paint where there are both small pigment particles and
large latex particles. Even in the absence of specific energetic
interactions between these components the large particles / surfaces can
experience an attractive force due to the entropy of the smaller
particles.

![](media/image143.png){width="5.9883727034120735in"
height="1.8528127734033246in"}

*The motion of a large particle is filmed as it diffuses inside a
boundary. In (b) only the large particle is inside the boundary. The
probability of finding the particle at a particular location is
indicated by the colour map. The probability is uniform across the
entire volume. In (c) lots of small particles (which are not visible)
are also added to the volume. Now the large particle spends nearly all
of its time trapped against the boundary. This indicates that there is
now a force keeping the large particle at the edge.* \[ Dinsmore et al
PRL 1998\]

### Excluded Volume {#excluded-volume .H3}

r

r

In a multi-component system, the motion of the small particles in a
suspension is restricted by the presence of the larger object (eg a
large particle or plate). In addition to the volume taken up by the
large object itself the small particle centres are also "excluded" from
a thin layer around the object related to their own size. The entire
volume (volume of the large object and the layer around it) is known as
the excluded volume.

**Key insight:** *Small particles are excluded / depleted from a volume
around any larger object in solution.*

### Depletion Force between 2 plates {#depletion-force-between-2-plates .H3}

Two large objects in a suspension of smaller particles can experience an
attractive force if they come too close together. This force arises from
the change in entropy of the [small particles]{.underline} arising from
the change in excluded volume around the [larger objects]{.underline} as
they come close together.

**Calculation: depletion force for 2 flat plates in suspension of small
spheres**

1.  Calculate the excluded volume of the plates when they are far apart
    (V~excl_1~). This is related to the geometry of the object **and**
    the geometry of the small particle (see above)

2.  Calculate the excluded volume when the objects come close enough
    together that there excluded volumes overlap (V~excl_2~).

3.  Calculate the change in excluded volume. ΔV~excl~=V~excl_2~ -
    V~excl_1~.

*Be careful with the sign of this term, it should be negative as the
objects come closer together since the overlap region between the
objects reduces the total volume.*

The change in volume accessible to the particles ΔV~p~ increases as the
excluded volume decreases. There are therefore 2 scenarios:

D \> 2r 🡪 No change in V~excl~ since no overlap

D \< 2r 🡪
$\mathrm{\Delta}V_{p} = \  - \mathrm{\Delta}V_{excl} = (2r - D)A$

This increase in the volume accessible to the small particles, means
there are more possible configurations or microstates the closer the
large plates come together.

From our previous lecture we know that S=k~B~lnW 🡪 ΔS \> 0 as the
separation between the plates, D, decreases.

Consequently:

$$F = \frac{- d\mathrm{\Delta}U}{dD} = \ \frac{Td\mathrm{\Delta}S}{dD} < 0\ $$

This implies that if the plates are separated by a distance D \< 2r
there will be an attractive force between the plates.

Calculating the number of microstates is however tricky. We showed in
lectures (*this will not be examined*) that this problem can also be
equivalently described in terms of an osmotic pressure associated with
the small colloidal particles. This lead to a key result:

$$\mathbf{\mathrm{\Delta}U = \ }\mathbf{P}_{\mathbf{osmotic}}\mathbf{\mathrm{\Delta}}\mathbf{V}_{\mathbf{excl}}$$

### Entropic Force v Osmotic Pressure {#entropic-force-v-osmotic-pressure .H3}

The Depletion force can therefore be described in 2 different but
equivalent ways:

1.  It arises due to the increasing entropy of the small spheres due to
    the increased volume as the plates move together.

2.  It is an osmotic pressure difference acting on the plates due to the
    different concentration of small particles in between and outside
    the plates.

It is perhaps easy to get confused about whether the Osmotic pressure
results in attraction or repulsion. We have seen that for 2 charged
plates the pressure is repulsive, but for 2 plates surrounded by small
spheres it is attractive. The pressure acts to reduce the differences in
concentration. Thus in the charged plates the concentration of ions is
higher between the plates. The pressure therefore draws liquid from the
bulk into the gap, pushing the plates apart and reducing the ionic
concentration there. In this lecture the concentration of particles is
high outside the gap and zero in between. The pressure therefore pulls
water from the gap into the bulk to reduce the concentration. This in
turn pulls the plates together to compensate for the loss of water in
the gap.

### Depletion Force 2 spheres {#depletion-force-2-spheres .H3}

The depletion force between 2 large spheres in a fluid of smaller
spheres can be calculated in an analogous way to the 2 plates. The
problem is the same, since we must work out the change in excluded
volume between the two spheres as they come close together. However, the
different geometry makes the calculation a little trickier.

R

D

The volume of overlap between 2 spheres is twice the volume of a
spherical cap.

R'

h

$V_{cap} = \frac{\pi}{3}h^{2}\left( 3R^{'} - h \right)$

> h = R' -- D/2 and R' = R + r

### Hydrophobic Effect revisited {#hydrophobic-effect-revisited .H3}

In section 6 it was highlighted that the hydrophobic effect was a
difficult subject since it fitted with different sections of the course.
Hydrogen bonds are permanent dipoles and hence we initially visited the
subject in section 4. However, in understanding the hydrophobic effect
we also needed to consider a principle which we have subsequently
explored, that is that Entropy can produce a force (section 11)

Now hopefully with a broader understanding of this principle we can
revisit the hydrophobic effect and show how this fits together.

![waterandice.jpg](media/image49.jpeg){width="1.125in"
height="1.9159722222222222in"}Let us consider a single water molecule
surrounded by other water molecules. The single water molecule is
composed of Oxygen and Hydrogen atoms resulting in a permanent dipole.
This permanent dipole forms because the electronegative oxygen atom
pulls the electron density in the covalent bond towards itself. This
results in a slight positive charge on the Hydrogen and slight negative
charge on the Oxygen. These charges interact with neighbouring water
molecules so that there is a "Hydrogen Bond" between the Hydrogen of one
molecule and the Oxygen of a neighbour.

The Hydrogen bonds are much more stable than dispersion interactions but
still able to be disrupted by thermal fluctuations on a reasonable
timescale. Typical Hydrogen bond energies \~ 12k~B~T when compared with
dispersion interactions \~ 2k~B~T. This means that in liquid water the
water molecules find a stable orientation for a small amount of time and
then change orientation or neighbours. Now let us think of this in terms
of the language of entropy we have been developing. Since there are lots
of orientations and lots of possible neighbours this means there are a
large number of microstates for a collection of water molecules.

![A picture containing icon Description automatically
generated](media/image56.png){width="2.0881944444444445in"
height="2.4930555555555554in"}![clathratecagewithmethane.gif](media/image55.png){width="1.7840277777777778in"
height="1.757638888888889in"}Now consider adding a single non-polar
molecule to the collection of water molecules. Water molecules cannot
form hydrogen bond interactions with this molecule and so to minimise
the number of lost hydrogen bonds the water molecules must arrange
themselves in a very specific structure -- "The clathrate cage". How
many equivalent configurations are now accessible to these water
molecules? Due to the restrictions imposed by the presence of this
non-polar molecule the water molecules cannot be arranged in lots of
different orientations and they are confined to a relatively small
number of nearest neighbours. In other words the number of microstates
is much smaller than before.

If we add a second non-polar molecule to the water this likewise results
in a load of new water molecules reducing their entropy. We should be
able to see that for each bit of surface area of each non-polar molecule
a number of water molecules have a reduced number of configurations. If
the two non-polar molecules come close enough together the number of
water molecules affected starts to reduce. So we therefore have some
water molecules whose orientations and mobility is no longer restricted
increasing their entropy. This is approximately proportional to the
accessible surface area of the two non-polar molecules.

Summarising: when the two non-polar molecules are separate:

-   large exposed surface area

-   restricts number of configurations of large number of water
    molecules

-   small number of microstates

-   small entropy

As they come together:

-   reduced exposed surface area

-   less water molecules have restricted configurations

-   slightly larger number of microstates

-   increased entropy

Earlier we derived the expression:

$$F = T\frac{dS}{dD}$$

which relates the force to the change in entropy with distance. In this
case as we reduce the distance between the non-polar molecules the
entropy of the system of water molecules surrounding them increases. If
ΔS \> 0 and ΔD \< 0 then F \< 0. Ie the change in entropy of the water
molecule results in an effective attractive force between the two
non-polar molecules.

### An additional clarification which will not be examined: {#an-additional-clarification-which-will-not-be-examined .H3}

Our picture of the clathrate cage is somewhat simplistic. It implies
that only the layer of water molecules in direct contact with the
non-polar molecule is affected and hence contributes to the change in
entropy. This is not true. A number of layers of water molecules will
have a restricted set of configurations. To understand why consider how
the second layer of water molecules interacts with the first layer.
Since the first layer cannot easily rotate, the second layer must form a
certain relative angle to be able to form hydrogen bonds. This effect
gradually reduces as one moves further and further away due to
fluctuations. This is why there is still a hydrophobic effect between
two plates which are more than two water molecules apart. As the plates
move closer together the number of molecules affected reduces (the
entropy of the entire system goes up) since the available volume and
hence number of water molecules in the gap also decreases.

## 12. Aggregation & Self-assembly {#aggregation-self-assembly .H2}

**Aggregation** We have seen that particles and surfaces can interact
via many different physical interactions (e.g. dispersion, double layer
and steric forces). The subtle balance between these interactions
determines whether the particles/surfaces will remain separated in
solution.

![blukphaseseparation.jpg](media/image147.jpeg){width="2.85625in"
height="1.4284722222222221in"}When the interactions between particles
favour the attraction of particles, they will tend to aggregate. If
these interactions become really strong, they will eventually drive
phase separation in the system and the components will unmix forming
effectively infinite aggregates.

### Why do aggregates form?  {#why-do-aggregates-form .H3}

When the energy per particle/molecule associated with a
particle/molecule inside an aggregate is less than the energy of a free
molecule, then aggregates will start to form. If this average energy
becomes lower (more favourable/negative) the bigger the aggregate gets,
then the aggregate will continue to grow.

The shape of the aggregate that forms will depend upon the nature of the
interactions between individual molecules. If for example, the molecules
have highly directional interactions at opposite ends, they will tend to
link up to form long chains or one dimensional aggregates. If the
molecules interact in **two dimensions** they will tend to form disks or
planar aggregates. And if the interactions are isotropic (i.e. the same
in all directions), the molecules will tend to form **three dimensional
aggregates, droplets or clusters**.

### Chemical potential of a molecule {#chemical-potential-of-a-molecule .H3}

In order for an aggregate to grow the change in the 'free' energy when
an additional molecule or particle is added must be negative. We define
the chemical potential μ of an aggregate as the rate of change of the
free energy with particle number N.

> ie $\mu = \frac{dU}{dN}$

As we will see the chemical potential depends upon the shape of the
aggregates and the number of particles in the aggregate (N)

### ![](media/image148.png){width="2.2847222222222223in" height="1.8416666666666666in"}One Dimensional aggregates (rods) {#one-dimensional-aggregates-rods .H3}

Consider a linear aggregate where all the N particles/molecules are
joined together in a line.

Most particles have 2 bonds which we will say results in a negative
change in the free energy μ~Bulk~. The two particles on the end each
have an exposed surface with one bond each that is unsatisfied. This is
equivalent to one particle with two unsatisfied bonds. One way to write
the energy change down is to firstly write the free energy change of N
normal particles and then add a correction for the "one particle" which
has unsatisified bonds.

$$U = U_{Bulk} + U_{surface} = - N\mu_{Bulk} + 1*\mu_{Bulk} = - (N - 1)\mu_{Bulk}$$

To calculate the change in the free energy we differentiate this
expression:

$$\mu = \frac{dU}{dN} = - \mu_{Bulk} < 0$$

Since this value is always negative adding a single molecule to a linear
aggregate will always be favourable. As a result, molecules that form
these kind of aggregates will tend to form very long (essentially
infinite) rods or fibres.

Excess surface area

R

t

### Two dimensional aggregates (disks)  {#two-dimensional-aggregates-disks .H3}

The case of 2D aggregation is slightly more complicated.

As a disk-like aggregate grows the area of the surface on which the
particles attach increases with the radius of the disk. The production
of this excess surface area has an energy penalty associated with it.

How many molecules are required to form an aggregate of radius R?
Equating the volume of the aggregate with the volume of the N molecules
from which it is made and rearranging gives:

$R = \ \left( \frac{Nv}{\pi t} \right)^{\frac{1}{2}}$

Following the same logic as for the 1D aggregate, we will work out the
bulk energy of N particles but then correct for those particles at the
edge of the aggregate that have unsatisfied bonds. In this case the
surface correction term is related to the area of the exposed edge and
we also define the surface energy per unit area γ. We then substitute
for R to obtain the expression for U.

$U = U_{Bulk} + U_{Surface} = - N\mu_{Bulk} + 2\pi Rt\gamma = \  - N\mu_{Bulk} + 2\gamma(\pi tvN)^{\frac{1}{2}}$

Differentiating with respect to N gives an expression for the chemical
potential:

$$\mu = \frac{dU}{dN} = - \mu_{bulk} + \gamma\left( \frac{\pi tv}{N} \right)^{\frac{1}{2}}$$

### ![](media/image150.png){width="2.3368055555555554in" height="1.6722222222222223in"}Three Dimensional aggregates (spheres) {#three-dimensional-aggregates-spheres .H3}

Similarly for 3D aggregation we consider bulk and surface terms:

1.  Work out how N is related to R 🡪 N = (4πR^3^/3v)

2.  Write down energy of bulk and surface

> U = U~Bulk~ + U~Surface~ = -Nµ~bulk\ +~ 4πR^2^γ

3.  Simplify expression to remove dependence on R

4.  µ = dU/dN

$$\mu = - \mu_{bulk} + \frac{8\pi\gamma}{3}\left( \frac{3v}{4\pi} \right)^{\frac{2}{3}}\left( \frac{1}{N} \right)^{\frac{1}{3}}$$

### What happens as the aggregation number increases? {#what-happens-as-the-aggregation-number-increases .H3}

For a 1D aggregate we saw that the chemical potential is always negative
and so aggregates grow regardless of N. However, for 2 and 3D aggregates
this is not necessarily the case.

$$\mathrm{\Delta}U(N + 1) = \ \frac{dU}{dN}((N + 1) - N)$$

Whether this change is positive depends on the sign of the chemical
potential.

![](media/image151.png){width="3.1478258967629045in"
height="3.1478258967629045in"}

A plot of the free energy shows that the gradient dU/dN is positive for
N \< Nc and negative above this value. This means that for 2 and 3D
aggregates adding a single molecule to a small aggregate (N\< Nc) will
be unfavourable. Consequently, if you were to place a ready formed
aggregate of N \< Nc molecules in solution it would fall apart in order
to decrease the free energy of the system. However, once a critical
nucleus (N=Nc) of molecules has been formed it becomes favourable for
the aggregate to grow. There is therefore an energy barrier to
aggregation for isolated molecules in solution which must be overcome if
an aggregate is to grow. The size of this critical nucleus occurs at the
turning point (μ = dU/dN)

For a 2D aggregate this gives:

$$N_{c} = {\pi tv\left( \frac{\gamma}{\mu_{B}} \right)}^{2}$$

and for 3D:

$$N_{c} = \left( \frac{3v}{4\pi} \right)^{2}\left( \frac{8\pi\gamma}{{3\mu}_{B}} \right)^{3}$$

### So how do 2D and 3D aggregates start growing? {#so-how-do-2d-and-3d-aggregates-start-growing .H3}

Since all aggregates start off as individual particles this raises the
question as to how 2D or 3D aggregates can start growing. We have seen
that to grow, a critical cluster size has to form before it becomes
energetically favourable for the aggregation to continue. The formation
of these clusters or nuclei can happen in one of two ways.

1)  Homogeneous nucleation

2)  Heterogeneous nucleation

**Homogeneous nucleation is where thermal fluctuations force enough
molecules together to form a cluster/nucleus of the required size.**
This is usually extremely unlikely and therefore takes a very long time.
There is an energy barrier that must be overcome by a chance
fluctuation. For a 3D aggregate this energy barrier has a height of

$$\mathrm{\Delta}U = \frac{\mu_{Bulk}N_{c}}{2}$$

The probability of this energy being supplied by chance is given by
Boltzmann statistics:

$$P(N = Nc) = \ e^{- \mathrm{\Delta}U/k_{B}T}$$

$$P(N = Nc) = \ e^{- \mu_{Bulk}N_{c}/2k_{B}T}$$

Thus the probability of Homogeneous nucleation is strongly dependent on
the bulk cohesive energy, the size of aggregate and the temperature.
Hence aggregation is faster at higher temperatures. This is often a very
small probability, meaning that nucleation takes a long time or
effectively never takes place.

**Heterogeneous nucleation is where foreign surfaces nucleate the
formation of a critical cluster size by introducing additional
interactions.** (Heterogeneous nucleation). These foreign surfaces can
simply be dust particles, or the surfaces of a container in which the
material is being held. This mechanism is usually the cause of nucleus
formation in 'dirty' samples.

![](media/image152.png){width="3.0695352143482064in"
height="3.0695352143482064in"}![](media/image153.png){width="2.5388888888888888in"
height="1.7819444444444446in"}

Less exposed surface area

Smaller surface term

If an aggregate forms on an impurity, it results in less exposed surface
area reducing the size of the correction U~surface~. This results in a
smaller critical aggregate size and a lower energy barrier to
nucleation. Consequently, it is easier for an aggregate to form under
these conditions.

### Summary of key concepts {#summary-of-key-concepts-4 .H3}

![](media/image154.png){width="1.711111111111111in"
height="1.4493055555555556in"}Aggregates form when the free energy
change on adding a molecule to an aggregate is negative.

The form of the free energy or chemical potential depends upon the shape
of the aggregate and the aggregation number

A critical cluster size sometimes has to form before growth can occur.
This is needed to overcome the contributions due to the excess surface
energy of the aggregate.

This critical cluster size can be achieved via a chance thermal
fluctuation (homogeneous nucleation) or through the addition of surfaces
/ foreign particles (heterogeneous nucleation).

## 13. Micelles & Membranes {#micelles-membranes .H2}

### Further reading {#further-reading .H3}

![jonescover.gif](media/image155.png){width="1.0173611111111112in"
height="1.3354166666666667in"}A helpful explanation of self-assembly is
also covered in the book '*Soft Condensed Matter'*, although everything
required will be covered in these notes.

R.A.L. Jones

QC173.458.S62 JON

**Soft Condensed Matter**

R.A.L. Jones, Oxford University Press, 2002, Chapter 9

### ![](media/image156.png){width="3.157638888888889in" height="1.5430555555555556in"}Amphiphilic molecules {#amphiphilic-molecules .H3}

Amphiphiles are molecules which have a water soluble head group and a
hydrophobic tail group. The head group can be anionic (negatively
charged), cationic (positively charged) or uncharged. The tail group is
made up of a hydrocarbon chain.

![](media/image158.jpeg){width="1.4069444444444446in"
height="1.4069444444444446in"}![](media/image159.jpeg){width="1.2208333333333334in"
height="1.5694444444444444in"}

Amphiphiles are found in soaps, food stuffs, detergents, disinfectants
and can be found in cosmetics and pharmaceuticals. They are also a major
component of human and animal cell membranes.

When amphiphiles sit at the interface between water and oil these 2
liquids do not come into contact as much. This reduces or eliminates the
energy cost of the interface. This can be used to stabilise an interface
such as the oil-water emulsion of Mayonnaise.

Oil

Water

### ![belowCMC.jpg](media/image160.jpeg){width="1.9131944444444444in" height="1.6076388888888888in"}The critical micelle concentration {#belowcmc.jpgthe-critical-micelle-concentration .H3}

When amphiphilic molecules are added to water at low concentrations,
they will initially disperse and some will migrate to the surface to
reduce the unfavourable contact between the hydrocarbon tails and the
water. The molecules exist as monomers.

![cylindricalmicelle.tif](media/image161.png){width="2.472916666666667in"
height="1.2416666666666667in"}![sphericalmicelle.tif](media/image162.png){width="1.2125in"
height="1.19375in"}

At a concentration called the **critical micelle concentration**
aggregates (or micelles) start to form in such a way that the
hydrophobic tails become shielded from the aqueous environment.

### ![massivemicelle.tif](media/image163.png){width="1.4493055555555556in" height="1.4402777777777778in"}The size and structure of a micelle {#massivemicelle.tifthe-size-and-structure-of-a-micelle .H3}

The free energy per molecule of amphiphiles in a micelle has a minimum
at a specific aggregation number. It is easy to see why this might be
the case.

When the micelles are too big, we must introduce amphiphiles into the
core of the structure. The unfavourable interactions between the
hydrophilic head groups of the molecules in the core and the tail groups
of surrounding amphiphiles have an energy penalty associated with them.

![tinymicelle.tif](media/image164.png){width="0.7583333333333333in"
height="0.7368055555555556in"}When micelles are too small, the
headgroups of the amphiphiles at the surface are unable to pack
efficiently enough to prevent water from contacting the hydrophobic tail
groups in the core of the micelle. This unfavourable interaction also
has an energy penalty associated with it.

![micelle.tif](media/image165.png){width="1.25625in"
height="1.2319444444444445in"}As a result of these interactions, the
micelles that form in solution will tend to have a well defined size
which corresponds to the case when the amphililes are just able to pack
together to ensure a) that no additional amphiphiles are introduced into
the core of the micelle and b ) that the headgroups pack efficiently
enough to shield the hydrophobic interior from water.

### Optimum headgroup area  {#optimum-headgroup-area .H3}

There is an optimum headgroup area, a~0~, occupied by an amphiphile at
the interface. This is determined by a balance between competing
contributions to the free energy. These contributions dominate at
different head group areas.

1.  *a \< a~0~*: Electrostatic or steric repulsion between the head
    groups act to force neighbouring molecules apart.

2.  *a \> a~0~:* If the head groups are separated too much then
    hydrocarbon tails are exposed to water resulting in hydrophobic
    interactions.

### ![jonesfigurep141.jpg](media/image166.png){width="3.7041666666666666in" height="2.8270833333333334in"}The hydrocarbon volume and critical chain length {#jonesfigurep141.jpgthe-hydrocarbon-volume-and-critical-chain-length .H3}

![](media/image167.png){width="2.2631944444444443in"
height="1.479861111111111in"}In addition to the headgroup area the
amphiphile is characterised by two other parameters.

1.  The hydrocarbon volume, *v*, is defined as the volume that is
    occupied by the hydrocarbon tails of the molecules.

![criticalchainlength.jpg](media/image168.jpeg){width="0.8916666666666667in"
height="1.7680555555555555in"}

2.  The critical chain length, *l~c~* , is the length of the hydrocarbon
    chain when it is fully extended.

*\[It is important to realise that because of the definition of l~c~ as
the maximum length of the amphiphile tail then it is
**[not]{.underline}** generally true that a~0~\*l~c~ = v*\]

### Factors affecting the shape of micelles {#factors-affecting-the-shape-of-micelles .H3}

Amphiphiles are capable of forming many different shaped micelles
including spheres, cylinders and bi-layers. The fluid like nature of
these molecules means that we can determine the shape of micelles by
considering how the amphiphiles pack together.

![bilayer.tif](media/image169.png){width="2.5in"
height="1.0298611111111111in"}![cylindricalmicelle.tif](media/image170.png){width="2.752083333333333in"
height="1.3840277777777779in"}![sphericalmicelle.tif](media/image171.png){width="1.3680555555555556in"
height="1.3402777777777777in"}

To do this we just require 3 parameters:

The hydrocarbon volume, *v,* The critical chain length, *l~c~* The
optimum head group area, *a~o\ ~*

### How do these parameters determine the shape of a micelle? {#how-do-these-parameters-determine-the-shape-of-a-micelle .H3}

The critical chain length, l~c~ , determines the size and shape of a
micelle as it sets the maximum length to which an individual amphiphile
molecule can be stretched

![Rlessthanlc.jpg](media/image172.jpeg){width="2.8319444444444444in"
height="1.5444444444444445in"}Clearly the radius of any micelle that
forms has to be less than or equal to this chain length.

$$R\  \leq l_{c}$$

### Critical packing parameter {#critical-packing-parameter .H3}

The shape of a micelle depends on the critical packing parameter.
$H = \ \frac{v}{l_{c}a_{0}}$

In each case we can calculate the conditions through applying the same
steps:

1.  Calculate the number of amphiphiles in the micelle

    a.  N = surface area of micelle / a~0~

    b.  N = volume of micelle / v

2.  Eliminate N to obtain an expression for R the radius of the micelle
    in terms of v and a~0~

3.  Substitute R ≤ l~c~

4.  Rearrange to find the condition on the critical packing parameter

### ![](media/image173.png){width="3.0395833333333333in" height="1.3930555555555555in"}Spherical micelles {#spherical-micelles .H3}

The volume and surface area of a spherical micelle can be related to the
aggregation number, N, the hydrocarbon volume, v, and the optimum head
group area, a~o~

If the radius of the micelle is less than the critical chain length,
*l~c~* for spheres to form we require that

$$\ \frac{v}{l_{c}a_{0}}\  \leq \ \frac{1}{3}$$

### ![](media/image174.png){width="2.540277777777778in" height="1.7930555555555556in"}Cylinders {#cylinders .H3}

Similarly for cylindrical micelles

![](media/image175.wmf)

The 1/3 comes from the fact that the spherical micelle (above) is more
energetically favourable than the cylinder, since the cylinder has
exposed ends with hydrophobic tails. However, when H \> 1/3 it is no
longer possible to form spheres.

### ![](media/image176.png){width="2.3368055555555554in" height="1.8555555555555556in"}Bi-layers {#bi-layers .H3}

Similarly for bi-layers:

![](media/image177.wmf)

Where in a similar way the ½ originates from the fact that when H is ≤ ½
the amphiphiles will form cylinders.

### ![](media/image178.png){width="2.342361111111111in" height="1.06875in"}Summary of key concepts {#summary-of-key-concepts-5 .H3}

Amphiphilic molecules contain a hydrophobic head group and hydrophobic
tail group.

When added to water they form micelles above a critical concentration.
Their shape is determined by the volume and length of the tail and the
optimum area of the molecular headgroups.

![](media/image179.wmf)![cylindricalmicelle.tif](media/image180.png){width="1.8083333333333333in"
height="0.9041666666666667in"}![sphericalmicelle.tif](media/image181.png){width="0.8402777777777778in"
height="0.8319444444444445in"} A geometric packing parameter can be used
to identify whether spherical, cylindrical or bilayer structures will
form.

![bilayer.tif](media/image182.png){width="1.6402777777777777in"
height="0.6798611111111111in"}

![](media/image183.wmf)

![](media/image184.wmf)

### Vesicle formation  {#vesicle-formation .H3}

When lipid bi-layers are formed in solution, there is an excess energy
associated with the exposed hydrophobic tail groups at the edges of the
structure.

![](media/image185.png){width="3.8375in" height="1.0541666666666667in"}

The bi-layers can offset this energy by folding around to close
themselves off and form an isolated shell or vesicle.

vesicle

Vesicles are closed structures that can be used to encapsulate materials
in their interior for use in drug delivery. If the outside of the
vesicle is decorated with specific chemical receptors which cause the
vesicle to rupture and deliver its cargo when it reaches its target, it
can act like a 'magic bullet'.

> ![](media/image188.jpeg){width="2.339583333333333in"
> height="1.8020833333333333in"}Vesicles are also the most basic model
> for understanding the physics of the cell wall. A cell membrane
> consists of a vesicle with additional molecules such as membrane
> proteins distributed in the lipid bi-layer (A lipid is a type of
> amphiphile).

**Bi-layer / membrane elasticity**

a0

a0+Δa

r

d

Earlier we considered the optimum headgroup area a~0~ which is at the
minimum of the free energy. However, when a bi-layer is bent the
amphiphiles on the outside of the bi-layer move slightly further apart,
whilst the molecules on the inside are pushed closer together. Both
these changes will increase the free energy of the bilayer leading to a
resistive force or elasticity.

In the simplest approximation:

$$\mathrm{\Delta}U\  \approx \ \frac{1}{2}k\mathrm{\Delta}a^{2}$$

**Calculation: Estimating the elasticity of a membrane**

1.  Calculate the head group area at the middle and outside edge of the
    curved membrane:

    a.  $a_{0} = R\theta Z$

    b.  $a_{0} + \mathrm{\Delta}a$=$\left( R + \frac{d}{2} \right)\theta Z$

2.  Solve to find:

> $$\mathrm{\Delta}a = \frac{da_{0}}{2R}$$

3.  The number of headgroups per unit area is 2/a~0~. One on outer edge,
    one inner edge so the energy per unit area is 0.5kΔa^2^\*2/a~0~.
    Substituting Δa gives:

> $\frac{\mathrm{\Delta}U}{A}\  \approx \ \frac{\kappa}{2R^{2}}$ where
> $\kappa = \ \frac{kl_{c}^{2}a_{0}}{2}$

This implies that a membrane has an elasticity with spring constant κ.
It also shows that a membrane gets increasingly stiff if the constituent
amphiphiles are long and / or fat.

### Membrane (Entropic Repulsion) {#membrane-entropic-repulsion .H3}

The stiffness or bending modulus of a typical membrane is sufficiently
small that they may undergo thermal induced fluctuations. Below we
compare a membrane with some other typical "soft" materials.

  -----------------------------------------------------------------------
               Material                          Modulus (kPa)
  ----------------------------------- -----------------------------------
                Rubber                               1000

                 Jelly                                10

               Membrane                               0.1
  -----------------------------------------------------------------------

![membraneundulation.jpg](media/image189.jpeg){width="2.386111111111111in"
height="1.9770833333333333in"}The closer two membranes come together the
more these "thermal undulations" become restricted by the presence of
the other membrane. In comparison with the lecture on steric
interactions we may be able to guess that as the number of
configurations (or undulations) is reduced the entropy of the system
increases. Since this is unfavourable we expect a repulsive entropic
force between the membranes.

**Calculation: What is the force experienced by 2 membranes?**

To make this calculation tractable we have to make a number of
simplifications. These it turns out affect the final prefactor but give
rise to the correct physics.

We start with the following assumptions:

1.  2 bi-layers a distance D apart will interact when the modes have
    amplitude D/2

2.  From the equipartition principle each mode has k~B~T/2 energy
    associated with it.

3.  Each mode is a 2D wave and occupies an area πx^2^

Comes from geometry. Write x in terms of R and D 🡪 x^2^≈RD

> $Pressure = \ \frac{{\mathrm{\Delta}U}_{mode}}{{Vol}_{mode}} = \ \frac{k_{B}T}{\pi x^{2}D}$
> = $\frac{k_{B}T}{\pi RD^{2}}$

4.  Use earlier result to find an alternative expression for R. ΔU =
    k~B~T/2 and A = πx^2^

> $\frac{\mathrm{\Delta}U}{A} \approx \ \frac{\kappa}{2R^{2}}$ 🡪
> $\frac{1}{R} \approx \frac{{{(k}_{B}T)}^{2}}{\kappa\pi D}$

The final result is:

$$\ P = \frac{{{(k}_{B}T)}^{2}}{\kappa\pi^{2}D^{3}}$$

This pressure is always repulsive and is stronger for more flexible
membranes. The pressure also varies as 1/D^3^. This is interesting since
this is the same dependence we observed for the Van der Waals
interaction between two surfaces but with the opposite sign. The
combined pressure would therefore be:

$$P_{Tot} = \left\lbrack \frac{\left( k_{B}T \right)^{2}}{{\kappa\pi}^{2}} - \frac{A}{6\pi} \right\rbrack\frac{1}{D^{3}}$$

This has an interesting consequence that the pressure for a membrane is
either always positive or always negative regardless of distance D,
depending on the sign of the bracket. Compare this with the DLVO
potential for a charged colloid in a solution of ions which has the
electrostatic (osmotic) and VdWs terms which exhibits a maximum, meaning
that at small separations the particles become stuck together, whereas
at large separations the pressure is repulsive.

DLVO

Undulation + VdW

Electrostatic

Undulation

Dispersion
