package com.example.javagraphqltutorial.resolver.bank.query;

import com.example.javagraphqltutorial.context.dataloader.DataLoaderRegistryFactory;
import com.example.javagraphqltutorial.domain.bank.BankAccount;
import com.example.javagraphqltutorial.domain.bank.Client;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLResolver;
import graphql.schema.DataFetchingEnvironment;
import lombok.extern.slf4j.Slf4j;
import org.dataloader.DataLoader;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLResolver<BankAccount> {

    //private static final Executor executor = ExecutorFactory.newExecutor();

    private final ExecutorService executorService = Executors.newFixedThreadPool(
            Runtime.getRuntime().availableProcessors()
    );

    public CompletableFuture<Client>  client(BankAccount bankAccount) {
//        throw new GraphQLException("Client unavailable");

        return CompletableFuture.supplyAsync(() -> {
            log.info("Requesting client data for bank account id {}", bankAccount.getId());
            return Client.builder()
                    .id(UUID.randomUUID())
                    .firstName("Prime")
                    .lastName("Optimus")
                    .build();

        }, executorService);
    }

    public CompletableFuture<BigDecimal> balance(BankAccount bankAccount,
                                                 DataFetchingEnvironment environment) {
        DataLoader<UUID, BigDecimal> dataLoader = environment
                .getDataLoader(DataLoaderRegistryFactory.BALANCE_DATA_LOADER);
        return dataLoader.load(bankAccount.getId(), bankAccount);
    }
}
