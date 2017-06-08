/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service760Service } from '../../services/service-760.service';

@Component({
  selector: 'app-comp-760',
  templateUrl: './comp-760.component.html',
  styleUrls: ['./comp-760.component.css']
})
export class Comp760Component implements OnInit {

  constructor(private _service: Service760Service) { }

  ngOnInit() {
  }

}
