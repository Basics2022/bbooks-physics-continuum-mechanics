(continuum:governing-equations:reference-integral)=
# Integral Balance Equations in reference space

(continuum:governing-equations:reference-integral:mass)=
## Mass

Integal balance for a material volume $V_t$ reads

$$\begin{aligned}
  0 
  & = \dfrac{d}{dt}\int_{V_t} \rho(\vec{r}, t) \, dV = \\
  & = \dfrac{d}{dt}\int_{V_0} \rho(\vec{r}(\vec{r}_0,t), t) \, J(\vec{r}_0,t) \, dV_0 = \\
  & = \dfrac{d}{dt}\int_{V_0} \rho_0(\vec{r}_0,t) \, J(\vec{r}_0,t) \, dV_0 = \\
  & = \int_{V_0} \dfrac{D}{D t} \left( \rho_0(\vec{r}_0,t) \, J(\vec{r}_0,t) \right) \, dV_0 \ . 
\end{aligned}$$

Since the domain $V_0$ is arbitrary, with some abuse of notation to indicate the density field as $\rho$, hidihg the dependence on the independet fvariables $\rho_0(\vec{r}_0,t)$, the differential balance in reference space follows

$$\dfrac{D}{Dt} \left( \rho \, J \right) = 0$$

or

$$\rho \, J = \rho^0 \ ,$$

i.e. the product $\rho \, J$ equals the initial density field $\rho^0$, assuming that the determinant of the transformation is $J^0 = 1$, in the reference configuration.


(continuum:governing-equations:reference-integral:momentum)=
## Momentum

Integral balance for a material volume $V_t$ reads

$$\begin{aligned}
  & \dfrac{d}{dt}\int_{V_t} \rho \vec{v} \, dV = \int_{V_t} \rho \vec{g} + \oint_{\partial V_t} \hat{n} \cdot \mathbb{T} \, dS \\
  & \dfrac{d}{dt}\int_{V_0} \rho \, J \, \vec{v} \, dV_0 = \int_{V_0} \rho \, J \, \vec{g} + \oint_{\partial V_t} \hat{n}_0 \cdot \left( J \mathbb{F}^{-T} \cdot \mathbb{T} \right) \, d S_0 \\
  & \dfrac{d}{dt}\int_{V_0} \rho^0 \, \vec{v} \, dV_0 = \int_{V_0} \rho^0 \, \vec{g} + \oint_{\partial V_0} \hat{n}_0 \cdot \mathbb{\Sigma}_n \, d S_0 \\
  & \int_{V_0} \rho^0 \, \dfrac{D}{Dt} \vec{v} \, dV_0 = \int_{V_0} \rho^0 \, \vec{g} + \oint_{V_0} \nabla_0 \cdot \mathbb{\Sigma}_n \, d S_0 \\
\end{aligned}$$

Since the domain $V_0$ is arbitrary, the differential balance in reference space follows

$$\rho^0 \dfrac{D \vec{v}}{D t} = \rho^0 \, \vec{g} + \nabla_0 \cdot \mathbb{\Sigma}_n$$

```{dropdown} Nanson's formula

$$d \vec{r} = d \vec{r}_0 \cdot \dfrac{\partial \vec{r}}{\partial \vec{r}_0} = d \vec{r}_0 \cdot \nabla_0 \vec{r} = d \vec{r}_0 \cdot \mathbb{F}$$

$$\begin{aligned}
  dV & = J \, dV_0 \\
  d \vec{r} \cdot \hat{n} dS & = J \, d \vec{r}_0 \cdot \hat{n}_0 \, dS_0 \\
  d \vec{r}_0 \cdot \mathbb{F} \cdot \hat{n} \, dS & = J \, d \vec{r}_0 \cdot \hat{n}_0 \, dS_0 \\
\end{aligned}$$ 

must be true for all $\vec{r}_0$ arbitrary, so that 

$$\mathbb{F} \cdot \hat{n} \, d S = J \, \hat{n}_0 \, d S_0$$

and

$$\begin{aligned}
  \hat{n} \, d S
  & = J \, \mathbb{F}^{-1}  \cdot  \hat{n}_0 \, d S_0 = \\
  & = J \, \hat{n}_0 \cdot \mathbb{F}^{-T} \, d S_0
\end{aligned}$$

```

```{dropdown} Stress tensors

**Cauchy stress tensor.**

**Piola-Kirchhoff I - transpose of normal stress tensors.**

**Piola-Kirchhoff II**

```

