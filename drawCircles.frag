#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


float drawCircle(vec2 coord, vec2 pos, float radius){
   return step(distance(coord,pos),radius);
}
float drawCircleSmooth(vec2 coord, vec2 pos, float radius){
   return smoothstep(radius + radius,radius,distance(coord,pos));
}

void main(){
   vec2 coord = gl_FragCoord.xy/u_resolution;
   vec3 color = vec3(0.0);

   color += vec3(drawCircleSmooth(coord,vec2(0.5),0.1)) * vec3(0.5059, 0.3373, 0.3373);
   color += vec3(drawCircleSmooth(coord,vec2(0.5),0.01)) * vec3(0.149, 0.5333, 0.1686);
   color += vec3(drawCircle(coord,vec2(0.1),0.3 + cos(u_time))) * vec3(0.3373, 0.5059, 0.4549);
   color += vec3(drawCircle(coord,vec2(0.8 ,0.3 + sin(u_time)),0.1)) * vec3(0.3333, 0.1529, 0.1529);

   gl_FragColor = vec4(color, 1.0);
}