/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1027Component } from './comp-1027.component';

describe('Comp1027Component', () => {
  let component: Comp1027Component;
  let fixture: ComponentFixture<Comp1027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
