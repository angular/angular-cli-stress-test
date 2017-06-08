/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service840Service } from '../../services/service-840.service';

@Component({
  selector: 'app-comp-840',
  templateUrl: './comp-840.component.html',
  styleUrls: ['./comp-840.component.css']
})
export class Comp840Component implements OnInit {

  constructor(private _service: Service840Service) { }

  ngOnInit() {
  }

}
