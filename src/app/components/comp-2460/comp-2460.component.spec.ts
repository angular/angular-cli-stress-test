/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2460Component } from './comp-2460.component';

describe('Comp2460Component', () => {
  let component: Comp2460Component;
  let fixture: ComponentFixture<Comp2460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
