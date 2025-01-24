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

$$\mathbb{\Sigma} := \mathbb{\Sigma}_n \cdot \mathbb{F}^{-1} = J \mathbb{F}^{-T} \cdot \mathbb{T} \cdot \mathbb{F}^{-1}$$

$$\mathbb{\Sigma}_n = \mathbb{\Sigma} \cdot \mathbb{F}$$

$$\Sigma_{ik} = \Sigma_{n, ij} \left( \mathbb{F}^{-1} \right)_{jk} = \Sigma_{n, ij} \frac{\partial r^0_k}{\partial r_j}$$
$$\Sigma_{n, ij} = \Sigma_{ik} \dfrac{\partial x_j}{\partial x^0_k}$$

$$\begin{aligned}
  \nabla_0 \vec{v} : \mathbb{\Sigma}_n 
  & = \frac{D}{Dt} \mathbb{F} : \mathbb{\Sigma}_n = \\
  & = \dfrac{\partial v_j}{\partial x^0_i} \, \Sigma_{n, ij} = \\
  & = \dfrac{\partial v_j}{\partial x^0_i} \, \Sigma_{ik} \, \dfrac{\partial x_j}{\partial x^0_k} = \\
  & = \Sigma_{ik} \, \frac{1}{2} \left( \, \dfrac{\partial v_j}{\partial x^0_i} \, \dfrac{\partial x_j}{\partial x^0_k} + \dfrac{\partial v_j}{\partial x^0_k} \, \dfrac{\partial x_j}{\partial x^0_i} \, \right)
\end{aligned}$$

if $\mathbb{\Sigma}$ is symmetric, $\Sigma_{ik} = \Sigma_{ki}$, or with tensor notation

$$\begin{aligned}
  \nabla_0 \vec{v} : \mathbb{\Sigma}_n
  & = \dfrac{D}{D t} \mathbb{F} : \mathbb{\Sigma}_n = \\
  & = \nabla_0 \vec{v} : \left( \mathbb{\Sigma} \cdot \mathbb{F} \right) = \\
  & = \mathbb{\Sigma} : \frac{1}{2} \left( \dfrac{D \mathbb{F}}{D t} \cdot \mathbb{F}^T + \mathbb{F} \cdot \frac{D \mathbb{F}^T}{D t}  \right) = \\
  & = \mathbb{\Sigma} : \dfrac{D}{Dt} \mathbb{E} \ ,
\end{aligned}$$

having recognized the time derivative {eq}`eq:green-lagrange:dt` of the [Green-Lagrange tensor](kinematics:reference-space:strain:green-lagrange) {eq}`eq:green-lagrange`.

Integral of the volume stress in the reference space can be recast as the volume in the physical space

$$\int_{V_0} \nabla_0 \vec{v} : \mathbb{\Sigma}_n \, dV_0 = \int_{V_0} \mathbb{\Sigma} : \dfrac{D \mathbb{E}}{D t} \, d V_0 $$

$$\Sigma_{n, ik} = J \, \dfrac{\partial x^0_i}{\partial x_k} \, T_{jk}$$

$$\begin{aligned}
  \int_{V_0} \nabla_0 \vec{v} : \mathbb{\Sigma}_n \, dV_0 
  & =  \int_{V_0} \dfrac{\partial v_k}{\partial x^0_i} \Sigma_{n, ik} \, dV_0 = \\
  & =  \int_{V_0} \underbrace{\dfrac{\partial v_k}{\partial x^0_i} \left( \dfrac{\partial x^0_i}{\partial x_j} \right.}_{}  \, T_{kj}  \underbrace{J\, \bigg) dV_0}_{d V} = \\
  & =  \int_{V} \dfrac{\partial v_k}{\partial x^j} \, T_{kj} \, d V = \\
  & =  \int_{V} \frac{1}{2} \left( \dfrac{\partial v_k}{\partial x^j} + \dfrac{\partial v_j}{\partial x^k} \right) \, T_{kj} \, d V = \\
  & =  \int_{V} D_{jk} \, T_{kj} \, d V = \\
  & =  \int_{V} \mathbb{D} : \mathbb{T} \, d V  \ .
\end{aligned}$$


### Variational principles

Using an arbitrary test function $\vec{w}(\vec{r}_0)$,

$$0 = \vec{w} \cdot \left\{ \rho^0 \dfrac{D \vec{v}}{D t} - \rho^0 \vec{g} - \nabla_0 \cdot \mathbb{\Sigma}_n \right\}$$

