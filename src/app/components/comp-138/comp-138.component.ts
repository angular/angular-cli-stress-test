/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service138Service } from '../../services/service-138.service';

@Component({
  selector: 'app-comp-138',
  templateUrl: './comp-138.component.html',
  styleUrls: ['./comp-138.component.css']
})
export class Comp138Component implements OnInit {

  constructor(private _service: Service138Service) { }

  ngOnInit() {
  }

}
