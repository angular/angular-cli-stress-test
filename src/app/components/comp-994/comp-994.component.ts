/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service994Service } from '../../services/service-994.service';

@Component({
  selector: 'app-comp-994',
  templateUrl: './comp-994.component.html',
  styleUrls: ['./comp-994.component.css']
})
export class Comp994Component implements OnInit {

  constructor(private _service: Service994Service) { }

  ngOnInit() {
  }

}