and using rule of product

$$\begin{aligned}
  w_i \dfrac{\partial \Sigma_{n,ji}}{\partial x^0_j} 
  & = \dfrac{\partial }{\partial x^0_j} \left( w_i \Sigma_{n, ji} \right) - \dfrac{\partial w_i}{\partial x^0_j} \Sigma_{n, ji} = \\
\end{aligned}$$

and the second term can be transformed using the relation bewteen normal stress and second Piola-Kirchhoff tensor

$$\begin{aligned}
  \dfrac{\partial w_i}{\partial x^0_j} \Sigma_{n, ji} = \dfrac{\partial w_i}{\partial x^0_j} \Sigma_{jk} \dfrac{\partial x_i}{\partial x^0_k}
  = \Sigma_{jk} \, \dfrac{1}{2} \, \left[ \, \dfrac{\partial x_i}{\partial x^0_k} \dfrac{\partial w_i}{\partial x^0_j} + \dfrac{\partial x_i}{\partial x^0_j} \dfrac{\partial w_i}{\partial x^0_k} \, \right] = \Sigma_{jk} \, W_{ij}(\vec{w}) \ ,
\end{aligned}$$

having defined the tensor 

$$\mathbb{W}(\vec{w}) := \dfrac{1}{2} \left[ \, \nabla_0 \vec{w} \cdot \mathbb{F}^T + \mathbb{F} \cdot \nabla^T_0 \vec{w} \, \right] \ ,$$

with the evident analogy with the time derivative of Green-Lagrange strain tensor, namely

$$\mathbb{\epsilon} = \mathbb{W}(\vec{v}) \ ,$$

being $\vec{v}$ the velocity field. Integrating on the domain $V_0$ and using divergence theorem, the problem is written in its weak form

$$\int_{V_0} \left\{ \rho^0 \vec{w} \cdot \dfrac{D \vec{v}}{D t} + \mathbb{W}(\vec{w}) : \mathbb{\Sigma} \right\} = \int_{V_0} \rho^0 \vec{w} \cdot \vec{g} + \oint_{\partial V_0} \hat{n}_0 \cdot \mathbb{\Sigma}_n \cdot \vec{w} \ , $$

with the proper boundary conditions and the corresponding conditions on the test function $\vec{w}$. As an example, if the boundary is composed of two different regions, $S_{D,0} \cup S_{N,0} = \partial V_0$, $S_D \cap S_N = \emptyset$ where either position (called $S_D$ from Dirichlet boundary) and stress (called $S_N$ from Neumann boundary) are prescribed

$$\begin{aligned}
  \vec{r} = \vec{r}_b \qquad , \qquad & \vec{w} = \vec{0} & \qquad \text{(on $ S_{D,0} $ Dirichlet - essential - boundary)} \\
  \hat{n}_0 \cdot \mathbb{\Sigma}_n = \vec{t}_{0, \hat{n}_0} \qquad , \qquad & & \text{(on $ S_{N,0} $ Neumann - natural - boundary)} \\
\end{aligned}$$

the weak form of the equation reads

$$\int_{V_0} \left\{ \rho^0 \vec{w} \cdot \dfrac{D \vec{v}}{D t} + \mathbb{W}(\vec{w}) : \mathbb{\Sigma} \right\} = \int_{V_0} \rho^0 \vec{w} \cdot \vec{g} + \int_{S_{n,0}} \hat{n}_0 \cdot \vec{t}_{\hat{n}_0} $$




(continuum:governing-equations:reference-integral:total-energy)=
## Total energy

Using Nanson's relation $\hat{n} \, dS = \hat{n}_0 \cdot \left(J \mathbb{F}^{-T}\right) \, d S_0$,

