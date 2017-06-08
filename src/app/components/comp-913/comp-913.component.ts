/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service913Service } from '../../services/service-913.service';

@Component({
  selector: 'app-comp-913',
  templateUrl: './comp-913.component.html',
  styleUrls: ['./comp-913.component.css']
})
export class Comp913Component implements OnInit {

  constructor(private _service: Service913Service) { }

  ngOnInit() {
  }

}
