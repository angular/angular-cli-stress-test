/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service664Service } from '../../services/service-664.service';

@Component({
  selector: 'app-comp-664',
  templateUrl: './comp-664.component.html',
  styleUrls: ['./comp-664.component.css']
})
export class Comp664Component implements OnInit {

  constructor(private _service: Service664Service) { }

  ngOnInit() {
  }

}