```{prf:example} Relation between description in physical and reference space
:class: dropdown

$$\begin{aligned}
  \rho^0 \dfrac{D \vec{v}}{D t} & = \rho^0 \, \vec{g} + \nabla_0 \cdot \mathbb{\Sigma}_n \\
  J \, \rho \, \dfrac{D \vec{v}}{D t} & = J \, \rho \, \vec{g} + \nabla_0 \cdot \mathbb{\Sigma}_n \\
  \rho \, \dfrac{D \vec{v}}{D t} & = \rho \, \vec{g} + \frac{1}{J} \nabla_0 \cdot \mathbb{\Sigma}_n \\
\end{aligned}$$

thus, 

$$\begin{aligned}
  \nabla \cdot \mathbb{T}
  & = \frac{1}{J} \nabla_0 \cdot \mathbb{\Sigma}_n = \\
  & = \frac{1}{J} \nabla_0 \cdot \left( J \, \mathbb{F}^{-T} \cdot \mathbb{T}  \right) 
\end{aligned}$$

**todo** Prove it with derivation!

```

(continuum:governing-equations:reference-integral:kinetic-energy)=
## Kinetic energy

$$\begin{aligned}
  0
  & = \vec{v} \cdot \left\{ \rho^0 \dfrac{D \vec{v}}{D t} - \rho^0 \vec{g} - \nabla_0 \cdot \mathbb{\Sigma}_n \right\} = \\
  & = \rho^0 \dfrac{D}{D t}\dfrac{|\vec{v}|^2}{2} - \rho^0 \vec{v} \cdot \vec{g} - \vec{v} \cdot \nabla_0 \cdot \mathbb{\Sigma}_n = \\
  & = \rho^0 \dfrac{D}{D t}\dfrac{|\vec{v}|^2}{2} - \rho^0 \vec{v} \cdot \vec{g} - \nabla_0 \cdot \left( \vec{v} \cdot  \mathbb{\Sigma}_n \right) + \nabla_0 \vec{v} :  \mathbb{\Sigma}_n 
\end{aligned}$$

$$v_i \partial^0_k \Sigma_{ki} = \partial^0_k \left( v_i \Sigma_{ki} \right) - \partial^0_k v_i \Sigma_{ki}$$

$$\begin{aligned}
 & d V = J d V_0 \\
 & dr_i n_i \, dS = J dr^0_{k} n^0_k \, dS_0 \\
 & dr^0_k \dfrac{\partial r_i}{\partial r^0_k} n_i \, dS = dr^0_{k} J n^0_k \, dS_0 \\
\end{aligned}$$

$$\begin{aligned}
  \dfrac{\partial r_i}{\partial r^0_k} n_i \, dS & = J n^0_k \, dS_0 \\
  \underbrace{\dfrac{\partial r^0_k}{\partial r_j} \dfrac{\partial r_i}{\partial r^0_k}}_{=\delta_{ij}} n_i \, dS & = J \dfrac{\partial r^0_k}{\partial r_j} n^0_k \, dS_0 \\
  n_j \, dS & = J \frac{\partial r^0_k}{\partial r_j} n_k^0 \, dS_0
\end{aligned}$$

$$\mathbb{F} = \hat{e}^0_k \hat{e}^0_i \dfrac{\partial r_i}{\partial r^0_k}$$
$$\mathbb{F}^{-1} = \hat{e}^0_j \hat{e}^0_k \dfrac{\partial r^0_k}{\partial r_j}$$
$$\begin{aligned}
\mathbb{F}^{-1} \cdot \mathbb{F} & = \left( \hat{e}^0_j \hat{e}^0_k \dfrac{\partial r^0_k}{\partial r_j} \right) \cdot \left( \hat{e}^0_l \hat{e}^0_i \dfrac{\partial r_i}{\partial r^0_l} \right) = \hat{e}^0_j \hat{e}^0_i \dfrac{\partial r^i}{\partial r_j} =  \hat{e}^0_j \hat{e}^0_i \delta_{ij} \\
\mathbb{F} \cdot \mathbb{F}^{-1} & = \left( \hat{e}^0_l \hat{e}^0_i \dfrac{\partial r_i}{\partial r^0_l} \right) \cdot \left( \hat{e}^0_j \hat{e}^0_k \dfrac{\partial r^0_k}{\partial r_j} \right) = \hat{e}^0_l \hat{e}^0_k \dfrac{\partial r^k}{\partial r_l} =  \hat{e}^0_l \hat{e}^0_k \delta_{lk} \\
\end{aligned}$$

$$\frac{\partial r^0_k}{\partial r_i} \frac{\partial r_i}{\partial r^0_l} = \delta_{kl}$$


(continuum:governing-equations:reference-integral:total-energy)=
## Total energy





