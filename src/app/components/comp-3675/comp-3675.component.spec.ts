/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3675Component } from './comp-3675.component';

describe('Comp3675Component', () => {
  let component: Comp3675Component;
  let fixture: ComponentFixture<Comp3675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
