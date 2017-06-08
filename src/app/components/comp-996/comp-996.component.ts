/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service996Service } from '../../services/service-996.service';

@Component({
  selector: 'app-comp-996',
  templateUrl: './comp-996.component.html',
  styleUrls: ['./comp-996.component.css']
})
export class Comp996Component implements OnInit {

  constructor(private _service: Service996Service) { }

  ngOnInit() {
  }

}
