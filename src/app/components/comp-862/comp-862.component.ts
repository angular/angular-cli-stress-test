/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service862Service } from '../../services/service-862.service';

@Component({
  selector: 'app-comp-862',
  templateUrl: './comp-862.component.html',
  styleUrls: ['./comp-862.component.css']
})
export class Comp862Component implements OnInit {

  constructor(private _service: Service862Service) { }

  ngOnInit() {
  }

}
