/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service279Service } from '../../services/service-279.service';

@Component({
  selector: 'app-comp-279',
  templateUrl: './comp-279.component.html',
  styleUrls: ['./comp-279.component.css']
})
export class Comp279Component implements OnInit {

  constructor(private _service: Service279Service) { }

  ngOnInit() {
  }

}
