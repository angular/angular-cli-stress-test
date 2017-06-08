/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service444Service } from '../../services/service-444.service';

@Component({
  selector: 'app-comp-444',
  templateUrl: './comp-444.component.html',
  styleUrls: ['./comp-444.component.css']
})
export class Comp444Component implements OnInit {

  constructor(private _service: Service444Service) { }

  ngOnInit() {
  }

}