$$\begin{aligned}
  \dfrac{d}{d t} \int_{V_t} \rho e^t \, dV
  & = \int_{V_t} \rho \vec{g} \cdot \vec{v} \, dV + \oint_{\partial V_t} \vec{t}_{\hat{n}} \cdot \vec{v}  \, dS - \oint_{\partial V_t} \hat{n} \cdot \vec{q} + \int_{V_t} \rho \, r \, dV = \\
  & = \int_{V_t} \rho \vec{g} \cdot \vec{v} \, dV + \oint_{\partial V_t} \hat{n} \cdot \mathbb{T} \cdot \vec{v} \, dS - \oint_{\partial V_t} \hat{n} \cdot \vec{q} \, dS + \int_{V_t} \rho \, r \, dV \\
  & = \int_{V_0} \rho^0 \, \vec{g} \cdot \vec{v} \, dV_0 + \oint_{\partial V_0} \hat{n}_0 \cdot \left( J \mathbb{F}^{-T} \cdot \mathbb{T} \right) \cdot \vec{v} \, dS_0 - \oint_{\partial V_0} \hat{n}_0 \cdot \left( J \mathbb{F}^{-T} \cdot \vec{q} \right) \, dS_0 + \int_{V_0} \rho^0 \, r \, dV_0 \ .
\end{aligned}$$

and the differential form reads

$$
\rho^0 \dfrac{D e^t}{Dt} = \rho^0 \vec{g} \cdot \vec{v} + \nabla_0 \cdot \left( J \mathbb{F}^{-T} \cdot \mathbb{T} \cdot \vec{v} \right) - \nabla_0 \cdot \left( J \mathbb{F}^{-T} \cdot \vec{q} \right) + \rho^0 \, r \ .
$$

or

$$
\rho^0 \dfrac{D e^t}{Dt} = \rho^0 \vec{g} \cdot \vec{v} + \nabla_0 \cdot \left( \mathbb{\Sigma}_n \cdot \vec{v} \right) - \nabla_0 \cdot \vec{q}_0 + \rho^0 \, r \ .
$$

and dividing by $J$ and using the relation (**see below**) $\nabla_0 \cdot ( J \mathbb{F}^{-T} \cdot \vec{a} ) = J \, \nabla \cdot \vec{a}$,

$$\rho \dfrac{D e^t}{D t} = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r \ .$$


Comparison with equation in physical space (dividing by $J$) suggests the identity

$$\dfrac{1}{J} \nabla_0 \cdot \left( J \mathbb{F}^{-T} \cdot \vec{a} \right) = \nabla \cdot \vec{a} \ ,$$

and thus 

$$\nabla_0 \cdot ( J \mathbb{F}^{-T} ) = \vec{0} \ ,$$

since

$$
\nabla_0 \cdot \left( J \mathbb{F}^{-T} \cdot \vec{a} \right) 
= \nabla_0 \cdot \left( J \mathbb{F}^{-T} \right) \cdot \vec{a}
+ J \mathbb{F}^{-T} : \nabla_0 \vec{a} = 
 \nabla_0 \cdot \left( J \mathbb{F}^{-T} \right) \cdot \vec{a} + J \nabla \cdot \vec{a}
$$

**Proof.**

$$J = \left| \dfrac{\partial r_k}{\partial r^0_i} \right| = \varepsilon_{i_1, i_2, i_3} \dfrac{\partial r_{i_1}}{\partial r^0_1} \dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3}$$

$$\left( \mathbb{F}^{-T} \right)_{ij} = \dfrac{\partial r^0_i}{\partial r_j}$$

