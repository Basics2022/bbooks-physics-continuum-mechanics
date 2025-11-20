(continuum:governing-equations:primary-integral)=
# Differential Balance Equations of aaa physical quantities

(continuum:governing-equations:primary-integral:physical)=
## Balance equation in physical space

In this section, differential form of balance equations is derived using time $t$ and physical coordinate $\vec{r}$ as independent variables of fields representing physical quantities $f(\vec{r},t)$.

**Conservative form - Eulerian description in physical space.**

$$\begin{aligned}
 & \dfrac{\partial \rho }{\partial t} + \nabla \cdot \left( \rho \vec{v} \right) = 0 \\
 & \dfrac{\partial }{\partial t} \left( \rho \vec{v} \right) +  \nabla \cdot \left( \rho \vec{v} \otimes \vec{v} \right) = \rho \vec{g} + \nabla \cdot \mathbb{T} \\
 & \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \nabla \cdot \left( \rho e^t \vec{v} \right) = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r
\end{aligned}$$ (eq:continuum:primary:differential:conservative)

**Convective form - Lagrangian description in physical space.** Using vector calculus identities to evaluate partial derivatives of products, mass equation and relation {eq}`eq:field-time-derivatives` to write partial derivative w.r.t. material derivative,

$$\begin{aligned}
 &      \dfrac{D \rho   }{D t} = - \rho \nabla \cdot \vec{v} \\
 & \rho \dfrac{D \vec{v}}{D t} = \rho \vec{g} + \nabla \cdot \mathbb{T} \\
 & \rho \dfrac{D e^t    }{D t} = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r
\end{aligned}$$

```{dropdown} Proof
**todo**
```

**Arbitrary description in physical space.** Using relation {eq}`eq:field-time-derivatives` to write material derivatives w.r.t. time derivative at constant $\vec{r}_b$

$$\begin{aligned}
 &      \left.\dfrac{\partial \rho   }{\partial t}\right|_{\vec{r}_b} + \left( \vec{v} - \vec{v}_b \right) \cdot \nabla \rho    = - \rho \nabla \cdot \vec{v} \\
 & \rho \left.\dfrac{\partial \vec{v}}{\partial t}\right|_{\vec{r}_b} + \rho \left( \vec{v} - \vec{v}_b \right) \cdot \nabla \vec{v} = \rho \vec{g} + \nabla \cdot \mathbb{T} \\
 & \rho \left.\dfrac{\partial e^t    }{\partial t}\right|_{\vec{r}_b} + \rho \left( \vec{v} - \vec{v}_b \right) \cdot \nabla e^t     = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r
\end{aligned}$$

(continuum:governing-equations:primary-integral:reference)=
## Balance equations in reference space
In this section, differential form of balance equations is derived using time $t$ and material coordinate $\vec{r}_0$ as independent variables of fields representing physical quantities $f_0(\vec{r}_0,t) = f(\vec{r}(\vec{r}_0, t), t)$, exploiting the change of variables $\vec{r}(\vec{r}_0, t)$ and its inverse transformation - assumed to exist (with the same consideration done in the kinematics sections: while it's likely that a global invertible transformation w.r.t. the original reference configuration doesn't exist, limiting the time interval and space domain a "piecewise" invertible transformation w.r.t. intermetdiate states exists).


<!--
(continuum:governing-equations:primary-integral:lagrange)=
## Principles of classical mechanics for closed systems - Lagrangian description

(continuum:governing-equations:primary-integral:arbitrary)=
## Integral balance equations for arbitrary domains - arbitrary description

(continuum:governing-equations:primary-integral:euler)=
## Integral balance equations for control volumes - Eulerian description
-->

