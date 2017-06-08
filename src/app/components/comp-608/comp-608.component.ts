/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service608Service } from '../../services/service-608.service';

@Component({
  selector: 'app-comp-608',
  templateUrl: './comp-608.component.html',
  styleUrls: ['./comp-608.component.css']
})
export class Comp608Component implements OnInit {

  constructor(private _service: Service608Service) { }

  ngOnInit() {
  }

}