$$\begin{aligned}
\left\{ \nabla_0 \cdot \left( J \, \mathbb{F}^{-T} \right) \right\}_j
 & = \dfrac{\partial }{\partial r_i^0} \left(  \varepsilon_{i_1, i_2, i_3} \dfrac{\partial r_{i_1}}{\partial r^0_1} \dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3} \,  \dfrac{\partial r^0_i}{\partial r_j}\right) = \\
 & = \varepsilon_{i_1, i_2, i_3} \dfrac{\partial }{\partial r_i^0} \left(\dfrac{\partial r_{i_1}}{\partial r^0_1} \right)\dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3} \,  \dfrac{\partial r^0_i}{\partial r_j} 
   + \varepsilon_{i_1, i_2, i_3} \dfrac{\partial r_{i_1}}{\partial r^0_1}  \dfrac{\partial }{\partial r_i^0} \left( \dfrac{\partial r_{i_2}}{\partial r^0_2} \right) \dfrac{\partial r_{i_3}}{\partial r^0_3} \,  \dfrac{\partial r^0_i}{\partial r_j} + \\
 & + \varepsilon_{i_1, i_2, i_3} \dfrac{\partial r_{i_1}}{\partial r^0_1} \, \dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial }{\partial r_i^0} \left(\dfrac{\partial r_{i_3}}{\partial r^0_3}\right) \,  \dfrac{\partial r^0_i}{\partial r_j} 
   + \varepsilon_{i_1, i_2, i_3}\dfrac{\partial r_{i_1}}{\partial r^0_1} \dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3} \, \dfrac{\partial }{\partial r_i^0} \left(  \dfrac{\partial r^0_i}{\partial r_j} \right) = \\
 & = \varepsilon_{i_1, i_2, i_3}  \, \underbrace{\dfrac{\partial r^0_i}{\partial r_j}\dfrac{\partial }{\partial r_i^0}}_{= \frac{\partial }{\partial r_j}} \left(\dfrac{\partial r_{i_1}}{\partial r^0_1} \right)\dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3} 
   + \varepsilon_{i_1, i_2, i_3}  \dfrac{\partial r_{i_1}}{\partial r^0_1} \underbrace{ \dfrac{\partial r^0_i}{\partial r_j} \dfrac{\partial }{\partial r_i^0}}_{= \frac{\partial }{\partial r_j}} \, \left(\dfrac{\partial r_{i_2}}{\partial r^0_2} \right) \dfrac{\partial r_{i_3}}{\partial r^0_3} + \\
 & + \varepsilon_{i_1, i_2, i_3} \dfrac{\partial r_{i_1}}{\partial r^0_1} \, \dfrac{\partial r_{i_2}}{\partial r^0_2} \underbrace{\dfrac{\partial r^0_i}{\partial r_j}\dfrac{\partial }{\partial r_i^0}}_{=\frac{\partial}{\partial r_j}} \, \left(\dfrac{\partial r_{i_3}}{\partial r^0_3}\right)  
   + \varepsilon_{i_1, i_2, i_3}\dfrac{\partial r_{i_1}}{\partial r^0_1} \dfrac{\partial r_{i_2}}{\partial r^0_2} \dfrac{\partial r_{i_3}}{\partial r^0_3} \, \dfrac{\partial }{\partial r_j} \underbrace{\left(  \dfrac{\partial r^0_i}{\partial r^0_i} \right)}_{=3} = \\
   & = 0 \ ,
\end{aligned}$$

since 

$$\dfrac{\partial }{\partial r_j} \left( \dfrac{\partial r_{i_k}}{\partial r^0_k} \right) = \dfrac{\partial }{\partial r^0_k} \left( \dfrac{\partial r_{i_k}}{\partial r^j} \right) = \dfrac{\partial}{\partial r^0_k} \delta_{i_k j} = 0 \ .$$

Thus

$$\dfrac{1}{J}\dfrac{\partial}{\partial r^0_i} \left( J \dfrac{\partial r^0_i}{\partial r_j} a_j \right) = 
\dfrac{1}{J}\dfrac{\partial}{\partial r^0_i} \left( J \dfrac{\partial r^0_i}{\partial r_j} \right) a_j + \dfrac{1}{J} \, J \, \dfrac{\partial r^0_i}{\partial r_j} \, \dfrac{\partial a_j}{\partial r^0_i} = \dfrac{\partial a_j}{\partial r_j} = \nabla \cdot \vec{a} \ . $$


(continuum:governing-equations:reference-integral:internal-energy)=
## Internal energy

$$\begin{aligned}
  & \dfrac{d}{d t} \int_{V_t} \rho e \, dV = \int_{V_t} \mathbb{T} : \nabla \vec{v} \, dV - \oint_{\partial V_t} \hat{n} \cdot \vec{q} \, dS + \int_{V_t} \rho \, r \, dV = \\
  & \dfrac{d}{d t} \int_{V_0} \rho^0 e \, dV_0 = \int_{V_0} J \, \mathbb{T} : \nabla \vec{v} \, dV_0 - \oint_{\partial V_0} \hat{n}_0 \cdot \left( J \mathbb{F}^{-T} \cdot \vec{q} \right) \, dS_0 + \int_{V_0} \rho^0 \, r \, dV_0 = \\
\end{aligned}$$

and the differential form reads

$$\rho^0 \dfrac{D e}{Dt} = \mathbb{\Sigma}_n : \nabla_0 \vec{v} - \nabla_0 \cdot \vec{q}^0 + \rho^0 r \ .$$

**todo** *pay attention at the definition - choose one and keep using it! - of the product $\mathbb{A} : \mathbb{B}$*, in components

$$\mathbb{A} : \mathbb{B} = A_{ij} B_{ij} \qquad \text{or} \qquad = A_{ij} B_{ji}$$


