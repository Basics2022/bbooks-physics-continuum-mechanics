(continuum:governing-equations:primary-integral)=
# Integral Balance Equations of aaa physical quantities

Classical physics relies on a small set of principles, usually formulated for closed systems.
- classical physics and chemistry rely on Lavoisier principle, or mass conservation in closed systems
- classical (Newton) mechanics is built on 3 principles:
  - $1^{st}$ principle, or principle of inertia, dealing with the invariance of classical physics w.r.t. Galileian transformations
  - $2^{nd}$ principle, or balance of momentum
  - $3^{rd}$ principle, or action/reaction principle
- classical thermodynamics:
  - $1^{st}$ principle, or balance of total energy
  - $2^{nd}$ principle, describing irreversibility or natural tendencies in physical processes - positive dissipation of mechanical (macroscopic) energy and heat transfer "from hot to cold bodies" - in terms of entropy 
  - $3^{rd}$ principle, relating energy, entropy and thermodynamic temperature as positive physical quantity (it sets an absolute zero of the thermodynamic temperature, in the thermodynamic scale of temperature - Kelvin $K$)
- classical electromagnetism:
  - Electric charge conservation
  - Maxwell's equations, relating electromagnetic field with charges and currents
  - Lorentz's force, acting on charges in an electromagnetic field

Here, electromagnetic processes are not investigated. Dynamical equations for angular momentum and kinetic energy derived in classical mechanics are discussed later: integral balance equation of angular momentum relates changes of angular momentum of the system with external moments acting on it; differential balance equation of angular momentum reduces to the an identity - and thus it adds no information - for **non-polar media**; kinetic energy integral balance relates changes of kinetic energy of the system with the total mechanical power acting on the system, and it can be substracted from total energy to get internal energy of the system.

(continuum:governing-equations:primary-integral:lagrange)=
## Principles of classical mechanics for closed systems - Lagrangian description

**Mass balance equation: Lavoisier principle.**

$$\frac{d}{dt} \int_{V_t} \rho = 0 \ .$$

**Momentum balance equation: $2^{nd}$ principle of Newton mechanics.**

$$\dfrac{d}{dt} \int_{V_t} \rho \vec{u} = \int_{V_t} \rho \vec{g} + \oint_{\partial V_t} \vec{t}_{\hat{n}} \ .$$

**Total energy balance equation: $1^{st}$ principle of thermodynamics.**

$$\dfrac{d}{dt} \int_{V_t} \rho e^t = \int_{V_t} \rho \vec{g} \cdot \vec{u} + \oint_{\partial V_t} \vec{t}_{\hat{n}} \cdot \vec{u} - \oint_{\partial V_t} \vec{q} \cdot \hat{n} + \int_{V_t} \rho r \ .$$


(continuum:governing-equations:primary-integral:arbitrary)=
## Integral balance equations for arbitrary domains - arbitrary description

Using [Reynolds transport theorem](https://basics2022.github.io/bbooks-math-miscellanea/ch/tensor-algebra-calculus/time-derivative-of-integrals.html#volume-density), time derivative over the material volume $V_t$ can be written in terms of the time derivative over volume $v_t$ in arbitrary motion and a flux contribution across its boundary.

**Mass balance equation.**

$$\frac{d}{dt} \int_{v_t} \rho + \oint_{\partial v_t} \rho ( \vec{u} - \vec{u}_b ) \cdot \vec{\hat{n}} = 0 \ .$$

**Momentum balance equation.**

$$\dfrac{d}{dt} \int_{v_t} \rho \vec{u} + \oint_{\partial v_t} \rho \vec{u} ( \vec{u} - \vec{u}_b ) \cdot \vec{\hat{n}} = \int_{v_t} \rho \vec{g} + \oint_{\partial v_t} \vec{t}_{\vec{n}} \ .$$

**Total energy balance equation.**

$$\dfrac{d}{dt} \int_{v_t} \rho e^t + \oint_{\partial v_t} \rho e^t ( \vec{u} - \vec{u}_b ) \cdot \vec{\hat{n}} = \int_{v_t} \rho \vec{g} \cdot \vec{u} + \oint_{\partial v_t} \vec{t}_{\vec{n}} \cdot \vec{u} - \oint_{\partial v_t} \vec{q} \cdot \vec{\hat{n}} + \int_{v_t} \rho r \ .$$

```{admonition} How to correctly apply Reynolds's transport theorem in continuum mechanics
Apply Reynold's transport both to material volume $V_t$ and arbitrary volume $v_t$

$$\begin{aligned}
  \dfrac{d}{d t} \int_{V_t} f & = \int_{V_t}\dfrac{\partial f}{\partial t} + \oint_{\partial V_t} f \, \vec{v}   \cdot \hat{n} \\
  \dfrac{d}{d t} \int_{v_t} f & = \int_{v_t}\dfrac{\partial f}{\partial t} + \oint_{\partial v_t} f \, \vec{v}_b \cdot \hat{n}   
\end{aligned}$$

and compare these two expressions, after setting $v_t \equiv V_t$, i.e. considering the material volume at time $t$ conciding with the arbitrary volume at time $t$ (in general, at any time $t$ there's a different material volume $V_t$ coinciding with the arbitrary volume $v_t$ - i.e. a different set of material particles in the arbitrary volume - but this is not a problem at all in the manipulation),

$$\dfrac{d}{d t} \int_{V_t \equiv v_t} f = \dfrac{d}{d t} \int_{v_t} f + \oint_{\partial V_t \equiv \partial v_t} f (\vec{v} - \vec{v}_b) \cdot \hat{n} \ .$$

```

(continuum:governing-equations:primary-integral:euler)=
## Integral balance equations for control volumes - Eulerian description
Eulerian description of integral balance equations in continuum mechanics relies on stationary control volume, $V$. Integral balance equations are readily derived from [balance equations for arbitrary volumes](continuum:governing-equations:primary-integral:arbitrary) setting the velocity of the boundary of the domain equal to zero, i.e. $\vec{v}_b = \vec{0}$, and the Eulerian controlo volume equal to the "instantanteously coinciding material volume", $V \equiv V_t$.

**Mass balance equation**

$$\frac{d}{dt} \int_{V} \rho + \oint_{\partial V} \rho \vec{u} \cdot \vec{\hat{n}} = 0 \ .$$

**Momentum balance equation**

$$\dfrac{d}{dt} \int_{V} \rho \vec{u} + \oint_{\partial V} \rho \vec{u} \vec{u} \cdot \vec{\hat{n}} = \int_{V} \rho \vec{g} + \oint_{\partial V} \vec{t}_{\vec{n}} \ .$$

**Total energy balance equation.**

$$\dfrac{d}{dt} \int_{V} \rho e^t + \oint_{\partial V} \rho e^t \vec{u} \cdot \vec{\hat{n}} = \int_{V} \rho \vec{g} \cdot \vec{u} + \oint_{\partial V} \vec{t}_{\vec{n}} \cdot \vec{u} - \oint_{\partial V} \vec{q} \cdot \vec{\hat{n}} + \int_{V} \rho r \ .$$
