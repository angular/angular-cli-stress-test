/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1713Component } from './comp-1713.component';

describe('Comp1713Component', () => {
  let component: Comp1713Component;
  let fixture: ComponentFixture<Comp1713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
