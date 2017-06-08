/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service362Service } from '../../services/service-362.service';

@Component({
  selector: 'app-comp-362',
  templateUrl: './comp-362.component.html',
  styleUrls: ['./comp-362.component.css']
})
export class Comp362Component implements OnInit {

  constructor(private _service: Service362Service) { }

  ngOnInit() {
  }

}
