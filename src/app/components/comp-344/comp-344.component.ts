/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service344Service } from '../../services/service-344.service';

@Component({
  selector: 'app-comp-344',
  templateUrl: './comp-344.component.html',
  styleUrls: ['./comp-344.component.css']
})
export class Comp344Component implements OnInit {

  constructor(private _service: Service344Service) { }

  ngOnInit() {
  }

}
