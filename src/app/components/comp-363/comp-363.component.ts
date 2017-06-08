/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service363Service } from '../../services/service-363.service';

@Component({
  selector: 'app-comp-363',
  templateUrl: './comp-363.component.html',
  styleUrls: ['./comp-363.component.css']
})
export class Comp363Component implements OnInit {

  constructor(private _service: Service363Service) { }

  ngOnInit() {
  }

}
