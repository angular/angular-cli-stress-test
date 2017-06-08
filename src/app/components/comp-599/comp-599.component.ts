/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service599Service } from '../../services/service-599.service';

@Component({
  selector: 'app-comp-599',
  templateUrl: './comp-599.component.html',
  styleUrls: ['./comp-599.component.css']
})
export class Comp599Component implements OnInit {

  constructor(private _service: Service599Service) { }

  ngOnInit() {
  }

}
