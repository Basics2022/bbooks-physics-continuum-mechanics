(fluid-mechanics:governing-equations)=
# Governing Equations of Fluid Mechanics

## Newtonian Fluid
The differential conservative form of the governing equations of a [Newtonian fluid](fluid-mechanics:constutive-equations:newtonian) directly follows from the expression {eq}`eq:continuum:primary:differential:conservative` of [governing equations of a continuum medium in differential form](continuum:governing-equations:primary-integral),

$$\begin{cases}
  \dfrac{\partial \rho }{\partial t} + \nabla \cdot \left( \rho \vec{v} \right) = 0 \\
  \dfrac{\partial }{\partial t} \left( \rho \vec{v} \right) +  \nabla \cdot \left( \rho \vec{v} \otimes \vec{v} \right) = \rho \vec{g} + \nabla \cdot \mathbb{T} \\
  \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \nabla \cdot \left( \rho e^t \vec{v} \right) = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r
\end{cases}$$

using the expression {eq}`eq:stress-newtonian` of the stress tensor of a Newtonian fluid,

$$\mathbb{T} = - p \mathbb{I} + 2 \mu \mathbb{D} + \lambda (\nabla \cdot \vec{v}) \mathbb{I} \ ,$$

a constitutive equation for conduction heat flux $\vec{q}$, as an example **Fourier's law**

$$\vec{q} = - k \nabla T \ ,$$

and the required state equations characterizing the behavior of the medium linking thermodynamic variables (assumption of **local thermodynamic equilibrium** **todo** *discuss this principle*), and required to get a well-defined mathematical problem, with the same number of equations and unknowns.

```{prf:example} Equations of state
 As an example, the required equations of states need to provide and expression of thermodynamic quantities as a function of the dynamical physical quantities. This could be quite a common choice in numerical methods using conservative form of the equations. Namely, defining momentum and total energy per unit volume

$$\vec{m} := \rho \vec{v} \quad , \quad E^t := \rho e^t \ ,$$

equations of state should provide the expression of pressure $p$, temperature $T$, viscosity coefficients $\mu$, $\nu$ and thermal conductivity $k$ as functions of "dynamic quantities" $\rho, \, \vec{m}, \, E^t$,

$$\begin{aligned}
        p & (\rho, \vec{m}, E^t) \\
        T & (\rho, \vec{m}, E^t) \\
      \mu & (\rho, \vec{m}, E^t) \\
  \lambda & (\rho, \vec{m}, E^t) \\
        k & (\rho, \vec{m}, E^t) \\
\end{aligned}$$

Usually, in thermodynamics pressure and temperature can be written as functions of other two thermodynamic variables, as an example density $\rho$ and internal energy (per unit mass) 

$$e = e^t - \frac{|\vec{v}|^2}{2} = \frac{E^t}{\rho} - \frac{1}{2}\frac{|\vec{m}|^2}{\rho^2}$$

so that - avoiding here notation abuses and using two different symbols for functions with different independent variables representing the same physical quantity -,

$$\begin{aligned}
  \Pi   \left( \rho, e \right) & = \Pi   \left( \rho, \frac{E^t}{\rho} - \frac{1}{2}\frac{|\vec{m}|^2}{\rho^2} \right) = p(\rho, \vec{m}, E^t) \\
  \Theta\left( \rho, e \right) & = \Theta\left( \rho, \frac{E^t}{\rho} - \frac{1}{2}\frac{|\vec{m}|^2}{\rho^2} \right) = T(\rho, \vec{m}, E^t) \\
\end{aligned}$$

```

## Derived quantities

Balance equations of kinetic energy and internal energy readily follows from balance equations of continuum media in covective form.
<!--
$$\begin{aligned}
 & \rho \frac{D k}{D t} = \rho \vec{g} \cdot \vec{v} + \vec{v} \cdot \nabla \cdot \mathbb{T} \\
 & \rho \frac{D e}{D t} = \mathbb{T} : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r \\
 & \dots
\end{aligned}$$
-->

**Kinetic energy.**

**Internal energy.**

