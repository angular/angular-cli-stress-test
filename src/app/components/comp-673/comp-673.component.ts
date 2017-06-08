/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service673Service } from '../../services/service-673.service';

@Component({
  selector: 'app-comp-673',
  templateUrl: './comp-673.component.html',
  styleUrls: ['./comp-673.component.css']
})
export class Comp673Component implements OnInit {

  constructor(private _service: Service673Service) { }

  ngOnInit() {
  }

}
