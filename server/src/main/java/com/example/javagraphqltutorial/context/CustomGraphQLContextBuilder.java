package com.example.javagraphqltutorial.context;

import com.example.javagraphqltutorial.context.dataloader.DataLoaderRegistryFactory;
import graphql.kickstart.execution.context.GraphQLContext;
import graphql.kickstart.servlet.context.DefaultGraphQLServletContext;
import graphql.kickstart.servlet.context.DefaultGraphQLWebSocketContext;
import graphql.kickstart.servlet.context.GraphQLServletContextBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;
import javax.websocket.server.HandshakeRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomGraphQLContextBuilder implements GraphQLServletContextBuilder {

    private final DataLoaderRegistryFactory dataLoaderRegistryFactory;

    @Override
    public GraphQLContext build(HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse) {

        var userId = httpServletRequest.getHeader("user_id");

        var context = DefaultGraphQLServletContext.createServletContext()
                .with(httpServletRequest)
                .with(httpServletRequest)
                .with(dataLoaderRegistryFactory.create(userId))
                .build();

        return new CustomGraphQLContext(userId, context);
    }

    /**
     * Subscription (Chapter 33)
     */
    @Override
    public GraphQLContext build(Session session, HandshakeRequest handshakeRequest) {
        return DefaultGraphQLWebSocketContext.createWebSocketContext()
                .with(session)
                .with(handshakeRequest)
                .build();
    }

    @Override
    public GraphQLContext build() {
        throw new IllegalStateException("Unsupported");
    }

}