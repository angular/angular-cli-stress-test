/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1792Component } from './comp-1792.component';

describe('Comp1792Component', () => {
  let component: Comp1792Component;
  let fixture: ComponentFixture<Comp1792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
