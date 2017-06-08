/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service154Service } from '../../services/service-154.service';

@Component({
  selector: 'app-comp-154',
  templateUrl: './comp-154.component.html',
  styleUrls: ['./comp-154.component.css']
})
export class Comp154Component implements OnInit {

  constructor(private _service: Service154Service) { }

  ngOnInit() {
  }

}
