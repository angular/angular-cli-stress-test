/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp697Component } from './comp-697.component';

describe('Comp697Component', () => {
  let component: Comp697Component;
  let fixture: ComponentFixture<Comp697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
