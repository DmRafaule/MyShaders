// Author: Inigo Quiles
// Title: Expo

#ifdef GL_ES
precision mediump float;
#endif


uniform vec2     u_resolution;
uniform vec2     u_mouse;
uniform float    u_time;

const float pi = 3.14159265359;

float drawRectFloor(vec2 coord){
   vec2 bl = floor(coord / .1);
   float res = bl.x * bl.y;
   vec2 rt =  floor(.9 / coord);
   return res *= rt.x * rt.y;
}
float drawRectStep(vec2 coord, vec2 offset,vec2 scale){
   scale = 1.0 - scale;
   coord.x += offset.x;
   coord.y += offset.y;

   vec2 bl = step(vec2(scale.x,scale.y), coord);
   vec2 rt =  step(vec2(scale.x,scale.y), 1.0 - coord);
   
   return  rt.x * rt.y * bl.x * bl.y;
}

void main() {
   vec2 coord = gl_FragCoord.xy / u_resolution;
   vec3 color = vec3(0.0, 0.0, 0.0);
   vec3 colorFig = vec3(0);

   color += vec3(drawRectStep(coord,vec2(0.4,0.1),vec2(0.6))) * vec3(0.2471, 0.0549, 0.0549);
   color += vec3(drawRectStep(coord,vec2(0.,0.),vec2(0.6))) * vec3(0.2471, 0.2039, 0.0549);
   color += vec3(drawRectStep(coord,vec2(0.4,-0.4),vec2(0.78))) * vec3(0.1922, 0.0549, 0.2471);
   color += vec3(drawRectStep(coord,vec2(-0.4,-0.08),vec2(0.79,0.9))) * vec3(0.0314, 0.1333, 0.1725);
   color += vec3(drawRectStep(coord,vec2(0.015,-0.4),vec2(0.6,0.79))) * vec3(0.2667, 0.6471, 0.349);
   color += vec3(drawRectStep(coord,vec2(0.4,0.4),vec2(0.69,0.68))) * vec3(0.0902, 0.4745, 0.4745);
   color += vec3(drawRectStep(coord,vec2(0.05,0.4),vec2(0.65,0.78))) * vec3(0.0863, 0.2471, 0.1333);

   gl_FragColor = vec4(color,1.0);
}
