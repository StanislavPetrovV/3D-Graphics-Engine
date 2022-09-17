#version 330 core
out vec4 fragColor;

in vec4 clipCoords;

uniform samplerCube u_texture_skybox;
uniform mat4 m_invProjView;


void main() {
    vec4 worldCoords = m_invProjView * clipCoords;
    vec3 texCubeCoord = normalize(worldCoords.xyz / worldCoords.w);
    fragColor = texture(u_texture_skybox, texCubeCoord);
}