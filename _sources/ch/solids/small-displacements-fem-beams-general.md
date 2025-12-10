(solid-mechanics:intro:small-displacements-beam-fem:general)=
# General beam

```{dropdown} Strong form
:open:

Momentum and angular momentum balance equation for a straight beam

$$\begin{aligned}
  \mathbf{M} \begin{bmatrix} \ddot{\mathbf{s}} \\ \ddot{\boldsymbol\theta} \end{bmatrix} - \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}' - \begin{bmatrix} \mathbf{0} \\ \hat{\mathbf{z}} \times \mathbf{F} \end{bmatrix} = \begin{bmatrix} \mathbf{f} \\ \mathbf{m}  \end{bmatrix} \ ,
\end{aligned}$$

can be written as a function of kinematic variables,

$$\mathbf{M} \ddot{\mathbf{s}} + \left( \mathbf{K}_1 \mathbf{s}' + \mathbf{K}_2 \mathbf{s} \right)' + \mathbf{H}_1 \mathbf{s}' + \mathbf{H}_2 \mathbf{s} = \mathbf{f} \ ,$$

where the local displacement w.r.t. the beam coordinates $\mathbf{s}(z,t)$ are function of the axial coordinate $z$ and time $t$.

```

```{dropdown} Weak form
:open:

$$\begin{aligned}
 0
 & = \sum_{b \in \text{beams}} \int_{\ell_b} \begin{bmatrix} \mathbf{w}_b \\ \boldsymbol\varphi_b \end{bmatrix}^{T} \left\{ \mathbf{M}_b \begin{bmatrix} \ddot{\mathbf{s}}_b \\ \ddot{\boldsymbol\theta} \end{bmatrix} - \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}' - \begin{bmatrix} \mathbf{0} \\ \hat{\mathbf{z}} \times \mathbf{F} \end{bmatrix} - \begin{bmatrix} \mathbf{f}_b \\ \mathbf{m}_b \end{bmatrix}  \right\} = \\
 & = \sum_{b \in \text{beams}} \int_{\ell_b} \left\{ \mathbf{w}_b^T \left( \mathbf{M}_{11} \ddot{\mathbf{s}} + \mathbf{M}_{12} \ddot{\boldsymbol{\theta}} \right) + \mathbf{w}_b^{' \ T} \mathbf{F} - \mathbf{w}_b^T \mathbf{f}_b \right\} + \\
 & \quad \ + \sum_{b \in \text{beams}} \left\{ \boldsymbol\varphi_b^T \left( \mathbf{M}_{21} \ddot{\mathbf{s}} + \mathbf{M}_{22} \ddot{\boldsymbol{\theta}} \right) + \boldsymbol\varphi_b^{' \ T} \mathbf{M} - \boldsymbol\varphi_b^T \hat{\mathbf{z}} \times \mathbf{F} - \boldsymbol\varphi_b^T \mathbf{m}_b \right\} + \\
 & \quad \ - \left.\left[ \mathbf{w}_b^T \mathbf{F} + \boldsymbol\varphi^T_b \mathbf{M} \right]\right|_{\partial b}
\end{aligned}$$

Using the constitutive law 

$$\begin{aligned}
  \begin{bmatrix} \mathbf{F}_b \\ \mathbf{M}_b \end{bmatrix}
  & = \begin{bmatrix} \mathbf{K}_{11} & \mathbf{K}_{12} \\ \mathbf{K}_{21} & \mathbf{K}_{22} \end{bmatrix} \left( \begin{bmatrix} \mathbf{s}_b \\ \boldsymbol\theta_b \end{bmatrix}' + \begin{bmatrix} \hat{\mathbf{z}} \times \boldsymbol{\theta}_b \\ \mathbf{0} \end{bmatrix} \right) - \begin{bmatrix} \mathbf{b}_1 \\ \mathbf{b}_2 \end{bmatrix} \Delta T = \\
  & = \mathbf{K} \left( \begin{bmatrix} \mathbf{s}_b \\ \boldsymbol\theta_b \end{bmatrix}' + \begin{bmatrix} \mathbf{0} & \hat{\mathbf{z}}_\times \\ \mathbf{0} & \mathbf{0} \end{bmatrix} \begin{bmatrix} \mathbf{s}_b \\ \boldsymbol{\theta}_b \end{bmatrix} \right) - \begin{bmatrix} \mathbf{b}_1 \\ \mathbf{b}_2 \end{bmatrix} \Delta T \ ,
\end{aligned}$$

the problem can be written with kinetic variables (displacements and rotations) as the independent unknowns. The volume contribution of the internal actions due to displacements in beam $b$ becomes

$$\begin{aligned}
  & \int_{\ell_b} \left\{ \begin{bmatrix}  \mathbf{w}_b^{' \ T} & \boldsymbol\varphi_b^{' \ T} \end{bmatrix} - \begin{bmatrix} \mathbf{w}_b^T & \boldsymbol\varphi_b^T \end{bmatrix} \begin{bmatrix} \mathbf{0} & \mathbf{0} \\ \hat{\mathbf{z}}_\times & \mathbf{0} \end{bmatrix} \right\} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}^{mech} = \\
  & = \int_{\ell_b} \left\{ \begin{bmatrix}  \mathbf{w}_b^{' \ T} & \boldsymbol\varphi_b^{' \ T} \end{bmatrix} + \begin{bmatrix} \mathbf{w}_b^T & \boldsymbol\varphi_b^T \end{bmatrix} \begin{bmatrix} \mathbf{0} & \mathbf{0} \\ \hat{\mathbf{z}}^T_\times & \mathbf{0} \end{bmatrix} \right\} \left\{ \mathbf{K} \left( \begin{bmatrix} \mathbf{s}_b \\ \boldsymbol\theta_b \end{bmatrix}' + \begin{bmatrix} \mathbf{0} & \hat{\mathbf{z}}_\times \\ \mathbf{0} & \mathbf{0} \end{bmatrix} \right) \begin{bmatrix} \mathbf{s}_b \\ \boldsymbol{\theta}_b \end{bmatrix} \right\} = \\
  & = \int_{\ell_b} \left\{ \begin{bmatrix} \mathbf{w} \\ \boldsymbol\varphi \end{bmatrix}_b^{' \ T} \mathbf{K} \begin{bmatrix} \mathbf{s} \\ \boldsymbol\theta \end{bmatrix}_b^{'}
    + \begin{bmatrix} \mathbf{w} \\ \boldsymbol\varphi \end{bmatrix}_b^{ T} \begin{bmatrix} \mathbf{0} & \mathbf{0} \\ \hat{\mathbf{z}}_\times^T & \mathbf{0} \end{bmatrix} \mathbf{K} \begin{bmatrix} \mathbf{s} \\ \boldsymbol\theta \end{bmatrix}_b^{'} 
    + \begin{bmatrix} \mathbf{w} \\ \boldsymbol\varphi \end{bmatrix}_b^{' \ T} \mathbf{K} \begin{bmatrix} \mathbf{0} & \hat{\mathbf{z}}_\times \\ \mathbf{0} & \mathbf{0} \end{bmatrix}  \begin{bmatrix} \mathbf{s} \\ \boldsymbol\theta \end{bmatrix}_b 
    + \begin{bmatrix} \mathbf{w} \\ \boldsymbol\varphi \end{bmatrix}_b^{ T} \begin{bmatrix} \mathbf{0} & \mathbf{0} \\ \hat{\mathbf{z}}_\times^T & \mathbf{0} \end{bmatrix} \mathbf{K} \begin{bmatrix} \mathbf{0} & \hat{\mathbf{z}}_\times \\ \mathbf{0} & \mathbf{0} \end{bmatrix}  \begin{bmatrix} \mathbf{s} \\ \boldsymbol\theta \end{bmatrix}_b 
    \right\} = \\
  & = \int_{\ell_b} \left\{ \mathbf{v}^{' \ T}_b \mathbf{K} \mathbf{u}'_b + \mathbf{v}^T_b \mathbf{K}_1 \mathbf{u}'_b + \mathbf{v}^{' \ T}_b \mathbf{K}_1^T \mathbf{u}_b + \mathbf{v}^T_b \mathbf{K}_2 \mathbf{u}_b \right\} \ .
\end{aligned}$$

having exploited $-\hat{\mathbf{z}}_\times = \hat{\mathbf{z}}^T_{\times}$, and defined $\mathbf{u} = \begin{bmatrix} \mathbf{s} \\ \boldsymbol\theta \end{bmatrix}$. The PVW thus becomes

$$0 = \sum_b \left\{ \int_{\ell_b} \left\{ \mathbf{v}_b^T \mathbf{M} \ddot{\mathbf{u}}_b + \mathbf{v}^{' \ T}_b \mathbf{K} \mathbf{u}'_b + \mathbf{v}^T_b \mathbf{K}_1 \mathbf{u}'_b + \mathbf{v}^{' \ T}_b \mathbf{K}_1^T \mathbf{u}_b + \mathbf{v}^T_b \mathbf{K}_2 \mathbf{u}_b - \left( \mathbf{v}_b^{' \ T} \mathbf{b} + \mathbf{v}_b^T \widetilde{\mathbf{b}} \right) \Delta T - \mathbf{v}_b^T \widetilde{\mathbf{f}}_b \right\} - \left.\left[ \mathbf{v}_b^T \widetilde{\mathbf{F}}_b \right]\right|_{\partial b} \right\} \ .$$

```

