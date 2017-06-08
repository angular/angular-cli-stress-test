/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3326Component } from './comp-3326.component';

describe('Comp3326Component', () => {
  let component: Comp3326Component;
  let fixture: ComponentFixture<Comp3326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