$$\begin{aligned}
 \rho \frac{D e}{D t}
  & = \mathbb{T} : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r  = \\
  & = \left( -p \mathbb{I} + 2 \mu \mathbb{D} + \lambda (\nabla \cdot \vec{v}) \mathbb{I} \right) : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r  = \\
  & = - p \nabla \cdot \vec{v} + 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2 - \nabla \cdot \vec{q} + \rho r
\end{aligned}$$

```{dropdown} Details
**todo**
```

**Entropy equation.** The first principle of thermodynamics for non-reactive fluid, with no electric charge and other processes, provides the expression of the differential of entropy as a function of internal energy and density, $s(e, \rho)$

$$d e = T \, ds + \frac{P}{\rho^2} d \rho  \qquad , \qquad ds = \dfrac{1}{T} \, de - \frac{P}{T \rho^2} \, d \rho \ ,$$

and thus the balance equation for entropy directly follows from the evaluation of the material derivative of entropy field, exploiting balance equations of mass and internal energy

$$\begin{aligned}
  \rho \frac{D s}{D t}
  & = \frac{1}{T} \left[ \rho \frac{D e}{D t} - \frac{P}{\rho} \dfrac{D \rho}{D t} \right] = \\
  & = \frac{1}{T} \left[ - p \nabla \cdot \vec{v} + 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2 - \nabla \cdot \vec{q} + \rho r - \frac{P}{\rho} \left( - \rho \nabla \cdot \vec{v} \right) \right] = \\
  & = \frac{1}{T} \left[ 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2 - \nabla \cdot \vec{q} + \rho r \right] = \\
  & = \frac{ 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2}{T} - \frac{\vec{q} \cdot \nabla T}{T^2} - \nabla \cdot \left( \frac{\vec{q}}{T} \right) + \frac{\rho r}{T} = \\
  & = \frac{ 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2}{T} + \frac{k |\nabla T|^2}{T^2} - \nabla \cdot \left( \frac{\vec{q}}{T} \right) + \frac{\rho r}{T} \ .
\end{aligned}$$

```{dropdown} Details

$$\nabla \cdot \left( \frac{\vec{q}}{T} \right) = \frac{\nabla \cdot \vec{q}}{T} - \frac{\vec{q} \cdot \nabla T}{T^2}$$
```

**Second principle of thermodyanamics and continuum mechanics.** Second principle of thermodynamics implies some constraints on the behavior of continuous media, and thus on the contitutive equations. Namely, Clausis statement of the second principle reads

$$d S \ge \frac{\delta Q}{T} \ ,$$

i.e. the variation of entropy is greater or equal to the ratio of the heat flux added to the system and the temperature of the system itself. This can be written for a simple homogeneous system, or for a composite systems where physical quantities are not homogeneous in space **todo** ref

Integral form of balance equation of entropy of a system reads

$$\frac{d S}{dt} = \frac{d}{dt} \int_{V_t} \rho s = \int_{V_t} \left\{ \frac{ 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2}{T} + \frac{k |\nabla T|^2}{T^2} \right\} \underbrace{- \oint_{\partial V_t} \frac{\vec{q}}{T} \cdot \hat{n} + \int_{V_t} \frac{\rho r}{T}}_{"\frac{\delta Q}{T}"} \ ,$$

and Clausius statement of the second principle implies

$$0 \le \frac{d}{dt} \int_{V_t} \rho s - \left( - \oint_{\partial V_t} \frac{\vec{q}}{T} \cdot \hat{n} + \int_{V_t} \frac{\rho r}{T} \right) = \int_{V_t} \left\{ \frac{ 2 \mu \mathbb{D} : \mathbb{D} + \lambda (\nabla \cdot \vec{v})^2}{T} + \frac{k |\nabla T|^2}{T^2} \right\} \ ,$$

and, since this must hold for any volume $V_t$ and state of the system - namley every velocity and temperature field - and thermodynamic temperature is positive, it follows that

$$\mu \ge 0 \quad , \quad \lambda \ge 0 \quad , \quad k \ge 0$$

```{prf:example} Sign of physical quantity
**todo** pay attention, that temperature, viscosity ccoefficients and thermal conductivity have physical dimensions...explain the meaning of positive physical quantities (scalar, w.r.t. a unit of measurement)...
```
