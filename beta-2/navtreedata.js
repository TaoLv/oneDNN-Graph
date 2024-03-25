/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "oneDNN Graph", "index.html", [
    [ "Developer Guide", "index.html", null ],
    [ "Building and Linking", "usergroup0.html", [
      [ "Build from Source", "dev_guide_build.html", null ],
      [ "Build Options", "dev_guide_build_options.html", null ]
    ] ],
    [ "Programming Model", "usergroup1.html", [
      [ "Basic Concepts", "dev_guide_basic_concepts.html", null ],
      [ "CPU Programming", "dev_guide_cpu_programming.html", null ],
      [ "Data Types", "dev_guide_data_types.html", null ],
      [ "SYCL Programming", "dev_guide_sycl_programming.html", null ],
      [ "OPs and Patterns", "dev_guide_ops_and_patterns.html", null ]
    ] ],
    [ "Supported Operations", "usergroup2.html", [
      [ "Add", "dev_guide_op_add.html", null ],
      [ "AbsBackprop", "dev_guide_op_absbackprop.html", null ],
      [ "AvgPool", "dev_guide_op_avgpool.html", null ],
      [ "AvgPoolBackprop", "dev_guide_op_avgpoolbackprop.html", null ],
      [ "BatchNormForwardTraining", "dev_guide_op_batchnormforwardtraining.html", null ],
      [ "BatchNormInference", "dev_guide_op_batchnorminference.html", null ],
      [ "BatchNormTrainingBackprop", "dev_guide_op_batchnormtrainingbackprop.html", null ],
      [ "BiasAdd", "dev_guide_op_biasadd.html", null ],
      [ "BiasAddBackprop", "dev_guide_op_biasaddbackprop.html", null ],
      [ "Clamp", "dev_guide_op_clamp.html", null ],
      [ "ClampBackprop", "dev_guide_op_clampbackprop.html", null ],
      [ "Concat", "dev_guide_op_concat.html", null ],
      [ "Convolution", "dev_guide_op_convolution.html", null ],
      [ "ConvolutionBackpropData", "dev_guide_op_convolutionbackpropdata.html", null ],
      [ "ConvolutionBackpropFilters", "dev_guide_op_convolutionbackpropfilters.html", null ],
      [ "ConvTranspose", "dev_guide_op_convtranspose.html", null ],
      [ "ConvTransposeBackpropData", "dev_guide_op_convtransposebackpropdata.html", null ],
      [ "ConvTransposeBackpropFilters", "dev_guide_op_convtransposebackpropfilters.html", null ],
      [ "Dequantize", "dev_guide_op_dequantize.html", null ],
      [ "Divide", "dev_guide_op_divide.html", null ],
      [ "DynamicDequantize", "dev_guide_op_dynamicdequantize.html", null ],
      [ "DynamicQuantize", "dev_guide_op_dynamicquantize.html", null ],
      [ "DynamicReshape", "dev_guide_op_dynamicreshape.html", null ],
      [ "DynamicTranspose", "dev_guide_op_dynamictranspose.html", null ],
      [ "Elu", "dev_guide_op_elu.html", null ],
      [ "EluBackprop", "dev_guide_op_elubackprop.html", null ],
      [ "End", "dev_guide_op_end.html", null ],
      [ "Equal", "dev_guide_op_equal.html", null ],
      [ "Erf", "dev_guide_op_erf.html", null ],
      [ "Exp", "dev_guide_op_exp.html", null ],
      [ "GELU", "dev_guide_op_gelu.html", null ],
      [ "GELUBackprop", "dev_guide_op_gelubackprop.html", null ],
      [ "Greater", "dev_guide_op_greater.html", null ],
      [ "GreaterEqual", "dev_guide_op_greaterequal.html", null ],
      [ "HardSwish", "dev_guide_op_hardswish.html", null ],
      [ "HardSwishBackprop", "dev_guide_op_hardswishbackprop.html", null ],
      [ "Index", "dev_guide_op_index.html", null ],
      [ "Interpolate", "dev_guide_op_interpolate.html", null ],
      [ "InterpolateBackprop", "dev_guide_op_interpolatebackprop.html", null ],
      [ "LayerNorm", "dev_guide_op_layernorm.html", null ],
      [ "LayerNormBackprop", "dev_guide_op_layernormbackprop.html", null ],
      [ "LeakyReLU", "dev_guide_op_leakyrelu.html", null ],
      [ "Less", "dev_guide_op_less.html", null ],
      [ "LessEqual", "dev_guide_op_lessequal.html", null ],
      [ "Log", "dev_guide_op_log.html", null ],
      [ "LogicalAnd", "dev_guide_op_logicaland.html", null ],
      [ "LogicalOr", "dev_guide_op_logicalor.html", null ],
      [ "LogicalNot", "dev_guide_op_logicalnot.html", null ],
      [ "LogicalXor", "dev_guide_op_logicalxor.html", null ],
      [ "LogSoftmax", "dev_guide_op_logsoftmax.html", null ],
      [ "LogSoftmaxBackprop", "dev_guide_op_logsoftmaxbackprop.html", null ],
      [ "MatMul", "dev_guide_op_matmul.html", null ],
      [ "Maximum", "dev_guide_op_maximum.html", null ],
      [ "MaxPool", "dev_guide_op_maxpool.html", null ],
      [ "MaxPoolBackprop", "dev_guide_op_maxpoolbackprop.html", null ],
      [ "Minimum", "dev_guide_op_minimum.html", null ],
      [ "Mish", "dev_guide_op_mish.html", null ],
      [ "MishBackprop", "dev_guide_op_mishbackprop.html", null ],
      [ "Multiply", "dev_guide_op_multiply.html", null ],
      [ "Negative", "dev_guide_op_negative.html", null ],
      [ "NotEqual", "dev_guide_op_notequal.html", null ],
      [ "Pow", "dev_guide_op_pow.html", null ],
      [ "PowBackprop", "dev_guide_op_powbackprop.html", null ],
      [ "PowBackpropExponent", "dev_guide_op_powbackpropexponent.html", null ],
      [ "PReLU", "dev_guide_op_prelu.html", null ],
      [ "PReLUBackprop", "dev_guide_op_prelubackprop.html", null ],
      [ "Quantize", "dev_guide_op_quantize.html", null ],
      [ "Reciprocal", "dev_guide_op_reciprocal.html", null ],
      [ "ReduceL1", "dev_guide_op_reducel1.html", null ],
      [ "ReduceL2", "dev_guide_op_reducel2.html", null ],
      [ "ReduceMax", "dev_guide_op_reducemax.html", null ],
      [ "ReduceMean", "dev_guide_op_reducemean.html", null ],
      [ "ReduceMin", "dev_guide_op_reducemin.html", null ],
      [ "ReduceProd", "dev_guide_op_reduceprod.html", null ],
      [ "ReduceSum", "dev_guide_op_reducesum.html", null ],
      [ "ReLU", "dev_guide_op_relu.html", null ],
      [ "ReLUBackprop", "dev_guide_op_relubackprop.html", null ],
      [ "Reorder", "dev_guide_op_reorder.html", null ],
      [ "Round", "dev_guide_op_round.html", null ],
      [ "Rsqrt", "dev_guide_op_rsqrt.html", null ],
      [ "Select", "dev_guide_op_select.html", null ],
      [ "Sigmoid", "dev_guide_op_sigmoid.html", null ],
      [ "SigmoidBackprop", "dev_guide_op_sigmoidbackprop.html", null ],
      [ "Sign", "dev_guide_op_sign.html", null ],
      [ "SoftMax", "dev_guide_op_softmax.html", null ],
      [ "SoftMaxBackprop", "dev_guide_op_softmaxbackprop.html", null ],
      [ "SoftPlus", "dev_guide_op_softplus.html", null ],
      [ "SoftPlusBackprop", "dev_guide_op_softplusbackprop.html", null ],
      [ "Sqrt", "dev_guide_op_sqrt.html", null ],
      [ "SqrtBackprop", "dev_guide_op_sqrtbackprop.html", null ],
      [ "Square", "dev_guide_op_square.html", null ],
      [ "SquaredDifference", "dev_guide_op_squareddifference.html", null ],
      [ "StaticReshape", "dev_guide_op_staticreshape.html", null ],
      [ "StaticTranspose", "dev_guide_op_statictranspose.html", null ],
      [ "Subtract", "dev_guide_op_subtract.html", null ],
      [ "Tanh", "dev_guide_op_tanh.html", null ],
      [ "TanhBackprop", "dev_guide_op_tanhbackprop.html", null ],
      [ "TypeCast", "dev_guide_op_typecast.html", null ],
      [ "Wildcard", "dev_guide_op_wildcard.html", null ]
    ] ],
    [ "Performance Profiling", "usergroup3.html", [
      [ "Verbose Mode", "dev_guide_verbose_mode.html", null ],
      [ "Graph Serialization", "dev_guide_graph_serialization.html", null ]
    ] ],
    [ "Examples", "dev_guide_examples.html", null ],
    [ "Naming Conventions", "dev_guide_conventions.html", null ],
    [ "API Reference", "usergroup4.html", [
      [ "Modules", "modules.html", "modules" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", null ],
          [ "Functions", "functions_func.html", null ],
          [ "Variables", "functions_vars.html", null ],
          [ "Enumerations", "functions_enum.html", null ]
        ] ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"dev_guide_op_multiply.html",
"group__dnnl__graph__api__service.html#ga510ae6f05b22657234d415a88f610aff"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';