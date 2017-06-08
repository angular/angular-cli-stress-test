/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2201Component } from './comp-2201.component';

describe('Comp2201Component', () => {
  let component: Comp2201Component;
  let fixture: ComponentFixture<Comp2201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
