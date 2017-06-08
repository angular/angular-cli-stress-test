/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service596Service } from '../../services/service-596.service';

@Component({
  selector: 'app-comp-596',
  templateUrl: './comp-596.component.html',
  styleUrls: ['./comp-596.component.css']
})
export class Comp596Component implements OnInit {

  constructor(private _service: Service596Service) { }

  ngOnInit() {
  }

}
