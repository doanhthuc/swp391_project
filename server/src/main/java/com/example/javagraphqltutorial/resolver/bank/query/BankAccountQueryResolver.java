package com.example.javagraphqltutorial.resolver.bank.query;

import com.example.javagraphqltutorial.connection.CursorUtil;
import com.example.javagraphqltutorial.context.CustomGraphQLContext;
import com.example.javagraphqltutorial.domain.bank.BankAccount;
import com.example.javagraphqltutorial.domain.bank.Client;
import com.example.javagraphqltutorial.domain.bank.Currency;
import com.example.javagraphqltutorial.repository.BankAccountRepository;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.relay.*;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.SelectedField;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.Nullable;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class BankAccountQueryResolver implements GraphQLQueryResolver {

    private final BankAccountRepository bankAccountRepository;
    private final CursorUtil cursorUtil;

    public BankAccount bankAccount(UUID id, DataFetchingEnvironment environment) {
        log.info("Retrieving bank account id: {}", id);

        CustomGraphQLContext context = environment.getContext();

        log.info("User ID: {}", context.getUserId());

        var requestedFields = environment.getSelectionSet().getFields().stream()
                .map(SelectedField::getName).collect(Collectors.toUnmodifiableSet());

        log.info("Requested Fields: {}", requestedFields);

        if (environment.getSelectionSet().contains("someSpecFiled")) {
            //do some special stuff
        }

        return BankAccount.builder().id(id).currency(Currency.USD).build();
    }

    public Connection<BankAccount> bankAccounts(int first, @Nullable String cursor) {
        List<Edge<BankAccount>> edges = getBankAccounts(cursor)
                .stream()
                .map(bankAccount -> new DefaultEdge<>(bankAccount,
                        cursorUtil.createCursorWith(bankAccount.getId())))
                .limit(first)
                .collect(Collectors.toUnmodifiableList());

        var pageInfo = new DefaultPageInfo(
                cursorUtil.getFirstCursorFrom(edges),
                cursorUtil.getLastCursorFrom(edges),
                cursor != null,
                edges.size() >= first);

        return new DefaultConnection<>(edges, pageInfo);
    }

    public List<BankAccount> getBankAccounts(String cursor) {
        if (cursor == null) {
            return bankAccountRepository.getBankAccounts();
        }
        return bankAccountRepository.getBankAccountsAfter(cursorUtil.decode(cursor));
    }
}
