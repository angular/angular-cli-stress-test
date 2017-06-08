/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service577Service } from '../../services/service-577.service';

@Component({
  selector: 'app-comp-577',
  templateUrl: './comp-577.component.html',
  styleUrls: ['./comp-577.component.css']
})
export class Comp577Component implements OnInit {

  constructor(private _service: Service577Service) { }

  ngOnInit() {
  }

}
