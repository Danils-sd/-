import 'package:flutter/material.dart';
import 'package:flutter_task3/presentation/models/ProductModel.dart';

class ProductWidget extends StatelessWidget {
  final ProductModel product;
  final VoidCallback onTap;

  const ProductWidget({
    super.key,
    required this.product,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
      child: ListTile(
        onTap: onTap,
        title: Text(product.title),
        subtitle: Text(product.subtitle),
        leading: Image.network(
          product.imageUri,
          width: 50,
          height: 50,
          fit: BoxFit.cover,
        ),
        trailing: Text("${product.cost}₽"),
      ),
    );
  }
}