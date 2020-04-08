const kruskal = require('./../../graphs/kruskal');
const { Graph } = require('../../graphs/graph');
const chai = require('chai');
const expect = chai.expect;

describe('#graphs', function () {
    describe('#kruskal', function () {
        let g;
        beforeEach(() => {
            g = new Graph();
            g.addEdge(1, 2, 3);
            g.addEdge(1, 6, 1);
            g.addEdge(2, 3, 3);
            g.addEdge(2, 4, 2);
            g.addEdge(2, 5, 4);
            g.addEdge(3, 4, 6);
            g.addEdge(3, 6, 5);
        });

        it ('should create a tree', function () {
            const actual = kruskal(g);
            expect(actual).to.exist;
            const expected = [[1, 6], [2, 4], [1, 2], [2, 3], [2, 5]];
            expected.forEach((nodes, index) => {
                expect(actual[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(actual[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });
    });
});