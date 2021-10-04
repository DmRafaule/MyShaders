#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleShape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main(){
    // Normalized coordinates
    vec2 pos = gl_FragCoord.xy / u_resolution;
    // Set up color for pixel
    vec3 color = vec3(0.0);
    /* Define position for pixel
     Because angle's sine will waraying from -1 to 1(because of u_time) we can change 
     position pixel by time */
    vec2 transl = vec2(sin(u_time),0.0);
    pos += transl * 0.5;
    // Define where and how big circle will be
    float circle = circleShape(pos,0.2);
    color = vec3(circle);
    
    gl_FragColor = vec4(color, 1.0);
}