```{dropdown} Finite element method
:open:

Using the same functions as test and base functions, i.e. testing for every $\mathbf{n}(z)$, with an expansion of the variable $\mathbf{u}_b(z,t) = \mathbf{N}(z) \mathbf{u}^{loc}_b(t)$, with a minor abuse of notation,

$$\begin{aligned}
 \mathbf{0}
 & = \sum_{b} \left\{ \int_{\ell_b} \mathbf{N}_b^T \mathbf{M} \mathbf{N}_b \, \ddot{\mathbf{u}}_b + \int_{\ell_b} \left\{ \mathbf{N}_b^{' \ T} \mathbf{K} \mathbf{N}_b + \mathbf{N}_b^T \mathbf{K}_1 \mathbf{N}_b' + \mathbf{N}^{' \ T}_b \mathbf{K}_1 \mathbf{N}_b + \mathbf{N}^T_b \mathbf{K}_2 \mathbf{N}_b \right\} \mathbf{u}_b  - \int_{\ell_b} \left\{ \mathbf{N}'_b \mathbf{b} + \mathbf{N}_b \widetilde{\mathbf{b}} \right\} \Delta T  - \int_{\ell_b} \mathbf{N}_b^T \widetilde{\mathbf{f}} - \left.\left[ \mathbf{N}_b^T \widetilde{\mathbf{F}}_b \right] \right|_{\partial \ b} \right\} = \\
 & = \sum_b \left\{ \mathbf{M}_b^{loc} \ddot{\mathbf{u}}^{loc}_b + \mathbf{K}_b^{loc} \mathbf{u}^{loc}_b - \mathbf{B}^{loc}_b \boldsymbol\Delta \mathbf{T} - \mathbf{q}^{loc}_b + \dots \right\}
\end{aligned}$$

Transofrming local *nodal variables* into global nodal variables, (and updating the projection as well, $\mathbf{v}^{loc}_b = \mathbf{T} \mathbf{v}_b$),

$$\mathbf{u}^{loc}_b = \mathbf{T}_b \mathbf{u}_b \ ,$$

the problem becomes

$$\mathbf{0} = \sum_b \left\{ \mathbf{M}_b \ddot{\mathbf{u}}_b + \mathbf{K}_b \mathbf{u}_b - \mathbf{B}_b \boldsymbol\Delta \mathbf{T} - \mathbf{q}_b \right\}$$

**Assembly of the finite element linear system.**

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} + \mathbf{B} \boldsymbol\Delta \mathbf{T} \ .$$

* It can be formally represented by matrix multiplication
* It's performed assembling matrices in **sparse format**

```

