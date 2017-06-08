/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service368Service } from '../../services/service-368.service';

@Component({
  selector: 'app-comp-368',
  templateUrl: './comp-368.component.html',
  styleUrls: ['./comp-368.component.css']
})
export class Comp368Component implements OnInit {

  constructor(private _service: Service368Service) { }

  ngOnInit() {
  }

}
