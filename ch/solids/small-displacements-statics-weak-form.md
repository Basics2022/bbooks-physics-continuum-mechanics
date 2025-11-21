(solid-mechanics:intro:small-displacements-statics-weak-form)=
# Small displacement - Statics - Weak formulation and "energy" theorems

This section presents different weak formulations of the elastic problem, for different models of elastic structures

- [3-dimensional solid](solid-mechanics:intro:small-displacements-statics-weak-form-3d)
- [General beam model](solid-mechanics:intro:small-displacements-statics-beam-weak-form-general)
- [Simplified beam models](solid-mechanics:intro:small-displacements-statics-beam-weak-form)

The results shown here can be classified into two different approaches:
- **displacement approach**: weak form of the equilibrium equations, principle of virtual work, and stationariety of the total potential energy
- **force approach**: weak form of the congruence conditionss, principle of complementary virtual work, and stationariety of the total complementary potential energy.

Some [problems about beam structures](solid-mechanics:small-displacements:beams:problems) can be conveniently approached with the contents of this  section.

<!-- :class: tip dropdown -->
```{admonition} Reading guidance
:class: tip dropdown

There is no mandatory or recommended order for addressing these paragraphs. The treatment of the **elastic solid** requires some familiarity with *tensors*. Beam models can be treated as simplified models of the 3-dimensional solid, under assumptions on stress (or strain) fields. The formulation of the **general elastic beam** introduces a vector-based framework applicable to any elastic beam: it may appear obscure or cryptic at first, but it offers a level of generality that greatly simplifies the *numerical implementation* of arbitrary beam models. The **structurally decoupled elastic beam** is a very specific case of this general treatment, yet it enables the construction of *simple models* suitable for solving structural problems by hand, using only paper, pencil, and manageable amounts of algebra. Simple models become even simpler for [slender beams](solid-mechanics:small-displacements:beams:slender) with Bernoulli's kinematic assumption - i.e. if displacement due to axial and shear actions are negligible if compared with bending. This approach helps internalize the core principles by allowing practice on simpler problems without unnecessary algebraic complexity — after all, computers exist for the heavy calculations.

```
