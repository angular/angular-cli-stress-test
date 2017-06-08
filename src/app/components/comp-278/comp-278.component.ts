/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service278Service } from '../../services/service-278.service';

@Component({
  selector: 'app-comp-278',
  templateUrl: './comp-278.component.html',
  styleUrls: ['./comp-278.component.css']
})
export class Comp278Component implements OnInit {

  constructor(private _service: Service278Service) { }

  ngOnInit() {
  }

}
