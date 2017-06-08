/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp728Component } from './comp-728.component';

describe('Comp728Component', () => {
  let component: Comp728Component;
  let fixture: ComponentFixture<Comp728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
